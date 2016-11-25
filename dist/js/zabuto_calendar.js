if("undefined"==typeof jQuery)throw new Error("jQuery is not loaded");$.fn.zabuto_calendar=function(a){var e=$.extend({},$.fn.zabuto_calendar_defaults(),a),t=$.fn.zabuto_calendar_language(e.language);return e=$.extend({},e,t),this.each(function(){function a(){var a=parseInt(w.data("initYear")),e=parseInt(w.data("initMonth"))-1,r=new Date(a,e,1,0,0,0,0);w.data("initDate",r);var o=w.data("cellBorder")===!0?" table-bordered":"";$tableObj=$('<table class="table'+o+'"></table>'),$tableObj=t(w,$tableObj,r.getFullYear(),r.getMonth()),$legendObj=n(w);var d=$('<div class="zabuto_calendar" id="'+w.attr("id")+'"></div>');d.append($tableObj),d.append($legendObj),w.append(d);var i=w.data("jsonData");!1!==i&&s(w,r.getFullYear(),r.getMonth())}function t(a,e,t,n){var d=new Date(t,n,1,0,0,0,0);return a.data("currDate",d),e.empty(),e=r(a,e,t,n),e=o(a,e),e=i(a,e,t,n),s(a,t,n),e}function n(a){var e=$('<div class="legend" id="'+a.attr("id")+'_legend"></div>'),t=a.data("legendList");return"object"==typeof t&&t.length>0&&$(t).each(function(a,t){if("object"==typeof t&&"type"in t){var n="";switch("label"in t&&(n=t.label),t.type){case"text":if(""!==n){var r="";if("badge"in t){if("undefined"==typeof t.classname)var o="badge-event";else var o=t.classname;r='<span class="badge '+o+'">'+t.badge+"</span> "}e.append('<span class="legend-'+t.type+'">'+r+n+"</span>")}break;case"block":if(""!==n&&(n="<span>"+n+"</span>"),"undefined"==typeof t.classname)var d="event";else var d="event-styled "+t.classname;e.append('<span class="legend-'+t.type+'"><ul class="legend"><li class="'+d+'"></li></u>'+n+"</span>");break;case"list":if("list"in t&&"object"==typeof t.list&&t.list.length>0){var i=$('<ul class="legend"></u>');$(t.list).each(function(a,e){i.append('<li class="'+e+'"></li>')}),e.append(i)}break;case"spacer":e.append('<span class="legend-'+t.type+'"> </span>')}}}),e}function r(a,e,n,r){var o=a.data("navIcons"),d=$('<span><span class="glyphicon glyphicon-chevron-left"></span></span>'),i=$('<span><span class="glyphicon glyphicon-chevron-right"></span></span>');"object"==typeof o&&("prev"in o&&d.html(o.prev),"next"in o&&i.html(o.next));var l=a.data("showPrevious");"number"!=typeof l&&l!==!1||(l=_(a.data("showPrevious"),!0));var s=$('<div class="calendar-month-navigation"></div>');s.attr("id",a.attr("id")+"_nav-prev"),s.data("navigation","prev"),l!==!1&&(prevMonth=r-1,prevYear=n,prevMonth==-1&&(prevYear-=1,prevMonth=11),s.data("to",{year:prevYear,month:prevMonth+1}),s.append(d),"function"==typeof a.data("actionNavFunction")&&s.click(a.data("actionNavFunction")),s.click(function(n){t(a,e,prevYear,prevMonth)}));var u=a.data("showNext");"number"!=typeof u&&u!==!1||(u=_(a.data("showNext"),!1));var c=$('<div class="calendar-month-navigation"></div>');c.attr("id",a.attr("id")+"_nav-next"),c.data("navigation","next"),u!==!1&&(nextMonth=r+1,nextYear=n,12==nextMonth&&(nextYear+=1,nextMonth=0),c.data("to",{year:nextYear,month:nextMonth+1}),c.append(i),"function"==typeof a.data("actionNavFunction")&&c.click(a.data("actionNavFunction")),c.click(function(n){t(a,e,nextYear,nextMonth)}));var p=a.data("monthLabels"),b=$("<th></th>").append(s),v=$("<th></th>").append(c),h=$("<span>"+p[r]+" "+n+"</span>");h.dblclick(function(){var n=a.data("initDate");t(a,e,n.getFullYear(),n.getMonth())});var f=$('<th colspan="5"></th>');f.append(h);var m=$('<tr class="calendar-month-header"></tr>');return m.append(b,f,v),e.append(m),e}function o(a,e){if(a.data("showDays")===!0){var t=a.data("weekStartsOn"),n=a.data("dowLabels");if(0===t){var r=$.extend([],n),o=new Array(r.pop());n=o.concat(r)}var d=$('<tr class="calendar-dow-header"></tr>');$(n).each(function(a,e){d.append("<th>"+e+"</th>")}),e.append(d)}return e}function i(a,e,t,n){var r=(a.data("ajaxSettings"),g(t,n)),o=f(t,n),d=h(t,n,1),i=h(t,n,o),l=1,s=a.data("weekStartsOn");0===s&&(6==i&&r++,6!=d||0!=i&&1!=i&&5!=i||r--,d++,7==d&&(d=0));for(var u=0;u<r;u++){for(var c=$('<tr class="calendar-dow"></tr>'),p=0;p<7;p++){if(p<d||l>o)c.append("<td></td>");else{var m=a.attr("id")+"_"+v(t,n,l),y=m+"_day",_=$('<div id="'+y+'" class="day" >'+l+"</div>");_.data("day",l),a.data("showToday")===!0&&b(t,n,l)&&_.html('<span class="badge badge-today">'+l+"</span>");var w=$('<td id="'+m+'"></td>');w.append(_),w.data("date",v(t,n,l)),w.data("hasEvent",!1),"function"==typeof a.data("actionFunction")&&(w.addClass("dow-clickable"),w.click(function(){a.data("selectedDate",$(this).data("date"))}),w.click(a.data("actionFunction"))),c.append(w),l++}6==p&&(d=0)}e.append(c)}return e}function l(a,e,t,n){var r=$('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'),o=$('<h4 class="modal-title" id="'+a+'_modal_title">'+e+"</h4>"),d=$('<div class="modal-header"></div>');d.append(r),d.append(o);var i=$('<div class="modal-body" id="'+a+'_modal_body">'+t+"</div>"),l=$('<div class="modal-footer" id="'+a+'_modal_footer"></div>');if("undefined"!=typeof n){var s=$("<div>"+n+"</div>");l.append(s)}var u=$('<div class="modal-content"></div>');u.append(d),u.append(i),u.append(l);var c=$('<div class="modal-dialog"></div>');c.append(u);var p=$('<div class="modal fade" id="'+a+'_modal" tabindex="-1" role="dialog" aria-labelledby="'+a+'_modal_title" aria-hidden="true"></div>');return p.append(c),p.data("dateId",a),p.attr("dateId",a),p}function s(a,e,t){var n=a.data("jsonData"),r=a.data("ajaxSettings");return a.data("events",!1),!1!==n?u(a):!1===r||c(a,e,t)}function u(a){var e=a.data("jsonData");return a.data("events",e),p(a,"json"),!0}function c(a,e,t){var n=a.data("ajaxSettings");if("object"!=typeof n||"undefined"==typeof n.url)return alert("Invalid calendar event settings"),!1;var r={year:e,month:t+1};return $.ajax({type:"GET",url:n.url,data:r,dataType:"json"}).done(function(e){var t=[];$.each(e,function(a,n){t.push(e[a])}),a.data("events",t),p(a,"ajax")}),!0}function p(a,e){var t=(a.data("jsonData"),a.data("ajaxSettings")),n=a.data("events");n!==!1&&$(n).each(function(n,r){var o=a.attr("id")+"_"+r.date,d=$("#"+o),i=$("#"+o+"_day");if(d.data("hasEvent",!0),"undefined"!=typeof r.title&&d.attr("title",r.title),"undefined"==typeof r.classname?d.addClass("event"):(d.addClass("event-styled"),i.addClass(r.classname)),"undefined"!=typeof r.badge&&r.badge!==!1){var s=r.badge===!0?"":" badge-"+r.badge,u=i.data("day");i.html('<span class="badge badge-event'+s+'">'+u+"</span>")}if("undefined"!=typeof r.body){var c=!1;if("json"===e&&"undefined"!=typeof r.modal&&r.modal===!0?c=!0:"ajax"===e&&"modal"in t&&t.modal===!0&&(c=!0),c===!0){d.addClass("event-clickable");var p=l(o,r.title,r.body,r.footer);$("body").append(p),$("#"+o).click(function(){$("#"+o+"_modal").modal()})}}})}function b(a,e,t){var n=new Date,r=new Date(a,e,t);return r.toDateString()==n.toDateString()}function v(a,e,t){return d=t<10?"0"+t:t,m=e+1,m=m<10?"0"+m:m,a+"-"+m+"-"+d}function h(a,e,t){var n=new Date(a,e,t,0,0,0,0),r=n.getDay();return 0==r?r=6:r--,r}function f(a,e){for(var t=28;y(a,e+1,t+1);)t++;return t}function g(a,e){var t=f(a,e),n=h(a,e,1),r=h(a,e,t),o=t,d=n-r;return d>0&&(o+=d),Math.ceil(o/7)}function y(a,e,t){return e>0&&e<13&&a>0&&a<32768&&t>0&&t<=new Date(a,e,0).getDate()}function _(a,e){a===!1&&(a=0);var t,n=w.data("currDate"),r=w.data("initDate");if(t=12*(r.getFullYear()-n.getFullYear()),t-=n.getMonth()+1,t+=r.getMonth(),e===!0){if(t<parseInt(a)-1)return!0}else if(t>=0-parseInt(a))return!0;return!1}var w=$(this);w.attr("id","zabuto_calendar_"+Math.floor(99999*Math.random()).toString(36)),w.data("initYear",e.year),w.data("initMonth",e.month),w.data("monthLabels",e.month_labels),w.data("weekStartsOn",e.weekstartson),w.data("navIcons",e.nav_icon),w.data("dowLabels",e.dow_labels),w.data("showToday",e.today),w.data("showDays",e.show_days),w.data("showPrevious",e.show_previous),w.data("showNext",e.show_next),w.data("cellBorder",e.cell_border),w.data("jsonData",e.data),w.data("ajaxSettings",e.ajax),w.data("legendList",e.legend),w.data("actionFunction",e.action),w.data("actionNavFunction",e.action_nav),a()}),this},$.fn.zabuto_calendar_defaults=function(){var a=new Date,e=a.getFullYear(),t=a.getMonth()+1,n={language:!1,year:e,month:t,show_previous:!0,show_next:!0,cell_border:!1,today:!1,show_days:!0,weekstartson:1,nav_icon:!1,data:!1,ajax:!1,legend:!1,action:!1,action_nav:!1};return n},$.fn.zabuto_calendar_language=function(a){switch("undefined"!=typeof a&&a!==!1||(a="cn"),a.toLowerCase()){case"de":return{month_labels:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dow_labels:["Mo","Di","Mi","Do","Fr","Sa","So"]};case"en":return{month_labels:["January","February","March","April","May","June","July","August","September","October","November","December"],dow_labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]};case"cn":return{month_labels:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dow_labels:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]};case"ar":return{month_labels:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],dow_labels:["أثنين","ثلاثاء","اربعاء","خميس","جمعه","سبت","أحد"]};case"es":return{month_labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dow_labels:["Lu","Ma","Mi","Ju","Vi","Sá","Do"]};case"fr":return{month_labels:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dow_labels:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"]};case"it":return{month_labels:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dow_labels:["Lun","Mar","Mer","Gio","Ven","Sab","Dom"]};case"nl":return{month_labels:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],dow_labels:["Ma","Di","Wo","Do","Vr","Za","Zo"]};case"pl":return{month_labels:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],dow_labels:["pon.","wt.","śr.","czw.","pt.","sob.","niedz."]};case"pt":return{month_labels:["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dow_labels:["S","T","Q","Q","S","S","D"]};case"ru":return{month_labels:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dow_labels:["Пн","Вт","Ср","Чт","Пт","Сб","Вск"]};case"se":return{month_labels:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dow_labels:["Mån","Tis","Ons","Tor","Fre","Lör","Sön"]};case"tr":return{month_labels:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dow_labels:["Pts","Salı","Çar","Per","Cuma","Cts","Paz"]};case"fi":return{month_labels:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],dow_labels:["Ma","Ti","Ke","To","Pe","La","Su"]}}};