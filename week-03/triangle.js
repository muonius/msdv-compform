// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
let scale = 20;
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
    background(0);
    let yoff = 0;


    for (let y = 15; y < height; y += margin) {
        let xoff = 0;

        for (let x = 5; x < width; x += 2) {
            if (x >= width) x = 5;

            let n = map(noise(x, inc), 0, 1, -25, 25)
            let s = map(sin(x, inc), -1, 1, -50, 50);
            let x1 = x + s;
            let x2 = x + s + margin
            let x3 = x + s + margin;
            let y1 = y + s + margin + yoff;
            let y2 = y + s + yoff
            let y3 = y + s + margin * 1.5 + yoff;

            // y1 += (noise(a * y, 1) - 0.5) * scale;
            // y2 += (noise(a * y, 2) - 0.5) * scale;
            // y3 += (noise(a * y, 3) - 0.5) * scale;
            if (min(random(1), random(1), random(1), random(1)) < 0.5) {
                fill(255, 255, 255);
            } else fill(0)

            // noStroke();
            stroke(0);
            strokeWeight(random(10) / 20)
            triangle(x1, y1, x2, y2, x3, y3);
            xoff += 1;
        }

        yoff += 0.1;
        margin += 0.5;
        inc += 0.05;
    }

    noLoop();
}
