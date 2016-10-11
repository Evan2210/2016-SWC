// JavaScript Document
var canvas = document.getElementById("canvas");

        var randomFun = function (max, min) {
            return parseInt(Math.random() * (max - min + 1) + min);
        }
        randomFun()

        var colorFun = function () {
            return 'rgba('+ randomFun(255, 0) + ',' + randomFun(255, 0) + ',' + randomFun(255, 0) + ',' + (Math.random() + 0.1) + ')';
        }
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
        console.log(document.body.offsetHeight);

        var w = canvas.width;
        var h = canvas.height;
 var ctx = canvas.getContext('2d');
 
  function Ball(x, y, r, color) {
            this.r = r || randomFun(30, 10);
            this.x = x || randomFun(w - this.r, this.r);
            this.y = y || randomFun(h - this.r, this.r);
            this.color = color || colorFun();


            this.show = function () {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
                ctx.fill();
            }
        }

        for (var i = 0; i < 500; i++) {
            var ball = new Ball();
            ball.show()
        }