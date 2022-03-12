function setup() {
    createCanvas(500, 500)
}

function draw() {
    background(255);
    // drawLip()
    drawTear()
    // drawBrow(1)
    // drawBrow(100)
}

function drawBrow(xoff, angle) {



    push();
    translate(width / 2, height / 2)
    stroke(0);
    strokeWeight(5)
    rotate(radians(-angle))
    fill(0)
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {

        let r = 10
        let x1 = 5 * sin(a) * r + xoff
        let y1 = -10 * cos(a) * (cos(a) + 1)

        //diamond 2
        vertex(x1, y1)

    }
    endShape(CLOSE);

    pop();
}


function drawTear() {
    push();
    translate(width / 2, height / 2)


    stroke('#FF0000');
    strokeWeight(5)
    noFill();
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {
        let r = 10
        let x1 = 10 * cos(a) * (sin(a) + 1)
        let y1 = 5 * sin(a) * r
        //diamond 2
        vertex(x1, y1)


    }
    endShape(CLOSE);
    pop();
}


function drawLip() {

    push();
    translate(width / 2, height / 2)

    stroke('#FF0000');
    strokeWeight(5)
    fill('#FF0000');
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {
        let r = 10
        let x1 = 13 * pow(sin(a), 3) * r
        let x2 = 12 * pow(sin(a), 3) * r
        let y1 = (-5 * cos(a * 2) * cos(a * 2) * r)
        let y2 = (5 * cos(a * 2) * cos(a * 2) * r) - r * 10
        //diamond 2
        vertex(x1, y1)
        vertex(x2, y2)

    }
    endShape(CLOSE);
    pop();
}

