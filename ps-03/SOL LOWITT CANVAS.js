// JavaScript Document var canvas = document.getElementById('hahaha');
    var drawingPad = canvas.getContext('2d');
	var img11=document.getElementById("a");
	var img22=document.getElementById("b");
	var img33=document.getElementById("c");
	var img44=document.getElementById("d");
	var pat1=drawingPad.createPattern(img11,"repeat");
	var pat2=drawingPad.createPattern(img22,"repeat");
	var pat3=drawingPad.createPattern(img33,"repeat");
	var pat4=drawingPad.createPattern(img44,"repeat");
	
    
    drawingPad.rect(0, 0, 225, 100);
	drawingPad.fillStyle=pat1;
	drawingPad.fill();
	
			
	
	drawingPad.fillStyle=pat2;
	drawingPad.fillRect(225, 0, 450, 100);
	drawingPad.fillStyle=pat3;
	drawingPad.fillRect(0,100, 225, 200);
	drawingPad.fillStyle=pat4;
	drawingPad.fillRect(225, 100, 450, 200);