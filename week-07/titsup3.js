
var words = project.importSVG(document.getElementById('svg'));
words.visible = true; // Turn off the effect of display:none;
var titsGroup = words.children.tits;
var upGroup = words.children.up;
console.log(words)
titsGroup.fillColor = null;
// titsGroup.strokeColor = null;
upGroup.fillColor = '#009dec';

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

function showIntersections(path1, path2, event) {
    var intersections = path1.getIntersections(path2);
    var myPath = new Path()
    // console.log(intersections)
    for (var i = 0; i < intersections.length; i++) {

        circlePath = new Path.Circle({
            center: intersections[i].point,
            radius: Math.random() * 5,
            fillColor: '#009dec'
        })

    }

}





