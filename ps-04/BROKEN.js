// JavaScript Document
var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');


drawingPad.fillStyle = "hsla(0,10%,50%,1)";
drawingPad.fillRect(0, 0, 20, 20);

   
	
var getColor = function(hue, saturation, lightness, alpha) {
	var colorString = "hsla(" +
		hue + ", "
        + saturation + "%,"
        + lightness  + "%,"
        + alpha + ")";
	return colorString;
	}
	
	
	
	 var drawSquare = function(x,y,size) {
     drawingPad.fillRect(x * size, y * size, size , size);
     drawingPad.strokeStyle = getColor(0, 0.5, 100, 1);
     drawingPad.strokeRect(x * size, y * size, size, size);
     }
	 
	 var size = 50;
	 var numX = 10;
	 var numY = 10;
	 var randomLightness = 0;
	 
	 for(var x = 0 ; x < numX; x++) {
       for(var y = 0 ; y < numY; y++) {
         randomLightness = Math.random() * 100;
	     specificlightness= 50;
		 if(y==9-x){
			 	drawingPad.fillStyle = getColor(120, 0.65,0.75, 0.3);
			 }else{
				drawingPad.fillStyle = getColor(0, 0, randomLightness, 1);
				 }
         drawSquare(x,y,size);
       }
     }
