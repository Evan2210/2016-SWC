// JavaScript Document
 		starx=Math.random()*canvas.width;
        stary=Math.random()*canvas.height;
        canvas=document.getElementById("canvas");
        ctx=canvas.getContext("2d");
        ctx.fillStyle="rgba(255,255,255,0.0)";
        ctx.lineWidth=5;
        ctx.lineJoin="miter";
        //int
       
	   	for(var i=0;i<333;i++){
			ctx.beginPath();
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.moveTo(starx,stary);
            starx=Math.random()*canvas.width;
            stary=Math.random()*canvas.height;
			ctx.lineTo(starx,stary);
            var r=Math.round(Math.random()*255);
            var g=Math.round(Math.random()*255);
            var b=Math.round(Math.random()*255);
            ctx.strokeStyle="rgba("+r+","+g+","+b+",1)";
            ctx.stroke();
			
			}
	  
        