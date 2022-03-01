function setup() {
    createCanvas(500, 500);
    // colorMode(HSB)
}

function draw() {
    background(0);
    img = createImage(50, 50);
    img.loadPixels();

    for (let y = 0; y < height / 2; y++) {
        for (let x = 0; x < width / 2; x++) {
            // change resolution
            let d = dist(width / 2, height / 2, x * 10, y * 10)
            console.log(d)
            let c = color(d, 0, 0)

            img.set(x, y, c);
        }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();
}