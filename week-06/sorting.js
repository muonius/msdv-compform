// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
let img;
let n = 20;
let colorArray = [];
let totalArray = [];

function preload() {
    img = loadImage("./assets/Olivier.png");
}

function setup() {
    createCanvas(400, 400);
    img.resize(100, 100);

    noSmooth();
}

function draw() {
    img.loadPixels();

    for (let i = 0; i < 50; i++) {
        sortPixels();
    }

    img.updatePixels();

    image(img, 0, 0, width, height);
}

function sortPixels() {
    // Get a random pixel.
    const x = random(1, img.width);
    const y = random(1, img.height - 1);

    for (let i = 0; i <= n; i++) {
        colorArray.push(img.get(x, y + i));
        totalArray.push(red(colorArray[i]) + green(colorArray[i]) + green(colorArray[i]))
    }

    for (let i = 1; i <= n; i++) {
        if (totalArray[i] < totalArray[i + 1]) {
            img.set(x, y, colorArray[i + 1]);
            img.set(x, y + 1, colorArray[i]);
            // img.set(x + 1, y + 1, colorArray[i]);
            // img.set(x + 1, y - 1, colorArray[i]);
            // img.set(x - 1, y - 1, colorArray[i]);
            // img.set(x - 1, y + 1, colorArray[i]);
        }

    }

}