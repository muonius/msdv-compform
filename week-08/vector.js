// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

const inc = 0.05;
const scale = 5;
let cols, rows;
let zoff = 0;
let fr;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  background(50);
  cols = floor(width / scale);
  rows = floor(height / scale);
}

function draw() {
  background(255);
  strokeWeight(0.5);

  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    let t;

    for (let x = 0; x < cols; x++) {
      let r = noise(xoff, yoff) * 255;
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;

      t = new Turtle();
      xoff += inc;
      stroke(r * 0.8);
      t.pushState();
      t.moveTo(x * scale, y * scale);
      t.popState();
    }
    t.moveForward(scale);
    yoff += inc;
    zoff += 0.0001;
  }
  // noLoop();
}
