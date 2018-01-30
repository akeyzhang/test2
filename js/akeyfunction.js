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