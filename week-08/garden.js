// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let t;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke("darkGreen");
  background(255);
  noLoop();
  t = new Turtle();
}

function draw() {
  t.penUp();
  t.moveTo(250, 450);
  t.turnTo(-90);
  t.penDown();

  for (let i = 0; i <= 10; i++) {
    t.penUp();
    t.moveTo(50 + i * 50, 450);
    t.turnTo(-90);
    t.penDown();
    strokeWeight(2);
    t.moveForward(random(50, 270));
    strokeWeight(2);
    drawBranch(100);
    t.penUp();

    // t.penDown();
    // strokeWeight(4);

    // strokeWeight(1);
    // drawBranch(50);
  }
}

function drawBranch(length) {
  if (length < 2) {
    return;
  }
  // draw this branch

  t.moveForward(length * 0.5 + 0.1);
  t.turnLeft(random(1, 10));

  // left child
  t.pushState();
  t.turnLeft(random(1, 30));
  drawBranch(length * 0.5);
  t.popState();

  // right child
  t.pushState();
  t.turnRight(random(1, 30));
  drawBranch(length * 0.8);
  t.popState();
}
