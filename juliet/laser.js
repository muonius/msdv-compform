// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.11/paper-full.min.js
// language paperscript

//stealing from Justin

// a tiny little noise system

var noiseA = [];

function initNoise() {
    for (var x = 0; x < 10; x++) {
        noiseA[x] = [];
        for (var y = 0; y < 10; y++) {
            noiseA[x][y] = Math.random();
        }
    }
}

// returns simple value noise with range [-1, 1)
function noise(x, y) {
    if (!noiseA.length) initNoise();

    var x1 = Math.floor(x) % 10;
    var y1 = Math.floor(y) % 10;
    var x2 = Math.ceil(x) % 10;
    var y2 = Math.ceil(y) % 10;
    var sx = x - Math.floor(x);
    var sy = y - Math.floor(y);
    var u = lerp(noiseA[x1][y1], noiseA[x2][y1], sx);
    var v = lerp(noiseA[x1][y2], noiseA[x2][y2], sx);
    var l = lerp(u, v, sy);

    return l * 2 - 1;
}

function lerp(a, b, n) {
    return a + (b - a) * n;
}

// make a little thing
var p1 = new Path();
var p2 = new Path();
var p3 = new Path();
p1.strokeColor = "black";
p1.strokeWidth = 0.5;
// p2.fillColor = "white";
p2.strokeColor = "black";
p2.strokeWidth = 0.2;

p3.strokeColor = "black";
p3.strokeWidth = 0.2;

var i;
for (i = 0; i < 360; i += 5) {
    var center1 = 200;
    var center2 = 600;
    var center3 = 900;
    var innerR = 100;
    var a = Math.max(Math.random() * 20, Math.random() * 30, Math.random() * 10) + 20;
    var b = a * 1.1;
    var c = a * 2;
    var d = a * 0.8;
    p1.add(center1, center1)
    //crythansium    
    //initialize pedals
    p1.add(center1 + sin(i) * innerR, center1 + cos(i) * innerR);
    //add small waist to pedal
    p1.add(center1 + sin(i + 3) * (innerR + a), center1 + cos(i + 3) * (innerR + a));
    //add little tip to pedal
    p1.add(center1 + sin(i) * (innerR + a), center1 + cos(i) * (innerR + a));

    //tulip
    p2.add(center2, center1)
    //initialize pedals
    p2.add(center2 + cos(i) * innerR, center1 + sin(i) * innerR);
    //twist and turn
    p2.add(center2 - 100 + sin(i + 270) * (innerR), center1 - 5 + cos(i) * (innerR));


    //experiment
    p3.add(center3, center1 + 100)
    p3.add(center3 + sin(i) * (innerR), center1 + cos(i) * (innerR));
    for (var j = 0; j < 2; j++) {
        p3.add(center3 + sin(i + j * 70) * (innerR), center1 + 50 + cos(i + j * 10) * (innerR));
    }

}


//hazelnut effect
// p.add(250 + cos(i) * innerR, 250 + sin(i) * innerR);

// warp the little thing with noise, closed, smooth

function touchUp(p) {
    for (i = 0; i < p.segments.length; i++) {
        var s = p.segments[i];
        var f = 0.001;
        var x = s.point.x * f;
        var y = s.point.y * f;
        s.point.x += noise(x, y) * 20;
        // s.point.y += noise(x + 5, y) * 30;
        s.point.y += noise(x + i * 0.001, y) * 20;
    }
    p.closed = true;
    p.smooth();
}

touchUp(p1);
touchUp(p2);
touchUp(p3);

function radians(degrees) {
    return degrees * (Math.PI / 180);
}

function sin(a) {
    return Math.sin(radians(a));
}

function cos(a) {
    return Math.cos(radians(a));
}

function onKeyDown(event) {
    if (event.key === "s") {
        downloadAsSVG();
    }
}

function downloadAsSVG(fileName) {
    // use default name if not provided
    fileName = fileName || "output.svg";

    // create a data url of the file
    var svgData = project.exportSVG({ asString: true });
    var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

    // create a link to the data, and "click" it
    var link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
}