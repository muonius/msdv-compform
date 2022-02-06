
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


const inc = 0.1;
const scale = 2;
const scale2 = 2;
let cols, rows;
let zoff = 0;

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
            // let index = (x + y * width) * 4;

            let angle = noise(xoff, yoff, zoff) * 0.9 * PI;
            let v = p5.Vector.fromAngle(angle);

            xoff += inc;
            noStroke();
            stroke(random(10), random(100), random(200, 255), random(100));
            // fill(random(10), random(100), random(200, 255), random(100));
            strokeWeight(min(random(20), random(50), random(10)));
            // strokeCap(PROJECT);
            push();
            translate(x * scale + yoff, y * scale + 2 * zoff);

            rotate(v.heading());

            translate(x * scale2 - yoff, y * scale2 + zoff);
            // strokeWeight(random(2));
            // line(0, 0, scale, 0);
            // stroke(random(10), random(100), random(200, 255), random(100));
            rotate(v.heading());
            // strokeWeight(min(random(20), random(50), random(10)));
            ellipse(0, 0 - zoff, random(5), random(10));

            // stroke(0);
            // strokeWeight(1);

            // line(0, 0, scale, 0);
            // translate(x * scale2 + zoff, y * scale2 + zoff);
            // rotate(v.heading());
            // line(0, 0, scale, 0);
            pop();
        }
        yoff += inc;

        zoff += 0.01;
    }
    noLoop();
}
