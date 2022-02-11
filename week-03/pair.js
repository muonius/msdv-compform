
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


const inc = 0.0001;
const scale = 60;
let cols, rows;
let zoff = 0;
let fr;

function setup() {
    createCanvas(600, 600);
    cols = floor(width / scale);
    rows = floor(height / scale);
}

function draw() {
    background(255);

    let yoff = 0;


    for (let y = 1; y <= rows; y++) {
        let xoff = 0;

        for (let x = 1; x <= cols; x++) {
            n = noise(x * 0.1, yoff, zoff);
            xoff += n * 40 - 30;
            push();
            stroke(0);
            x1 = (x - 1) * scale - xoff;
            x2 = (x - 1) * scale + xoff;
            y1 = (y - 1) * scale;
            y2 = y * scale;



            line(x1, y1, x2, y2);

            xoff += inc;
            pop();

        }
        yoff += inc;
        zoff += 0.001;
    }
    noLoop();
}
