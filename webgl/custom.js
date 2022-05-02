//https://www.youtube.com/watch?v=3tTZlTq4Cxs

let angle = 0;
let img;
let graphics;
let love;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function preload() {
  img = loadImage("mexico.jpg");
}

function draw() {
  background(0);
  ambientLight(255);
  directionalLight(255, 255, 255, 1, 0, 1);

  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  fill(255);
  translate(-50, -50);
  beginShape();
  vertex(0, 0, 0, 1, 0);
  vertex(100, 0, 0, 0, 0);
  vertex(100, 100, 0, 1, 1);
  vertex(0, 100, 0, 0, 1);
  texture(img);
  endShape(CLOSE);

  angle += 0.01;
}
