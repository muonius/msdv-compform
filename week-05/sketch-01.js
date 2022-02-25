// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// Dot Challenge Starting Point

//Observation & Strategies
// 1. Noise high frequency displacement
//2. Color and size are correlated, greater hue, greater size
//3. There are no red or orange in the hue, use HSB, exlcude red values

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

        //diameter grows by hue value, not random
        let diameter = map(i, 0, 100, 8, 18)

        //map hue to i value
        let hue = map(i, 0, 99, 60, 320)

        fill(hue, 100, 100);

        ellipse(x, y, diameter, diameter);
    }

    noLoop();
}