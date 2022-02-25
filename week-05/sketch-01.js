// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// Dot Challenge Starting Point
// 1. Noise high frequency displacement
//2. Random color
//3. Random size

function setup() {
    createCanvas(400, 400);
    colorMode(HSB)
}

function draw() {
    background(20);

    noStroke();
    ellipseMode(CENTER);

    let noiseFrequency = 20;

    for (let i = 0; i < 100; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        let x = noise(i * noiseFrequency, 1) * width;
        let y = noise(i * noiseFrequency, 2) * height;

        // the diameter shouldn't always be 10, it needs to vary
        let diameter = random(6, 15);

        // the colors also need to change
        // what colorMode would be easiest to work with?
        let hue = map(i, 0, 99, 60, 320)
        fill(hue, 100, 100);

        ellipse(x, y, diameter, diameter);
    }

    noLoop();
}