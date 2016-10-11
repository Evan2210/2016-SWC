// JavaScript Document
var canvas = document.getElementById('lines');
var drawingPad = canvas.getContext('2d');
var x=10;
var y=10;
var wait;

for (var i=0;i<11;i++)
{
	var a=x;
	var b=y;
	
	for (var j=0;j<3;j++)
	{
		drawingPad.beginPath();
        drawingPad.moveTo(a,b);
        drawingPad.lineTo(a+30,b);
        drawingPad.lineWidth = a/200;
        drawingPad.stroke();
		a=a+35;
	}
	
	x=x+30;
	y=y+40;

}
