// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
let scale = 10;
let margin = 5;
let cols;
let rows;
let inc = 0.05;
let zoff = 0;

function setup() {
    createCanvas(600, 600);
    cols = floor(width / scale);
    rows = floor(height / scale);
}

function draw() {
    background(255);
    let n;
    let yoff = 0;
    for (let y = 0; y < height; y += margin) {
        let xoff = 0;

        for (let x = 0; x < width; x += margin) {
            if (x >= width) x = 0;
            n = noise(y * .002 + millis() * .001, yoff);


            let x1 = x;
            let x2 = x + margin
            let x3 = x;
            let y1 = y + margin * 0.5;
            let y2 = y
            let y3 = y + margin * 2;


            // margin += (noise(x, 1, frameCount * 0.1) - 0.5) * 5;

            // x1 += (noise(n, 1, frameCount * 0.1) - 0.5) * 150;
            // y1 += (noise(n, 2, frameCount * 0.1) - 0.5) * 150;
            // x2 += (noise(n, 1, frameCount * 0.1) - 0.5) * 150;
            // y2 += (noise(n, 2, frameCount * 0.1) - 0.5) * 150;

            stroke(0);
            strokeWeight(5 - xoff)
            triangle(x1, y1, x2, y2, x3, y3);
        }

        yoff += 0.01;
        margin += 0.5;
        xoff += 0.5;
    }
    noLoop();
}
