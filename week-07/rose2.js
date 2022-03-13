
// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js


function flower(radius, position, rotateNum, k) {
    var myPath = new Path();

    myPath.strokeColor = 'black';
    myPath.blendMode = 'difference'
    myPath.strokeWeight = 1

    for (var a = 0; a < rotateNum * Math.PI; a += 0.01) {

        var r = radius * Math.cos(k * a)
        var x = r * Math.cos(a * 1)
        var y = r * Math.sin(a * 1)
        myPath.lineTo(new Point(position + [x, y]))
        myPath.fillColor = {
            hue: Math.random() * 330,
            saturation: 0.5,
            brightness: 0.8
        }

    }
}


//initialize positions for flower

for (var i = 0; i < 50; i++) {
    var d = Math.random() * 70 + 7
    var n = Math.random() * 90 + 9
    var k = n / d
    var offset = Math.random() * 200
    var position = Point.random() * view.size;
    var vector = new Point({
        angle: 360 * Math.random(),
        length: Math.random() * 10
    });
    var radius = Math.random() * 40 + 40;
    // flower(radius, position, k);
    flower(radius, position, 2, d);
    flower(radius, position, 3, n / 3);
    flower(radius, position + [offset, offset], 5, k * 4);
    // flower(radius, position - [offset / 2, offset / 2], 3, k * 2);
    flower(radius, position + [offset * 2, -offset * 3], 5, k);
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

