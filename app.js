var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePos(event) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = event.clientX - rect.left - root.scrollLeft;
	var mouseY = event.clientY - rect.top - root.scrollTop;
	return  {
		x:mouseX,
		y:mouseY
	}
}

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30
	setInterval(function(){
    moveEverything()
    drawEverything()
  }, 1000/framesPerSecond);

	canvas.addEventListener('mousemove',
			function(event) {
				var mousePos = calculateMousePos(event);
				paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
			})
}

function moveEverything(){
  ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballX > canvas.width) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
}

function drawEverything() {
	//canvas
	colorRect(0,0,canvas.width,canvas.height, 'black')
	//paddle
	colorRect(0,paddle1Y,10,PADDLE_HEIGHT, 'white')
	colorCirlcle(ballX, ballY, 10, 'white')
}

function colorCirlcle(centerX, centerY, radius, drawColor) {
	//ball
	canvasContext.fillStyle = drawColor
	canvasContext.beginPath()
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true)
	canvasContext.fill()
}

function colorRect(leftX,topY, width, height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width, height);
}
