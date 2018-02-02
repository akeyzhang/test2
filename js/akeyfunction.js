const WSURL = "ws://www.washdiy.top:666/akeySql";
//const WSURL = "ws://192.168.1.129:666/akeySql";

function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;

}

function getCurrentDateTime() {
    return new Date().toLocaleString()
}

function getCurrentFormatDateTime(formatstr) {
    return FormatDateTimeStr(new Date(),formatstr);

}

function guid() {
    return 'bkxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

//去除掉字串中的T00:00:00Z時區信息,一般用在數據庫返回的日期類型.
function trimDateTimeZone(str) {
    return str.replace(new RegExp("T00:00:00Z","gm"),"");
}

function FormatDateTimeStr(x, y) {  //x--要處理的日期, y--日期格式模板.
    var z = { M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds() };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) { return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2) });
    return y.replace(/(y+)/g, function (v) { return x.getFullYear().toString().slice(-v.length) });
}