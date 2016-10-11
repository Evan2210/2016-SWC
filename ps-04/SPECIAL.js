// JavaScript Document
 starx=Math.random()*canvas.width;
        stary=Math.random()*canvas.height;
        canvas=document.getElementById("canvas");
        ctx=canvas.getContext("2d");
        ctx.fillStyle="rgba(0,0,0,.08)";
        ctx.lineWidth=5;
        ctx.lineJoin="round";
        //int
        function int() {
            setInterval(render,30);
        }
        //render
        function render() {
            ctx.beginPath();
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.moveTo(starx,stary);
            starx=Math.random()*canvas.width;
            stary=Math.random()*canvas.height;
            ctx.bezierCurveTo(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*canvas.width,Math.random()*canvas.height,starx,stary);
            var r=Math.round(Math.random()*255);
            var g=Math.round(Math.random()*255);
            var b=Math.round(Math.random()*255);
            ctx.strokeStyle="rgba("+r+","+g+","+b+",1)";
            ctx.stroke();
        }
        //onload=int
        window.onload=int;