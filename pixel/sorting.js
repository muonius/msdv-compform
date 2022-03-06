// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let orgImage;
let sorted;

function preload() {
    orgImage = loadImage("./Birkin.png");
}


function setup() {
    createCanvas(1000, 500)
    colorMode(RGB)
    sorted = createImage(orgImage.width, orgImage.height)
    sorted.loadPixels();

    for (let x = 0; x < sorted.width; x++) {
        for (let y = 0; y < sorted.height; y++) {
            const c = getQuick(sorted, x, y);
            c[0] = 200; // invert red
            c[1] = 100; // invert green
            c[2] = 80; // invert blue
            // don't touch alpha
            setQuick(sorted, x, y, c);

        }
    }

    sorted.updatePixels()
    console.log(sorted.pixels)
}




function draw() {
    background(0)

    // image(orgImage, 0, 0)
    image(sorted, 500, 0)

}


function getQuick(img, x, y) {
    const i = (y * img.width + x) * 4;
    return [
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3],
    ];
}


function setQuick(img, x, y, c) {
    const i = (y * img.width + x) * 4;

    img.pixels[i + 0] = c[0];
    img.pixels[i + 1] = c[1];
    img.pixels[i + 2] = c[2];
    img.pixels[i + 3] = c[3];
}
