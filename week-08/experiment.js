// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let x = 0;
let y = 0;
let spacing = 20;
let t;

function setup() {
  createCanvas(600, 600);
  background(0);
  t = new Turtle();
  // noLoop();
}

function draw() {
  stroke(random(255));
  strokeWeight(0.5);

  if (random(1) < 0.3) {
    t.pushState();
    for (let i = 0; i < spacing; i++) {
      t.penUp();
      t.moveTo(x, y + spacing);
      t.penDown();
      t.turnLeft(random(20));
      t.moveForward(spacing);
      t.penUp();
    }
    t.popState();
  } else {
    t.pushState();
    for (let i = 0; i < spacing; i++) {
      t.penUp();
      t.moveTo(y, x + spacing);
      t.penDown();
      t.turnRight(random(5));
      t.moveForward(spacing);
      t.penUp();
    }
    t.popState();
  }

  x += spacing;

  if (x > width) {
    x = spacing;
    y += spacing;
  }
}
