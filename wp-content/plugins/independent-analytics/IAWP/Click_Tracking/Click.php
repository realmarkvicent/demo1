<?php

namespace IAWP\Click_Tracking;

use IAWP\Illuminate_Builder;
use IAWP\Tables;
use IAWPSCOPED\Illuminate\Database\Query\Builder;
use IAWPSCOPED\Illuminate\Support\Str;
/** @internal */
class Click
{
    private $protocol;
    private $value;
    private $href;
    private $classes;
    private $resource_id;
    private $visitor_id;
    private $created_at;
    private function __construct(array $record)
    {
        $this->protocol = $this->extract_protocol_from_href($record['href']);
        $this->value = $this->extract_target_value_from_href($record['href']);
        $this->href = $record['href'];
        $this->classes = $record['classes'];
        $this->resource_id = $record['resource_id'];
        $this->visitor_id = $record['visitor_id'];
        $this->created_at = $record['created_at'];
    }
    /**
     * Update the database
     *
     * @return void
     */
    public function track() : void
    {
        $link_rules = \IAWP\Click_Tracking\Link_Rule_Finder::new($this->protocol, $this->href, $this->classes)->links();
        if ($link_rules->isEmpty()) {
            return;
        }
        $click_target = $this->get_click_target();
        $view_id = $this->get_view_id();
        if (\is_null($view_id)) {
            return;
        }
        $click_id = Illuminate_Builder::new()->from(Tables::clicks())->insertGetId(['click_target_id' => $click_target->click_target_id, 'view_id' => $view_id, 'created_at' => $this->created_at->format('Y-m-d H:i:s')]);
        $link_rules->each(function ($link_rule) use($click_id) {
            Illuminate_Builder::new()->from(Tables::clicked_links())->insertGetId(['click_id' => $click_id, 'link_rule_id' => $link_rule->id()]);
        });
    }
    private function extract_protocol_from_href(?string $href) : ?string
    {
        if (\is_null($href)) {
            return null;
        }
        if (Str::startsWith($href, ['tel:', 'mailto:'])) {
            return Str::before($href, ':');
        }
        return null;
    }
    private function extract_target_value_from_href(?string $href) : ?string
    {
        if (\is_null($href)) {
            return null;
        }
        if (Str::startsWith($href, ['tel:', 'mailto:'])) {
            return Str::after($href, ':');
        }
        return $href;
    }
    private function get_click_target() : object
    {
        $select_query = Illuminate_Builder::new()->from(Tables::click_targets())->where('target', '=', $this->value)->when(\is_null($this->protocol), function (Builder $query) {
            $query->whereNull('protocol');
        })->when(\is_string($this->protocol), function (Builder $query) {
            $query->where('protocol', '=', $this->protocol);
        });
        $target = $select_query->first();
        if (\is_object($target)) {
            return $target;
        }
        Illuminate_Builder::new()->from(Tables::click_targets())->insertOrIgnore(['target' => $this->value, 'protocol' => $this->protocol]);
        return $select_query->first();
    }
    private function get_view_id() : ?int
    {
        $sessions_table = Tables::sessions();
        $view_id = Illuminate_Builder::new()->from(Tables::views(), 'views')->join("{$sessions_table} AS sessions", 'views.session_id', '=', 'sessions.session_id')->where('views.resource_id', '=', $this->resource_id)->where('sessions.visitor_id', '=', $this->visitor_id)->where('views.viewed_at', '<=', $this->created_at->format('Y-m-d H:i:s'))->orderByDesc('views.viewed_at')->limit(1)->value('views.id');
        // There's a small chance that view_id is a string instead of an int. In that case,
        // it should be converted to a string.
        // https://github.com/andrewjmead/independent-analytics/issues/1335
        if (\is_string($view_id)) {
            return (int) $view_id;
        }
        if (\is_int($view_id)) {
            return $view_id;
        }
        return null;
    }
    public static function new(array $record) : ?self
    {
        return new self($record);
    }
}
