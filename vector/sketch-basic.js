
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let xoff1 = 0;
let xoff2 = 10000;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(51);


    let x = map(noise(xoff1), 0, 1, 0, width);
    let y = map(noise(xoff2), 0, 1, 0, width);

    xoff1 += 0.02;
    xoff2 += 0.02;

    ellipse(x, y, 24, 24)
}
