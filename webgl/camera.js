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

  //default z value height / 2 / tan(PI / 6)
  z = height / 2 / tan(PI / 6);

  //shaking camera
  // let camX = random(-5, 5);
  // let camY = random(-5, 5);
  // let camZ = random(-5, 5);
  // camera(camX, 0, camZ + z, camX, camY, camZ, 0, 1, 0);

  //mouse rotating
  //let camX = map(mouseX, 0, width, -200, 0);
  //camera(camX, 0, z, 0, 0, 0, 0, 1, 0);

  //mouse rotating
  //let camX = map(mouseX, 0, width, -200, 0);
  //camera(camX, 0, z, 0, 0, 0, 0, 1, 0);

  //panning
  // let camX = map(mouseX, 0, width, -200, 200);
  // camera(camX, 0, z, camX, 0, 0, 0, 1, 0);
  // camera(0, 0, z, 0, 0, 0, 1, 0, 0);

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
