﻿// ReSharper disable NativeTypePrototypeExtending
(function () {
    
    function formatDateFun(date, fmt) {
        var o = {
            "M+" : date.getMonth() + 1, //月份         
            "d+" : date.getDate(), //日         
            "h+" : date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时         
            "H+" : date.getHours(), //小时         
            "m+" : date.getMinutes(), //分         
            "s+" : date.getSeconds(), //秒         
            "q+" : Math.floor((date.getMonth() + 3) / 3), //季度         
            "S" : date.getMilliseconds() //毫秒         
        };
        // var week = {
        //     "0" : "/u65e5",
        //     "1" : "/u4e00",
        //     "2" : "/u4e8c",
        //     "3" : "/u4e09",
        //     "4" : "/u56db",
        //     "5" : "/u4e94",
        //     "6" : "/u516d"
        // };
        var week = {
            "0" : "日",
            "1" : "一",
            "2" : "二",
            "3" : "三",
            "4" : "四",
            "5" : "五",
            "6" : "六"
        };
        
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            // fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay() + ""]);
        }
        for (var k in o) {
            if (o.hasOwnProperty(k) && new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };
    
    Date.prototype.format = function (format) {
        return formatDateFun(this, format);
    };
    
    Date.prototype.formatDate = function (format) {
        return formatDateFun(this, format);
    };

    Number.prototype.formatDate = function(format){
        return formatDateFun(new Date(this),format);
    }
})();