
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


const inc = 0.05;
const scale = 25;
let cols, rows;
let zoff = 0;
let fr;

function setup() {
    createCanvas(600, 600);
    cols = floor(width / scale);
    rows = floor(height / scale);
}

function draw() {
    background(0);

    let yoff = 0;

    for (let y = 0; y < rows; y++) {
        let xoff = 0;

        for (let x = 0; x < cols; x++) {
            let angle = noise(xoff, yoff, zoff) * TWO_PI;


            let v = p5.Vector.fromAngle(angle);

            xoff += inc;
            stroke(255);
            push();
            translate(x * scale, y * scale);
            rotate(v.heading());
            line(0, 0, scale, 0);
            pop();

            // rect(x * scale, y * scale, scale, scale)
        }
        yoff += inc;
        zoff += 0.001;
    }
    noLoop();
}
