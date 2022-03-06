let img;
let particlesArray = [];
const numberOfParticles = 5000;

function preload() {
    img = loadImage("./assets/Olivier.png");
    // img.resize(300,300)
}

function setup() {
    createCanvas(600, 600)
    noLoop();
}

function draw() {

    img.loadPixels()

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            const this_color = color(getQuick(img, x, y));
            const below_color = color(getQuick(img, x, y + 1));

            let color_a = color(getQuick(img, x, y));
            let color_b = color(getQuick(img, x, y + 1));
            let blend_color1 = lerpColor(color_a, color_b, 0.5)
            let blend_color2 = lerpColor(color_a, color_b, 0.7)

            // console.log(blend_color1)

            if (lightness(this_color) < lightness(below_color)) {
                const out_color1 = blend_color1;
                const out_color2 = blend_color2;
                // img.set(x, y, out_color1);
                img.set(x + 1, y, out_color1);
                img.set(x + 1, y, out_color2);
                img.set(x, y + 1, out_color1);
                img.set(x, y + 2, out_color2);
                // setQuick(img, x, y + 1, out_color1);
            }
        }
    }
    img.updatePixels();
    image(img, 0, 0, 300, 300)
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
