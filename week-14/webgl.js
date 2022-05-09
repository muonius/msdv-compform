// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /microgames/sketches/p5.play.js

let walls;
let ball1;
let ball2;

let angle = 0;

function setup() {
  rectMode(CENTER);
  createCanvas(500, 500, WEBGL);

  ball1 = createSprite(250, 250, 20, 20);
  // ball.immovable = true;
  ball1.velocity.x = 10;
  ball1.velocity.y = 5;
  ball1.draw = function () {
    fill(237, 205, 0);
    push();
    sphere(50);
    // ellipse(-200, -200, 200, 200);
    pop();
  };

  ball2 = createSprite(250, 250, 20, 20);
  // ball.immovable = true;
  ball2.velocity.x = 5;
  ball2.velocity.y = 15;
  ball2.draw = function () {
    fill(237, 205, 0);
    push();
    // sphere(50);
    // ellipse(-200, -200, 200, 200);
    cylinder(10, 10);
    pop();
  };

  walls = new Group();

  const left_wall = createSprite(5, height * 0.5, 10, height);
  left_wall.draw = function () {
    box(10, 100, 20);
  };
  left_wall.immovable = true;
  walls.add(left_wall);

  const right_wall = createSprite(width - 5, height * 0.5, 10, height);
  right_wall.draw = function () {
    box(20, 100, 50);
  };
  right_wall.immovable = true;
  walls.add(right_wall);

  const top_wall = createSprite(width * 0.5, 5, width, 10);
  top_wall.immovable = true;
  top_wall.draw = function () {
    box(5, 250, 20);
  };
  walls.add(top_wall);

  const bottom_wall = createSprite(width * 0.5, height - 5, width, 10);
  bottom_wall.immovable = true;
  top_wall.draw = function () {
    box(200, 50, 10);
  };
  walls.add(bottom_wall);
}

function draw() {
  background(0);
  fill(255);
  ambientLight(0, 0, 255);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.normalize();
  directionalLight(255, 0, 0, v);

  background(175);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle * 0.3);

  ambientMaterial(255);
  noStroke();

  torus(80, 50);
  angle += 0.01;

  ball1.bounce(walls);
  ball2.bounce(walls);
  ball1.bounce(ball2);
  drawSprites();
}
