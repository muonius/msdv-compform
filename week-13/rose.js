// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let angle = 0;
let img;
let graphics;
let rose;
let offset = 0.03;

function setup() {
  createCanvas(600, 600, WEBGL);

  rose = createGraphics(600, 600);
  // love.background(255, 0, 0);
  rose.fill(255);
}

function draw() {
  background(0);
  rose.translate(width / 2, height / 2);
  rose.noFill();
  rose.beginShape();
  for (let a = 0; a < TWO_PI; a += radians(1)) {
    let r = 200 * cos(7 * a);
    let x = r * cos(a + a * 0.02);
    let y = r * sin(a + a * 0.01);

    rose.stroke(255);
    rose.strokeWeight(1);
    rose.vertex(x, y);
  }

  rose.endShape();

  ambientLight(200);
  directionalLight(255, 255, 255, 1, 0, 1);

  rectMode(CENTER);

  for (let x = -300; x < 300; x += 100) {
    push();
    translate(x, 0, x + 300);
    rotateX(angle * 0.6);
    rotateY(angle * 0.3 + offset);
    rotateZ(angle * 0.7);
    noStroke();
    texture(rose);
    sphere(100);
    // box(100);
    pop();
    angle += 0.001;
    offset += 0.001;
  }
}
