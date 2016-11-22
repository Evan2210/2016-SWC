// JavaScript Document
var s = Snap("#bar_chart");
var button_1 = Snap("#button_1");
var button_2 = Snap("#button_2");


button_1.rect(200,10, 90, 20, 2).attr({fill:"#FFF",stroke:"#000"});


var label_1 = button_1.text(220, 23,"Start");



var vertical = s.path("M45 10 V 450");
var horizontal = s.path("M45 450 H 480");


var axes = s.group(vertical, horizontal);

axes.attr({
        stroke: "#000",
        strokeWidth: 5
    });


var vertical_1 = s.text(10, 450,"0");
var vertical_2 = s.text(5, 360,"15");
var vertical_3 = s.text(5, 270,"30");
var vertical_4 = s.text(5, 180,"45");
var vertical_5 = s.text(10, 90,"60");
var vertical_6 = s.text(0, 50,"time/minutes");

var horizontal_1 = s.text(40, 470,"Monday");
var horizontal_2 = s.text(100, 485,"Tuseday");
var horizontal_3 = s.text(160, 470,"Wenseday");
var horizontal_4 = s.text(220, 485,"Thurseday");
var horizontal_5 = s.text(280, 470,"Friday");
var horizontal_6 = s.text(340, 485,"Saturday");
var horizontal_7 = s.text(400, 470,"Sunday");


var bar1 = s.rect(50, 440, 40, 10, 10).attr({
    fill: "#bada55"
});

var bar2 = s.rect(110, 440, 40, 10, 10).attr({
    fill: "#5767bf"
});

var bar3 = s.rect(170, 440, 40, 10, 10).attr({
    fill: "#ffec64"
});

var bar4 = s.rect(230, 440, 40, 10, 10).attr({
    fill: "#a1a0a0"
});

var bar5 = s.rect(290, 440, 40, 10, 10).attr({
    fill: "#00b5e8"
});
var bar6 = s.rect(350, 440, 40, 10, 10).attr({
    fill: "#FCC"
});
var bar7 = s.rect(410, 440, 40, 10, 10).attr({
    fill: "#8080FF"
});




var bars = s.group(bar1, bar2, bar3, bar4, bar5,bar6,bar7);

bars.attr({
    stroke: "#000",
    strokeWidth: 2
});


button_1.click(function () {
  bar1.animate({height:180, y:270}, 2000);
  bar2.animate({height:40, y:410}, 2000);
  bar3.animate({height:40, y:410}, 2000);
  bar4.animate({height:90, y:360}, 2000);
  bar5.animate({height:180, y:270}, 2000);
  bar6.animate({height:270, y:180}, 2000);
  bar7.animate({height:360, y:90}, 2000);
  
         });

button_2.click(function () {
  bar1.animate({height:10, y:440}, 2000);
  bar2.animate({height:10, y:440}, 2000);
  bar3.animate({height:10, y:440}, 2000);
  bar4.animate({height:10, y:440}, 2000);
  bar5.animate({height:10, y:440}, 2000);
  bar6.animate({height:10, y:440}, 2000);
  bar7.animate({height:10, y:440}, 2000);
         });