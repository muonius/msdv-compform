// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js

var center = new Point(250, 250);

// var path = new Path();
// path.strokeColor = "red";
// path.moveTo(center + [-100, -100]);
// path.lineTo(center + [100, 100]);
// path.strokeColor = "blue"
// path.strokeWidth = 4

// path = new Path(); // what happens if you revove this?
// path.strokeColor = "green"; // what happens if you remove this? what happens if you move it after moveTo/lineTo
// path.moveTo(center + [100, -100]);
// path.lineTo(center + [-100, 100]);
// path.strokeColor = "blue"
// path.strokeWidth = 4
// path.strokeCap = 'round'


for (var i = 0; i < 50; i++) {
    var path = new Path();
    path.moveTo(center + [Math.random() * 500, Math.random() * 500]);
    path.lineTo(center + [Math.random() * 500, Math.random() * 500]);
    path.strokeColor = new Color(Math.random(), Math.random(), Math.random());
    path.strokeWidth = Math.random() * 40
}

