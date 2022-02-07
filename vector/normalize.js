
/*p5 global*/

function setup() {

    createCanvas(400, 400);
    background(0);
}

function draw() {
    background(0);//always update background
    let pos = createVector(200, 200);
    let mouse = createVector(mouseX, mouseY);

    let v = p5.Vector.sub(mouse, pos);
    //********original process
    // v.normalize();
    // let m = v.mag();
    // v.div(m)
    // v.mult(50);
    //*******short cut process
    //normalize mag to 1 and then multiply by designed multiplier
    v.setMag(50);
    //v.normalize().mult(50);


    translate(width / 2, height / 2);
    strokeWeight(4);
    stroke(255)
    line(0, 0, v.x, v.y)

}