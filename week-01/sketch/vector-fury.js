
//random direction, but fixed magnitude
//unit vector
//random2D
function setup() {

    createCanvas(400, 400);

    background(0)
}

function draw() {

    translate(width / 2, height / 2);

    // let v = createVector(100, 0);
    // let v = createVector(random(-100, 100), random(-100, 100));
    for (let i = 0; i < 100000; i++) {
        let v = createVector(random(-100, 100), random(-100, 100));
        // let v = p5.Vector.random2D();
        // v.mult(random(50, 100));

        strokeWeight(0.1);
        stroke(255, 50);
        line(0, 0, v.x, v.y);
        // rotate(PI / 3);
        // line(0, 0, v.x, v.y);
    }
    noLoop();
}