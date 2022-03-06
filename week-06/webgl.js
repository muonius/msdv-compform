// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js

const dim = 400;
var canvasImage;

var pixelFactor = 8;

function preload() {
    canvasImage = loadImage("https://source.unsplash.com/random/" + dim + "x" + dim);
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

            let pixelSum = canvasImage.pixels[pixelIndex + 0] +
                canvasImage.pixels[pixelIndex + 1] +
                canvasImage.pixels[pixelIndex + 2];

            push();
            translate(i - dim / 2, j - dim / 2, pixelSum / 3);
            fill(
                canvasImage.pixels[pixelIndex + 0],
                canvasImage.pixels[pixelIndex + 1],
                canvasImage.pixels[pixelIndex + 2],
                canvasImage.pixels[pixelIndex + 3]
            );
            box(pixelFactor);
            pop();
        }
    }
}