// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let t;
let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let speed = 0;

function setup() {
  createCanvas(500, 500);
  noFill();

  background(50);
  noLoop();
  t = new Turtle();
}

function draw() {
  let frequency = 5;
  let amplitude = 2;
  let time = 200 / 1000;

  speed += time;

  stroke(255);
  t.penUp();
  t.moveTo(250, 450);
  t.penDown();

  for (i = 0; i < 20; i += 0.2) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // hint: drive offsetX and offsetY with noise() instead of random()
    let offsetX = noise(i * frequency + speed) * amplitude * 100;
    let offsetY = noise(i * frequency + speed, 100) * amplitude * 100;

    t.moveTo(x + offsetX, y + offsetY);
    t.moveForward(2);
    t.turnRight(2);
  }
}
