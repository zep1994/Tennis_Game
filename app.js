var canvas
var canvasContext

window.onload = function(){
  canvas = document.getElementById('gameCanvas')
  canvasContext = canvas.getContext('2d')
  drawEverything()
}

function drawEverything() {
  canvasContext.fillstyle = 'black'
  canvasContext.fillRect(0,0,canvas.width,canvas.height)
  canvasContext.fillstyle = 'white'
  canvasContext.fillRect(225,210,200,200)
  canvasContext.fillstyle = 'white'
  canvasContext.fillRect(canvas.width/2,200,50,25)
}
