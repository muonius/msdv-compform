// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js


var path = new paper.Path();

path.strokeColor = "red"

var pointA = new paper.Point(50, 50)
var pointB = new paper.Point(100, 100)

path.moveTo(pointA)
path.lineTo(pointB)
