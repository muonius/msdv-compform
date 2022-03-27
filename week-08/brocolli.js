// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let turtle1, turtle2;

function setup() {
  createCanvas(500, 500);
  noFill();

  background(50);
  noLoop();
  turtle1 = new Turtle();
  turtle2 = new Turtle();
}

function draw() {
  //draw face
  turtle1.penUp();
  turtle1.moveTo(250, 350);
  turtle1.turnTo(-70);
  turtle1.penDown();
  stroke(255);
  drawFluff(turtle1, 11);
  turtle1.penUp();

  //draw ears
  turtle2.penUp();
  turtle2.moveTo(120, 220);
  turtle2.turnTo(360);
  turtle2.penDown();
  stroke(250);
  drawFluff(turtle2, 8);
  turtle2.penUp();
  turtle2.moveTo(350, 200);
  turtle2.turnTo(320);
  turtle2.penDown();
  drawFluff(turtle2, 8);
  turtle2.penUp();

  //draw eyes
  turtle2.moveTo(150, 280);
  turtle2.turnTo(60);
  turtle2.penDown();
  stroke(0);
  drawEye(turtle2, 7);
  turtle2.turnTo(60);
  drawEye(turtle2, 6);
  turtle2.penUp();
  turtle2.moveTo(350, 300);
  turtle2.turnTo(-190);
  turtle2.penDown();
  drawEye(turtle2, 7);
  drawEye(turtle2, 6);
  turtle2.penUp();

  // turtle2.moveTo(250, 380);
  // turtle2.turnTo(-270);
  // turtle2.penDown();
  // stroke(0);
  // strokeWeight(2);
  // drawMouth(turtle2, -1);
  // turtle2.penUp();
  // turtle2.moveTo(250, 380);
  // turtle2.turnTo(-270);
  // drawMouth(turtle2, -1);
}

function drawFluff(myTurtle, length) {
  if (length < 3) {
    return;
  }

  strokeWeight(length / 10);
  myTurtle.moveForward(length - 0.5);
  myTurtle.turnLeft(10);
  myTurtle.moveForward(length - 0.5);

  // left child
  myTurtle.pushState();
  myTurtle.turnLeft(random(60, 30));
  drawFluff(myTurtle, length - 0.5);
  //drawBranch(length * random(.5, .9));

  myTurtle.popState();

  // right child
  myTurtle.pushState();
  myTurtle.turnRight(random(40, 60));
  drawFluff(myTurtle, length - 0.5);
  //drawBranch(length * random(.5, .9));
  myTurtle.popState();
}
function drawEye(myTurtle, length) {
  if (length < 1) {
    return;
  }

  strokeWeight(length / 10);
  myTurtle.moveForward(length - 0.05);
  myTurtle.turnLeft(10);
  myTurtle.moveForward(length - 0.05);

  // left child
  myTurtle.pushState();
  myTurtle.turnLeft(random(20, 30));
  drawFluff(myTurtle, length - 0.05);
  //drawBranch(length * random(.5, .9));

  myTurtle.popState();

  // right child
  myTurtle.pushState();
  myTurtle.turnRight(random(10, 60));
  drawFluff(myTurtle, length - 0.05);
  //drawBranch(length * random(.5, .9));
  myTurtle.popState();
}

// function drawMouth(myTurtle, turn) {
//   for (let i = 0; i < TWO_PI; i + radians(1)) {
//     myTurtle.turnLeft(turn);
//     myTurtle.moveForward(0.1);
//   }
// }
