


function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    noStroke();

}


function draw() {
    background(211, 211, 211);

    let rows = height / 50;
    let cols = width / 50;

    let num = rows * cols;


    for (row = 0; row < rows; row++) {
        for (col = 0; col < rows; col++) {
            drawThing(col * 50 + 25, row * 50 + 25);
        }
    }

}

let brownianRadius = 25;

function drawThing(x, y) {
    let radius;

    // even
    radius = random(0, 50);

    // very strong low bias
    // radius = min(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

    // very strong high bias
    // radius = max(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

    // very strong middle bias
    // radius = (random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50)) * 0.2;

    ////////////////////////////////////////////////////////////////////
    // curated sizes
    // let r = random(100);
    // if (r < 10) {
    // 	radius = 10;
    // } else if (r < 95) {
    // 	radius = 20;
    // } else {
    // 	radius = 40;
    // }

    ////////////////////////////////////////////////////////////////////
    // brownian
    // brownianRadius += random(-5, 5);
    // radius = brownianRadius;

    const palette = {
        colorR: random(5, 255),
        colorG: random(0, 255),
        colorB: random(50, 115)
    }


    ellipse(x, y, radius, radius);

    fill(palette.colorR, palette.colorG, palette.colorB);
}
