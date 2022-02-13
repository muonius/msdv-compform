
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


const inc = 0.01;
const scale = 10;
let cols, rows;
let zoff = 0;
const seedLoop = [29, 36, 41, 44, 54, 55, 62, 63, 70, 72]

function setup() {
    createCanvas(600, 600);
    cols = floor(width / scale);
    rows = floor(height / scale);
    angleMode(DEGREES);
    noiseSeed(random(seedLoop));
}

function draw() {
    background(0);

    let yoff = 0;


    for (let y = 1; y <= rows; y++) {
        let xoff = 0;

        for (let x = 1; x <= cols; x++) {
            n = noise(x * 0.01, yoff, zoff);
            xoff += n * 15 - 5;
            // push();
            stroke(255);
            strokeWeight(xoff * 0.02);
            strokeCap(SQUARE);
            x1 = (x - 1) * scale - xoff;
            x2 = (x) * scale + xoff;
            y1 = (y - 1) * scale;
            y2 = y * scale;

            line(x1, y1, x2, y2);
            line(y2, x2, y1, x1); //square effect
            xoff += inc;
            // pop();

        }
        yoff += inc;
        zoff += 0.001;
    }
    noLoop();
}
