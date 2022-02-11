
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
let noiseMax = 0.5;
let phase = 0;
let zoff = 0;

function setup() {
    createCanvas(500, 500);
    noiseDetail(3, 0.6);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
        //perlin noise +1 to keep all positive values
        // let xoff = cos(a) + 1;
        // let yoff = sin(a) + 1;
        let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(a - phase), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200)
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);

    }
    endShape(CLOSE);
    phase += 0.01;
    zoff += 0.01;
}