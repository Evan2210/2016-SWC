// JavaScript Document
     var digit_clock = d3.select("#digit_clock");
    var dot = digit_clock.selectAll(".dot");
    var digit = digit_clock.selectAll(".num");
    var now;
    setTimeout(setInterval(function(){
            now = new Date,
                hours = now.getHours(),
                minutes = now.getMinutes(),
                seconds = now.getSeconds();
                milliseconds = now.getMilliseconds();

            digit = digit.data([hours / 10 | 0, hours % 10, minutes
/ 10 | 0, minutes % 10, seconds / 10 | 0, seconds % 10,
milliseconds / 100 | 0]);
            digit.attr('class',function(d, i){
                    return 'n'+d;
            });
            dot.classed('lit', seconds & 1);
    }, 1000), new Date % 1000);