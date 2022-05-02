let angle = 0;
let img;
let cam;
let z;
function setup() {
  createCanvas(400, 300, WEBGL);
}

function preload() {
  img = loadImage("mexico.jpg");
}

function draw() {
  //camera zooming in and out
  // translate(0, 0, mouseX);

  //default perfective
  let fov = map(mouseX, 0, width, 0, PI / 2);
  let cameraZ = height / 2 / tan(PI / 3 / 2);
  //clipping plane
  perspective(fov, width / height, cameraZ / 10, cameraZ * 10);

  ambientLight(255);
  background(175);
  rectMode(CENTER);

  push();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle * 0.3);
  ambientMaterial(255);
  noStroke();
  texture(img);
  box(100);
  pop();
  translate(0, 100);
  rotateX(HALF_PI);

  ambientMaterial(255);
  plane(500, 500);

  angle += 0.01;
}
