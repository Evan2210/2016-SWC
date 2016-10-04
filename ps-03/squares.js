var canvas = document.getElementById('hahaha');
    var drawingPad = canvas.getContext('2d');
    drawingPad.fillStyle="green";
    drawingPad.fillRect(0, 0, 150, 150);
	drawingPad.fillRect(300, 300, 150, 150);
	drawingPad.fillRect(0,300, 150, 150);
	drawingPad.fillRect(300, 0, 150, 150);
	drawingPad.fillStyle="red";
	drawingPad.fillRect(150, 150, 150, 150);