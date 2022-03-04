
let testImage;
let n;
let frame = 0;

function preload() {
    testImage = loadImage("./assets/Birkin.png");
    noLoop();
}

function setup() {
    // create a place to draw
    createCanvas(500, 500);

    // load up the pixel[] array so we can read colors out of it later
    testImage.loadPixels();
}

function draw() {
    // clear the background
    background(0, 0, 0);

    // stroke(0, 200, 100, 80);

    testImage.loadPixels();


    // loop over every x,y pixel coordinate in the image
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const pixelRed = getQuick(testImage, x, y)[0];
            const pixelGreen = getQuick(testImage, x, y)[1];
            const pixelBlue = getQuick(testImage, x, y)[2];

            colorT = [pixelRed, pixelGreen, pixelBlue, 80]

            if (random(1) < 0.7) {
                // frame += 0.01;
                stroke(color(colorT))
                drawGrassBlade(x, y);
            }
            // frame += 0.01;
        }

    }


    // noLoop();
}

function drawGrassBlade(x, y) {
    let offsetX = 0;
    let offsetY = 0;


    n = noise(x * 0.01 + millis() * -0.001);
    offsetX += n * 10;
    // offsetX += (noise(x * 0.1 + frame, 1)) * 8;
    offsetY += (noise(x * 0.1 + frame, 10
    ) - 0.5) * 20;

    line(x, y, x + offsetX, y + offsetY);
}

// find the RGBA values of the pixel at x, y in the img.pixels array
function getQuick(img, x, y) {
    const i = (y * img.width + x) * 4;
    return [
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3],
    ];
}
