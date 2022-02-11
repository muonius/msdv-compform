
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
let noiseMax = 1;
let phase = 0;
let zoff = 0;
let a = 0;

function setup() {
    createCanvas(500, 500);
    noiseDetail(3, 0.6);
}

function draw() {
    background(0);

    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = noise(xoff, yoff);
    let x = map(r, 0, 1, 0, width)
    let y = map(r, 0, 1, 0, height)
    circle(x, y, 100)
    //this gives a perfect loop
    a += radians(1);

}