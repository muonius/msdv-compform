let angle = 0;
let img;
let cam;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function preload() {
  img = loadImage("mexico.jpg");
  cam = createCapture(VIDEO);
  cam.size(300, 300);
}

function draw() {
  //ambient light has no direction, no shadow
  // ambientLight(255);

  //point light
  // pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 0);
  // pointLight(255, 0, 0, 20, 200, 0);

  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.div(1);
  directionalLight(255, 255, 255, v);
  // directionalLight(255, 255, 0, v);
  // directionalLight(255, 255, 0, 0, 0, 1);

  background(175);
  rectMode(CENTER);
  push();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle * 0.3);
  // translate(mouseX - width / 2, mouseY - height / 2);
  //translating on z-axis

  // fill(200, 0, 255);
  //normalMaterial is using normal vector to assign RGB value
  // normalMaterial();

  ambientMaterial(255);
  //ambientMaterial reflects light

  noStroke();
  // translate(0, 0, mouseX);

  texture(cam);
  box(100);
  pop();
  translate(0, 100);
  rotateX(HALF_PI);

  ambientMaterial(255);
  plane(500, 500);

  angle += 0.01;
}
