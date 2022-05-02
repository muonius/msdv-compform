//https://www.youtube.com/watch?v=3tTZlTq4Cxs

let angle = 0;
let tree;

function setup() {
  createCanvas(600, 600, WEBGL);
  tree = createGraphics(300, 300);
  tree.background(51);
}

function draw() {
  background(0);
  tree.stroke(255);
  tree.translate(width / 2, height);
  tree.branch(100);

  ambientLight(100);
  directionalLight(255, 255, 255, 1, 0, 1);

  rectMode(CENTER);
  push();
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  noStroke();
  texture(tree);
  box(100);
  pop();
  translate(0, 100);
  rotateX(HALF_PI);
  fill(0);
  plane(500, 500);

  angle += 0.01;
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(PI / 9);
    branch(len * 0.67);
    pop();
    push();
    rotate(-PI / 5);
    pop();
    branch(len * 0.57);
  }
}
