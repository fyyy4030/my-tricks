// 先打开 https://www.mh-beijing.com/

$.ajaxSetup({async:false});

function find_x(a, b, c, d) {
    var url = "https://www.mh-beijing.com/common/hotelInfo?type=oReservation&sessionId=5494D2F5217914EDF8094F159AF79387&adultCount=2&childCount=0&language=ZH&beginDate=2019-{0}-{1}&endDate=2019-{2}-{3}";
    var new_url = url.format(a, b, c, d);
    var res = jQuery.post(new_url);
    var position_x = [];
    position_x.push(res.responseText.indexOf(">X<"));
    while (position_x[position_x.length - 1] != -1) {
        position_x.push(res.responseText.indexOf(">X<", position_x[position_x.length - 1] + 1));
    }
    position_x.pop();
    console.log(position_x);
    return position_x;
}

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
};

function get_next_day(this_day) {
    var next_day = new Date();
    next_day.setTime(this_day.getTime() + 24 * 3600 * 1000);
    return next_day;
}

var this_day = new Date();
var next_day = get_next_day(this_day);

var url = "https://www.mh-beijing.com/common/hotelInfo?type=oReservation&sessionId=5494D2F5217914EDF8094F159AF79387&adultCount=2&childCount=0&language=ZH&beginDate=2019-{0}-{1}&endDate=2019-{2}-{3}";
var a = (this_day.getMonth() + 1).toString();
var b = this_day.getDate().toString();
var c = (next_day.getMonth() + 1).toString();
var d = next_day.getDate().toString();
var new_url = url.format(a, b, c, d);
var res = jQuery.post(new_url);
var house_position = [];
house_position.push(res.responseText.indexOf("A01"));
house_position.push(res.responseText.indexOf("B01"));
house_position.push(res.responseText.indexOf("C01"));
house_position.push(res.responseText.indexOf("D01"));
house_position.push(res.responseText.indexOf("E01"));
house_position.push(res.responseText.indexOf("F01"));

var all_result = [];
all_result.push(house_position)

for (var i = 0; i < 60; i++) {
    var a = (this_day.getMonth() + 1).toString();
    var b = this_day.getDate().toString();
    var c = (next_day.getMonth() + 1).toString();
    var d = next_day.getDate().toString();
    this_day = next_day;
    next_day = get_next_day(next_day);
    if (a.length == 1) a = "0".concat(a);
    if (b.length == 1) b = "0".concat(b);
    if (c.length == 1) c = "0".concat(c);
    if (d.length == 1) d = "0".concat(d);
    var new_res = [a, b];
    console.log(a, b, c, d);
    new_res = new_res.concat(find_x(a, b, c, d));
    all_result.push(new_res);
}