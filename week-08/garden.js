// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let t;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  background(50);
  noLoop();
  t = new Turtle();
}

function draw() {
  t.penUp();
  t.moveTo(250, 450);
  t.turnTo(-90);
  t.penDown();
  drawBranch(100);
}

function drawBranch(length) {
  if (length < 10) {
    return;
  }

  // draw this branch
  t.moveForward(length);

  // left child
  t.pushState();
  t.turnLeft(35);
  drawBranch(length * 0.75);
  t.popState();

  // right child
  t.pushState();
  t.turnRight(65);
  drawBranch(length * 0.75);
  t.popState();
}
