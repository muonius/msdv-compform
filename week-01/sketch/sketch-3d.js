
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


const inc = 0.05;
const scale = 10;
let cols, rows;
let zoff = 0;
let fr;

function setup() {
    createCanvas(500, 500);
    cols = floor(width / scale);
    rows = floor(height / scale);
}

function draw() {
    background(255);

    let yoff = 0;

    for (let y = 0; y < rows; y++) {
        let xoff = 0;

        for (let x = 0; x < cols; x++) {
            let r = noise(xoff, yoff) * 255;
            let index = (x + y * width) * 4;
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            //straight right pointing lines
            // let v = p5.Vector.fromAngle(0);

            //straight downward pointing lines
            // let v = p5.Vector.fromAngle(PI / 2);

            //straight 60 deg pointing lines
            // let v = p5.Vector.fromAngle(PI / 6);

            //random TWO PI angle
            // let v = p5.Vector.fromAngle(random(TWO_PI));

            let v = p5.Vector.fromAngle(angle);

            xoff += inc;
            stroke(0);
            push();
            translate(x * scale, y * scale);
            rotate(v.heading());
            line(0, 0, scale, 0);
            pop();

            // rect(x * scale, y * scale, scale, scale)
        }
        yoff += inc;
        zoff += 0.0001;
    }
    // noLoop();
}
