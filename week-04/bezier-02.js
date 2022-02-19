function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    stroke(255)
    strokeWeight(24);
    point(0, 300)
    point(mouseX, mouseY)
    point(400, 400)
    point(600, 300)

    //bezier function takes 4 points: anchor, control, control, anchor
    noFill();
    strokeWeight(2)
    bezier(0, 300, mouseX, mouseY, 400, 400, 600, 300)
    //both lines are tangent to the curve
    line(0, 300, mouseX, mouseY)
    line(400, 400, 600, 300)

}