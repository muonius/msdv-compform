let t;
let pixelMap = [];
let noiseScale = 0.001;
let noiseMax = 1;
const pane = new Tweakpane();
const params = {
    redNoiseBeg: 0,
    redNoiseEnd: 1,
    redBeg: 0,
    redEnd: 155,
    greenNoiseBeg: 0.2,
    greenNoiseEnd: 1,
    greenBeg: 50,
    greenEnd: 150,
    blueNoiseBeg: 0,
    blueNoiseEnd: 1,
    blueBeg: 0,
    blueEnd: 255,
}

pane.addInput(params, "redNoiseBeg", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "redNoiseEnd", { min: 0, max: 12, step: 0.01 });
pane.addInput(params, "redBeg", { min: 0, max: 255, step: 1 });
pane.addInput(params, "redEnd", { min: 0, max: 255, step: 1 });
pane.addInput(params, "greenNoiseBeg", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "greenNoiseEnd", { min: 0, max: 12, step: 0.01 });
pane.addInput(params, "greenBeg", { min: 0, max: 255, step: 1 });
pane.addInput(params, "greenEnd", { min: 0, max: 255, step: 1 });
pane.addInput(params, "blueNoiseBeg", { min: 0, max: 1, step: 0.01 });
pane.addInput(params, "blueNoiseEnd", { min: 0, max: 12, step: 0.01 });
pane.addInput(params, "blueBeg", { min: 0, max: 255, step: 1 });
pane.addInput(params, "blueEnd", { min: 0, max: 255, step: 1 });

// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
// require https://cdn.jsdelivr.net/npm/tweakpane@1.5.9/dist/tweakpane.min.js

function setup() {

    createCanvas(500, 500)
    noStroke();
    background(0);
    //major effect acheived through noise Detail change
    noiseDetail(5, 0.9);
    makeMap();
    drawMap();
}

function draw() {
    makeMap();
    drawMap();
}

function makeMap() {
    for (let i = 0; i < width; i++) {
        pixelMap[i] = [];
        for (let j = 0; j < height; j++) {
            pixelMap[i][j] = pickColor(i, j);
        }
    }
    // t += 0.001;

}

function pickColor(i, j) {

    let height = noise((i) * noiseScale, (j) * noiseScale)
    let colorT = "#facade";//set up a color and initialize to a pink color if things go wrong
    let colorR = floor(map(noise(height, 1), params.redNoiseBeg, params.redNoiseEnd, params.redBeg, params.redEnd))
    let colorG = floor(map(noise(height, 3), params.greenNoiseBeg, params.greenNoiseEnd, params.greenBeg, params.greenEnd))
    let colorB = floor(map(noise(height, 4), params.blueNoiseBeg, params.blueNoiseEnd, params.blueBeg, params.blueEnd))

    colorT = [colorR, colorG, colorB]
    return color(colorT);

}


function drawMap() {

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            set(i, j, pixelMap[i][j])
        }
    }
    updatePixels();

    // console.log(pixelMap[0][0])
    //prints 0:0, 1: 141, 2:196, 3:255
    //
}







