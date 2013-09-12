// Fading the div
		var fade_me = document.getElementById("fade_me");
		var btnFade_out = document.getElementById("fade_out");
		var btnFade_in = document.getElementById("fade_in");
		var opacity = 1;
		var fade_out_inter;
		var fade_in_inter;
	
		btnFade_out.addEventListener("click", fade_out_timer);
		btnFade_in.addEventListener("click", fade_in_timer);
		
		function fade_out_timer()
		{
			fade_out_inter = setInterval(fade_out, 500);
		}
		
		function fade_in_timer()
		{
			fade_in_inter = setInterval(fade_in, 500);
		}
		
		function fade_in()
		{
			if (opacity < 1)
			{
				opacity += .10;
				fade_me.style.opacity = opacity;
			}
			else
			{
				clearInterval(fade_in_inter);
			}
		}
		
		function fade_out()
		{
			if (opacity > 0)
			{
				opacity -=.10;
				fade_me.style.opacity = opacity;
			}
			else
			{
				clearInterval(fade_out_inter);
			}
		}
		
	// 10 second alert message
	//	var alert_countdown = setTimeout(showAlert, 10000);

		function showAlert()
		{
			alert("You have been on this page for 10 seconds! Leave now!");
			clearTimeout(alert_countdown);
		}
	
	// Canvas images
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		
		var mouseObj = new Image();
		mouseObj.src = 'cursor.jpg';
		mouseObj.width = 224;
		mouseObj.height = 224;
		
		mouseObj.onload = function() {
			var x = 10,
				y = 20,
				width = 16,
				height = 16;
			context.drawImage(mouseObj,x,y,width,height);			
		};
		
		var btnMove_right = document.getElementById("move_right");
		
		btnMove_right.addEventListener("click", move_right);
		
		function move_right()
		{
			mouseObj.x += 10;
		}
										
		
		// Rectangle
		context.beginPath();
		context.rect(50, 250, 100, 50);
		context.fillStyle = 'red';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
		
		// Circle
		context.beginPath();
		context.arc(centerX, centerY, 50, 0, 2 * Math.PI, false);
		context.fillStyle = 'blue';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();		
		
