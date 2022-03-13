
function flower(radius, position, k) {
    var myPath = new Path();

    myPath.strokeColor = 'black';
    myPath.moveTo(position)

    for (var a = 0; a < Math.PI; a += 0.01) {

        var r = radius * Math.cos(k * a)
        var x = r * Math.cos(a * 1)
        var y = r * Math.sin(a * 1)
        myPath.lineTo(new Point(position + [x, y]))
    }
}


//initialize positions for flower

for (var i = 0; i < 20; i++) {
    var k = Math.random() * 50 + 7
    var position = Point.random() * view.size;
    var vector = new Point({
        angle: 360 * Math.random(),
        length: Math.random() * 10
    });
    var radius = Math.random() * 60 + 60;
    // flower(radius, position, k);
    flower(radius, position, 1.5)
}








