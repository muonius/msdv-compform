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

    image(img, 0, 0, 600, 600);
    for (let i = 0; i < img.width; i++) {
        let c = img.get(i, img.height / 2);
        stroke(c);
        line(i, 0, width, height);
        // line(i, 0, i - 4, height);
    }
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
