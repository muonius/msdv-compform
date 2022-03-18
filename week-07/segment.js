var positions = []
var myPath = new Path();
// var pathHeight = mousePos.y;
var mousePos = view.center / 2;

for (var i=0;i<1000; i++) {
 
    var position = Point.random() * view.size;
    position.y = view.size.height*sin(i*Math.PI)
    myPath.lineTo(new Point(position))
    var circlePath = new Path.Circle({
        center: position,
        radius:  5,
        fillColor: '#009dec'
    })
    console.log(position)
}

myPath.strokeColor = {
    hue: Math.random() * 360,
    saturation: 0.5,
    brightness: 1
}
// myPath.fillColor = {
//     hue: Math.random() * 360,
//     saturation: 0.5,
//     brightness: 1
// }

// function onFrame(){
//     for (var i = 1; i < 10; i++) {
//        var sinSeed = Math.random()*20 +400;
//        var height = Math.random()*50+400
//         var yPos =sin(i * Math.PI) * height;
//         myPath.add(new Point (yPos,yPos));
//         myPath.smooth()
//     }
// }


myPath.strokeColor = 'black';
// myPath.closed=true;

myPath.smooth()
// function onFrame() {
    
// }





// function onFrame(event) {
// 	pathHeight += (center.y - mousePos.y - pathHeight) / 10;
// 	for (var i = 1; i < points; i++) {
// 		var sinSeed = event.count + (i + i % 10) * 100;
// 		var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
// 		var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
// 		path.segments[i].point.y = yPos;
// 	}
// 	if (smooth)
// 		path.smooth({ type: 'continuous' });
// }

function radians(degrees) {
    return degrees * (Math.PI / 90);
}

function sin(a) {
    return Math.sin(radians(a));
}

function cos(a) {
    return Math.cos(radians(a));
}

function fract(num){
 return num-Math.floor(num)
}