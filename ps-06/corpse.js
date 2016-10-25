// JavaScript Document
var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var Evan2210 = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

Evan2210.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stokeStyle.globalAlpha=0.0;
  ctx.stroke();
  
 
  
}

Evan2210.drawArm = function(ctx, left) {

};

Evan2210.drawLeg = function(ctx, left) {

};


 Evan2210.drawTop = function(ctx) {
  // draw a round head:
  // ctx.beginPath();
  // ctx.arc(horizontalCenter, 120, 120, 0, circleDegrees);
  // ctx.fill();
  drawImage("head.png", ctx, 100, 43);
};

 Evan2210.drawMiddle = function(ctx) {
  drawImage("middle.png", ctx, 100, 240);
  // draw the rest of the body...
  
};

 Evan2210.drawBottom = function(ctx) {
  
  drawImage("bottom.png", ctx, 100, 480);
};

 Evan2210.drawCorpse = function(ctx) {
   Evan2210.drawTop(ctx);
   Evan2210.drawMiddle(ctx);
   Evan2210.drawBottom(ctx);
   Evan2210.drawGrid(ctx);
};

window. Evan2210 =  Evan2210;