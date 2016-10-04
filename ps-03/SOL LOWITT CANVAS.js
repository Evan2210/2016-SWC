// JavaScript Document var canvas = document.getElementById('canvas');
    var ctx = c.getContext('2d');
	var imgaa=document.getElementById("a");
	var imgbb=document.getElementById("b");
	var imgcc=document.getElementById("c");
	var imgdd=document.getElementById("d");
	var pat1=ctx.createPattern(imgaa,"repeat");
	var pat2=ctx.createPattern(imgbb,"repeat");
	var pat3=ctx.createPattern(imgcc,"repeat");
	var pat4=ctx.createPattern(imgdd,"repeat");
	
    
    ctx.fillRect(0, 0, 225, 100);
	ctx.fillStyle=pat1;
	ctx.fill();
	ctx.fillRect(225, 0, 450, 100);
	ctx.fillStyle=pat2;
	ctx.fill();
	ctx.fillRect(0,100, 225, 200);
	ctx.fillStyle=pat3;
	ctx.fill();
	ctx.fillRect(225, 100, 450, 200);
	ctx.fillStyle=pat4;
	ctx.fill();