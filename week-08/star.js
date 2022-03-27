let t;

function setup() {
  createCanvas(400, 400);
  t = new Turtle();
}

function draw() {
  background(220);
  translate(-30, 50);
  stroke(0);
  t.penUp();
  t.moveTo(100, 100);
  t.turnTo(-15);
  t.penDown();

  for (j = 0; j < 5; j++) {
    for (let i = 0; i < 18; i++) {
      t.moveForward(12);
      t.turnRight(2);
    }
    t.turnRight(108);
  }

  noLoop();
}

// function draw() {
//   background(220);
//   stroke(0)
//   t.penUp();
//   t.moveTo(100, 100);
//   t.penDown();

// for (let side = 0; side <5; side++) {
//   t.moveForward(100);
//   t.turnRight(144);
// }
//   t.penUp();
//   noLoop();

// }

// }
