// JavaScript Document
 		starx=Math.random()*canvas.width;
        stary=Math.random()*canvas.height;
        canvas=document.getElementById("canvas");
        ctx=canvas.getContext("2d");
        ctx.fillStyle="rgba(255,255,255,0.0)";
        ctx.lineWidth=2;
        ctx.lineJoin="miter";
        //int
       
	   	for(var i=0;i<333;i++){
			ctx.beginPath();
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.moveTo(starx,stary);
            starx=Math.random()*canvas.width;
            stary=Math.random()*canvas.height;
			ctx.lineTo(starx,stary);
                       ctx.stroke();
			
			}
	  
        