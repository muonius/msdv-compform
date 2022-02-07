
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

//noiseDetails (12,0.4) finer details
//OpenSimplex Noise
//directional artifect - jerky
//simplex geometry, not square grid based

const inc = 0.02;

function setup() {
    createCanvas(500, 500);
    pixelDensity(1);
}

function draw() {

    let yoff = 0;

    loadPixels()
    for (let x = 0; x < width; x++) {
        let xoff = 0;

        for (let y = 0; y < height; y++) {
            let r = noise(xoff, yoff) * 255;
            let index = (x + y * width) * 4;

            pixels[index + 0] = y + noise(255 * xoff);
            pixels[index + 1] = y + noise(255 * yoff);;
            pixels[index + 2] = x + noise(200 * xoff);
            pixels[index + 3] = 100;

            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();

    noLoop();
}
