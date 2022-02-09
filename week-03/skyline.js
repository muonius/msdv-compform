// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let amplitude = 200;
let frequency = 0.01;


function setup() {
    createCanvas(600, 200);
    noStroke();
    ellipseMode(CENTER);
    noiseSeed(1);

    // uncomment next line for simpler/less detailed noise
    // noiseDetail(1, 0);
}

function draw() {
    background(200, 200, 210);
    fill(100);

    let x = 0;
    for (x = 0; x < width; x += 20) {

        let buildingHeight = noise(x * frequency) * amplitude;
        // console.log(noise(x * frequency))
        // Note: what happens if you change the noise call above to this:
        // let buildingHeight = noise(x * frequency, frameCount * frequency) * amplitude;

        rect(x, height * 0.9 - buildingHeight, 20, buildingHeight);
        // ***********HELP NEEDED!!!!
        //what I have tried and did not work
        // 1. let num = random(5) if (x%num===0) { rect(),arc()}
        // 2. created an xPos array and random(xPos) but I know why that didnt work...
        if (x % 3 === 0) {
            rect(x + 6, height * 0.9 - buildingHeight - 5, 8, 9);
            arc(x + 10, height * 0.9 - buildingHeight - 6, 9, 9, PI, TWO_PI);
        }
        // ellipse(x + 10, height * 0.9 - buildingHeight - 5, 10)
    }

    fill(150);
    rect(0, height * 0.9, width, height * 0.5);
}


// if (noise(x) < .5) { // add towers randomly
//     if (noise(x * .005) < .4) { // add noise in clumps (effect easier to see if you don't always use the same noise seed)
//     if (noise(x * frequency) > .5) { // add towers to tall buildings
//     if (noise(x * frequency) < .3) { // add towers to short buildings