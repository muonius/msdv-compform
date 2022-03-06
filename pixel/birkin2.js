// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let img;
let cnv;
let angle = 0.1;
let n;

function preload() {
    img = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-06/assets/Birkin.png');
}

function setup() {
    cnv = createCanvas(img.width, img.height);
    // print(img.width,img.height);
    let newCanvX = (windowWidth - img.width) / 2;
    let newCanvY = (windowHeight - img.height) / 2;
    cnv.position(newCanvX, newCanvY);

}

function draw() {
    background(0)
    // access each pixel information of the image
    for (let x = 0; x < img.width; x += 2) {
        for (let y = 0; y < img.height; y += 2) {
            let c = img.get(x, y);
            // if (angle === 360) angle -= 1
            let xPos = x;
            let yPos = y;
            let offsetX = 0;
            let offsetY = 0;

            n = noise(x * 0.01 + millis() * -0.001);
            offsetX += n * 10;
            // offsetX += (noise(x * 0.1 + frame, 1)) * 8;
            offsetY += (noise((x * 0.1 + angle), 10) - 0.5) * 20;

            push();
            // translate(xPos, yPos);
            // rotate(radians(noise(x * 0.01 + angle, 1) * 360));
            strokeWeight(random(1));
            fill(color(c));
            noFill();

            stroke(color(c))
            // rect(x, y, 10, 5);
            if (random(1) < 0.8) {
                line(x, y, x + offsetX, y + offsetY);
            }

            pop();
        }

        angle += 0.1
    }


}
