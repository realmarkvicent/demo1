!function(t,e,a,n,s){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof r[n]&&r[n],o=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(e,a){if(!o[e]){if(!t[e]){var s="function"==typeof r[n]&&r[n];if(!a&&s)return s(e,!0);if(i)return i(e,!0);if(c&&"string"==typeof e)return c(e);var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}p.resolve=function(a){var n=t[e][1][a];return null!=n?n:a},p.cache={};var u=o[e]=new l.Module(e);t[e][0].call(u.exports,p,u,u.exports,this)}return o[e].exports;function p(t){var e=p.resolve(t);return!1===e?{}:l(e)}}l.isParcelRequire=!0,l.Module=function(t){this.id=t,this.bundle=l,this.exports={}},l.modules=t,l.cache=o,l.parent=i,l.register=function(e,a){t[e]=[function(t,e){e.exports=a},{}]},Object.defineProperty(l,"root",{get:function(){return r[n]}}),r[n]=l;for(var d=0;d<e.length;d++)l(e[d]);if(a){var u=l(a);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({kUI8B:[function(t,e,a){var n=t("./modules/scroll-to-top"),s=t("./modules/notices"),r=t("./modules/sticky-sidebar"),i=t("./modules/support"),o=t("./modules/date-picker");jQuery(function(t){(0,r.StickySidebar).setup(),(0,s.Notices).setup(),(0,n.ScrollToTop).setup(),(0,i.Support).setup(),(0,o.DatePicker).setup()})},{"./modules/scroll-to-top":"lyZ90","./modules/notices":"lAp1h","./modules/sticky-sidebar":"9VBuq","./modules/support":"7ei3m","./modules/date-picker":"9qgQu"}],lyZ90:[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"ScrollToTop",function(){return r});var s=jQuery,r={setup:function(){s("#scroll-to-top").on("click",function(){window.scrollTo({top:0,behavior:"smooth"}),s(this).blur()})}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],kPSB8:[function(t,e,a){a.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},a.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.exportAll=function(t,e){return Object.keys(t).forEach(function(a){"default"===a||"__esModule"===a||Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[a]}})}),e},a.export=function(t,e,a){Object.defineProperty(t,e,{enumerable:!0,get:a})}},{}],lAp1h:[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"Notices",function(){return o});var s=t("@swc/helpers/_/_object_spread"),r=t("@swc/helpers/_/_object_spread_props"),i=jQuery,o={setup:function(){i(".dismiss-notice").on("click",function(){var t=i(this).data("notice-id"),e=(0,r._)((0,s._)({},iawpActions.dismiss_notice),{id:t});"iawp_show_gsg"===t?i(".iawp-getting-started-notice").hide():i(this).parents(".iawp-notice").hide(),jQuery.post(ajaxurl,e,function(t){}).fail(function(){})})}}},{"@swc/helpers/_/_object_spread":"kexvf","@swc/helpers/_/_object_spread_props":"c7x3p","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],kexvf:[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"_object_spread",function(){return r}),n.export(a,"_",function(){return r});var s=t("./_define_property.js");function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){(0,s._define_property)(t,e,a[e])})}return t}},{"./_define_property.js":"27c3O","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"27c3O":[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}n.defineInteropFlag(a),n.export(a,"_define_property",function(){return s}),n.export(a,"_",function(){return s})},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],c7x3p:[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a.push.apply(a,n)}return a})(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}),t}n.defineInteropFlag(a),n.export(a,"_object_spread_props",function(){return s}),n.export(a,"_",function(){return s})},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"9VBuq":[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"StickySidebar",function(){return o});var s=t("@swc/helpers/_/_object_spread"),r=t("@swc/helpers/_/_object_spread_props"),i=jQuery,o={setup:function(){var t=this;if(0!=i("#iawp-layout-sidebar").length){var e=window.scrollY,a=document.getElementById("iawp-layout-sidebar");document.querySelector(".iawp-layout-sidebar");var n=document.getElementById("iawp-layout"),s=this;if(a||n){a.scroll(0,window.scrollY),this.setMinMainHeight(),document.addEventListener("scroll",function(){var t=e-window.scrollY;if(window.scrollY<1||window.scrollY>i(document).height()-i(window).height()-1){e=window.scrollY;return}a.scroll(0,a.scrollTop-t),e=window.scrollY}),window.addEventListener("resize",function(){t.setMinMainHeight()}),document.getElementById("collapse-sidebar").addEventListener("click",function(){var e=n.classList.toggle("collapsed");t.saveSidebarState(e),a.scroll(0,window.scrollY),t.setMinMainHeight(),t.setTableHorizontal()}),i("#mobile-menu-toggle").on("click",function(){i("#menu-container").hasClass("open")?(i("#menu-container").removeClass("open"),i(this).find(".text").text(iawpText.openMobileMenu)):(i("#menu-container").addClass("open"),i(this).find(".text").text(iawpText.closeMobileMenu))});var r=i("#data-table-container");i("#data-table").width()>r.width()&&s.setTableHorizontal(),i(window).on("resize",function(){s.setTableHorizontal(),s.setReportTitleMaxWidth()}),this.setReportTitleMaxWidth()}}},saveSidebarState:function(t){var e=(0,r._)((0,s._)({},iawpActions.update_user_settings),{is_sidebar_collapsed:t});jQuery.post(ajaxurl,e,function(t){}).fail(function(){})},setMinMainHeight:function(){i(".iawp-layout-main").css("min-height",i(".iawp-layout-sidebar .inner").outerHeight(!0)+32)},setTableHorizontal:function(){i("#data-table").width()>i("#data-table-container").width()?i("#data-table-container").addClass("horizontal"):i("#data-table-container").removeClass("horizontal")},setReportTitleMaxWidth:function(){600>i(window).width()?i(".rename-report").css("max-width",""):i(".rename-report").css("max-width","calc(100% - "+i(".report-title-bar .buttons").width()+"px)")}}},{"@swc/helpers/_/_object_spread":"kexvf","@swc/helpers/_/_object_spread_props":"c7x3p","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"7ei3m":[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"Support",function(){return r});var s=jQuery,r={setup:function(){if(s("body").hasClass("analytics_page_independent-analytics-support-center")){s("#search-field").focus();var t=document.getElementById("search-form"),e=document.getElementById("search-field");t.onsubmit=function(t){t.preventDefault(),window.open("https://independentwp.com/?post_type=kb_article&s="+e.value)}}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"9qgQu":[function(t,e,a){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"DatePicker",function(){return r});var s=jQuery,r={datePicker:null,selectingStartDate:!0,inputs:null,inputsKeyboardMode:null,prevMonth:null,currentMonth:null,fastTravelButtons:null,days:null,setup:function(){var t=this;this.datePicker=s("#iawp-date-picker"),this.inputs={start:s("#iawp-start-date"),end:s("#iawp-end-date")},this.inputsKeyboardMode={start:s("#iawp-start-date-keyboard"),end:s("#iawp-end-date-keyboard")},this.prevMonth=s(".iawp-calendar-month.iawp-previous"),this.currentMonth=s(".iawp-calendar-month.iawp-current"),this.fastTravelButtons={start:s(".iawp-fast-travel.prev-month"),end:s(".iawp-fast-travel.current-month")},this.days=s(".iawp-day:not(.empty)"),this.watchClicksOnDays(),this.watchClicksOnRelativeRangeButtons(),this.watchClicksOnNavigationButtons(),this.watchClicksOnFastTravelButtons(),this.watchHoverEventsOnDays(),this.watchChangesToDate(),this.watchChangesToKeyboardInputs(),s("#dates-button, #cancel-date").on("click",function(){t.toggleModal()}),s(".modal-background").on("click",function(){s("#modal-dates").hasClass("show")&&t.toggleModal()}),this.datePicker.on("click","#iawp-start-date, #iawp-end-date",function(){s(this).hasClass("iawp-active")||t.toggleInputs()}),s("#apply-date").on("click",function(){t.apply()}),s(".keyboard-input").on("focus",function(){t.datePicker.addClass("keyboard-mode")})},watchClicksOnDays:function(){var t=this;this.datePicker.on("click",".iawp-day",function(){if(t.selectingStartDate&&s(this).hasClass("iawp-start")||!t.selectingStartDate&&s(this).hasClass("iawp-end")){t.toggleInputs();return}t.changeRangeCustomDates(s(this))})},watchClicksOnRelativeRangeButtons:function(){var t=this;s(".iawp-date-range-buttons button").on("click",function(){s(this).hasClass("active")||t.changeRangeRelativeDates(s(this))})},watchClicksOnNavigationButtons:function(){var t=this;this.datePicker.on("click",".iawp-prev-month-nav",function(){t.navigateMonths(!1)}),this.datePicker.on("click",".iawp-next-month-nav",function(){t.navigateMonths(!0)})},watchClicksOnFastTravelButtons:function(){var t=this;s(".iawp-fast-travel").on("click",function(){var e=!!s(this).hasClass("prev-month");t.fastTravel(s(this).data("month"),e)})},watchHoverEventsOnDays:function(){var t=this;this.datePicker.on("mouseenter",".iawp-day",function(){s(this).hasClass("in-range")||s(this).hasClass("iawp-start")||s(this).hasClass("iawp-end")||t.updateInputBasedOnHover(s(this))})},watchChangesToDate:function(){var t=this;for(var e in this.inputs)this.inputs[e].on("date-changed",function(){t.updateFastTravelButtons(),t.updateInRange(),s(this).hasClass("iawp-start-date")?t.toggleInputs():t.toggleInputs(!0)})},watchChangesToKeyboardInputs:function(){var t=this;for(var e in this.inputsKeyboardMode)this.inputsKeyboardMode[e].on("change",function(){s(".iawp-date-range-buttons .active").removeClass("active"),t.datePicker.data("relative-range","")})},changeRangeCustomDates:function(t){this.selectingStartDate?this.changeStartOrEndDate("start",t):this.changeStartOrEndDate("end",t),s(".iawp-date-range-buttons .active").removeClass("active"),this.datePicker.data("relative-range","")},changeStartOrEndDate:function(t,e){s(".iawp-day.iawp-"+t).removeClass("iawp-"+t);var a=e.addClass("iawp-"+t);this.inputs[t].val(a.data("display-date")),this.inputs[t].data("date",a.data("date")).trigger("date-changed"),"start"==t?new Date(this.inputs[t].data("date"))>new Date(this.inputs[this.oppositeBound(t)].data("date"))&&this.changeStartOrEndDate("end",a):new Date(this.inputs[t].data("date"))<new Date(this.inputs[this.oppositeBound(t)].data("date"))&&this.changeStartOrEndDate("start",a)},changeRangeRelativeDates:function(t){s(".iawp-date-range-buttons .active").removeClass("active"),t.addClass("active"),this.datePicker.data("relative-range",t.data("relative-range-id")),this.changeStartAndEndDate(t)},changeStartAndEndDate:function(t){var e=["start","end"];for(var a in e){var n=e[a],r=t.data("relative-range-"+n),i=t.data("display-date-"+n),o="iawp-"+n;s("."+o).removeClass(o),s('.iawp-day[data-date="'+r+'"').addClass(o),this.inputs[n].val(i),this.inputs[n].data("date",r).trigger("date-changed"),this.inputsKeyboardMode[n].val(r)}},updateInRange:function(){var t=this;s(".iawp-day.in-range").removeClass("in-range"),this.days.each(function(){!(new Date(s(this).data("date"))>=new Date(t.inputs.end.data("date")))&&new Date(s(this).data("date"))>new Date(t.inputs.start.data("date"))&&s(this).addClass("in-range")})},updateInputBasedOnHover:function(t){t.data("date")<this.inputs.start.data("date")?this.toggleInputs(!0):this.toggleInputs(!1)},toggleInputs:function(t){t?(this.inputs.start.addClass("iawp-active"),this.inputs.end.removeClass("iawp-active"),this.selectingStartDate=!0):!1===t?(this.inputs.start.removeClass("iawp-active"),this.inputs.end.addClass("iawp-active"),this.selectingStartDate=!1):(this.inputs.start.toggleClass("iawp-active"),this.inputs.end.toggleClass("iawp-active"),this.selectingStartDate=!this.selectingStartDate)},toggleModal:function(){s("#modal-dates").toggleClass("show"),s("#iawp-layout").toggleClass("modal-open")},oppositeBound:function(t){return"start"==t?"end":"start"},navigateMonths:function(t){t?(this.currentMonth.removeClass("iawp-current"),this.currentMonth=this.currentMonth.next().addClass("iawp-current"),this.prevMonth.removeClass("iawp-previous"),this.prevMonth=this.prevMonth.next().addClass("iawp-previous")):(this.prevMonth.removeClass("iawp-previous"),this.prevMonth=this.prevMonth.prev().addClass("iawp-previous"),this.currentMonth.removeClass("iawp-current"),this.currentMonth=this.currentMonth.prev().addClass("iawp-current"))},fastTravel:function(t,e){var a=s('.iawp-calendar-month[data-month="'+t+'"]');e&&0===a.next().length&&(a=a.prev()),e||0!==a.prev().length||(a=a.next()),s(".iawp-calendar-month").removeClass("iawp-previous iawp-current"),e?(this.prevMonth=a.addClass("iawp-previous"),this.currentMonth=a.next().addClass("iawp-current")):(this.currentMonth=a.addClass("iawp-current"),this.prevMonth=a.prev().addClass("iawp-previous"))},updateFastTravelButtons:function(){this.fastTravelButtons.start.data("month",s("#iawp-start-date").data("date").slice(0,-3)),this.fastTravelButtons.end.data("month",s("#iawp-end-date").data("date").slice(0,-3))},apply:function(){var t={},e=this.datePicker.data("relative-range");t=""!=e?{relativeRangeId:e}:this.datePicker.hasClass("keyboard-mode")?{exactStart:this.inputsKeyboardMode.start.val(),exactEnd:this.inputsKeyboardMode.end.val()}:{exactStart:this.inputs.start.data("date"),exactEnd:this.inputs.end.data("date")},this.toggleModal(),document.dispatchEvent(new CustomEvent("iawp:changeDates",{detail:t}))}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}]},["kUI8B"],"kUI8B","parcelRequirec571");