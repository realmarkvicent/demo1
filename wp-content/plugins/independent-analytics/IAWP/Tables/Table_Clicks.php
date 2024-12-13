<?php

namespace IAWP\Tables;

use IAWP\Filter_Lists\Link_Name_Filter_List;
use IAWP\Rows\Clicks;
use IAWP\Statistics\Click_Statistics;
use IAWP\Tables\Columns\Column;
use IAWP\Tables\Groups\Group;
use IAWP\Tables\Groups\Groups;
/** @internal */
class Table_Clicks extends \IAWP\Tables\Table
{
    protected $default_sorting_column = 'link_clicks';
    protected function table_name() : string
    {
        return 'clicks';
    }
    protected function groups() : Groups
    {
        $groups = [];
        $groups[] = new Group('click', \__('Click', 'independent-analytics'), Clicks::class, Click_Statistics::class);
        return new Groups($groups);
    }
    protected function local_columns() : array
    {
        $columns = [new Column(['id' => 'link_name', 'name' => \__('Link Pattern', 'independent-analytics'), 'visible' => \true, 'type' => 'select', 'options' => Link_Name_Filter_List::options(), 'database_column' => 'link_rules.link_rule_id']), new Column(['id' => 'link_target', 'name' => \__('Target', 'independent-analytics'), 'visible' => \true, 'type' => 'string']), new Column(['id' => 'link_clicks', 'name' => \__('Clicks', 'independent-analytics'), 'visible' => \true, 'type' => 'int'])];
        return $columns;
    }
}
