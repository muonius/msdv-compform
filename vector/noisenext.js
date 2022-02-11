
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
let noiseMax = 1;
let phase = 0;
let zoff = 0;
let a = 0;
let cx;
let cy;
let xNoise;
let yNoise;

class NoiseLoop {
    constructor(diameter, min, max) {
        this.diameter = diameter;
        this.min = min;
        this.max = max;
        // cx = random(10000)
        // cy = random(10000)
    }

    value(a) {
        let xoff = map(cos(a), -1, 1, 0, diameter);
        let yoff = map(sin(a), -1, 1, 0, diameter);
        let r = noise(xoff, yoff);
        let x = map(r, 0, 1, 0, width)
        return map(r, 0, 1, min, max)
    }
}

function setup() {
    createCanvas(500, 500);
    xNoise = new NoiseLoop(5, 0, width)
    yNoise = new NoiseLoop(5, 0, height)
    noiseDetail(3, 0.6);
}

function draw() {
    background(0);

    let x = xNoise.value(a)
    let y = yNoise.value(a)
    circle(x, y, 100)
    //this gives a perfect loop
    a += radians(1);

}