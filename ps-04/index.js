// JavaScript Document

window.onload = function(){
		
			var current = 0;
		
			document.getElementById('button').onclick = function(){
			
				current = (current+45)%360;
			
				this.style.transform = 'rotate('+current+'deg)';
			}
		}
