

var words = project.importSVG(document.getElementById('svg'));
words.visible = true; // Turn off the effect of display:none;
words.fillColor = null;
words.strokeColor = 'black';
var titsGroup = words.children.tits;
var upGroup = words.children.up;
var t1 = titsGroup.children.t1
var i = titsGroup.children.i
var t2 = titsGroup.children.t2
var s = titsGroup.children.s
var u = upGroup.children.u
var p = upGroup.children.p
// Resize the words to fit snugly inside the view:
words.fitBounds(view.bounds);
words.scale(0.8);

titsGroup.position = view.center;
upGroup.position = [-900, -900];

function onMouseMove(event) {
    upGroup.position = event.point;
    for (var i = 0; i < titsGroup.children.length; i++) {
        for (var j = 0; j < upGroup.children.length; j++) {
            showIntersections(upGroup.children[j], titsGroup.children[i])
        }
    }
}

function showIntersections(path1, path2) {
    var intersections = path1.getIntersections(path2);
    var myPath = new Path()
    // console.log(intersections)
    for (var i = 0; i < intersections.length; i++) {
        new Path.Circle({
            center: intersections[i].point,
            radius: 5,
            fillColor: '#009dec'
        }).removeOnMove();

        myPath.add(new Point(intersections[i].point));
        myPath.strokeColor = 'black';


    }

}


// var step = event.delta / 2;
// step.angle += 90;

// var top = event.middlePoint + step;
// var bottom = event.middlePoint - step;

// path.add(top);
// path.insert(0, bottom);
// path.smooth();