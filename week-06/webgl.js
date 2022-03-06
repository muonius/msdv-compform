// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js

const dim = 400;
var canvasImage;

var pixelFactor = 10;

function preload() {
    canvasImage = loadImage("https://raw.githubusercontent.com/muonius/msdv-compform/master/week-06/assets/mondrian.png");
    // canvasImage = loadImage("./assets/mondrian.png");
    // canvasImage = loadImage("./assets/mondrian2.png");
    // canvasImage = loadImage("./assets/mondrian3.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // pixelDensity(1);
    canvasImage.loadPixels();
    noStroke();
}

function draw() {

    orbitControl();
    lights();

    background('black');

    for (let j = 0; j < dim; j += pixelFactor) {
        for (let i = 0; i < dim; i += pixelFactor) {
            let pixelIndex = (i + dim * j) * 4;

            const r = 255 - canvasImage.pixels[pixelIndex + 0]
            const g = 255 - canvasImage.pixels[pixelIndex + 1]
            const b = 255 - canvasImage.pixels[pixelIndex + 2]
            const a = canvasImage.pixels[pixelIndex + 3]

            let distance = r + g + b


            push();
            translate(i - dim / 2, j - dim / 2, distance / 5);
            fill(
                255 - r,
                255 - g,
                255 - b,
                a
            );
            box(pixelFactor);
            pop();
        }
    }
}