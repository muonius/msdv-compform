
var center = new Point(250, 250);
var k = 20;
var myPath = new Path();

myPath.strokeColor = 'black';
myPath.moveTo(center)

for (var a = 0; a < Math.PI; a += 0.01) {
    var r = 40 * Math.cos(k * a)
    var x = r * Math.cos(a * 1)
    var y = r * Math.sin(a * 1) + 2
    myPath.lineTo(new Point(center + [x, y]))
}













//initialize positions for flower

// for (var i = 0; i < 10; i++) {
//     var position = Point.random() * view.size;
//     var vector = new Point({
//         angle: 360 * Math.random(),
//         length: Math.random() * 10
//     });
//     var radius = Math.random() * 60 + 60;
//     balls.push(new Ball(radius, position, vector));
// }








//util functions

// function cos(radians) {
//     return Math.cos(radians)
// }

// function sin(radians) {
//     return Math.sin(radians)
// }