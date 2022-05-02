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

  //clipping plane is relative to the camera
  ortho(-200, 200, 200, -200, 0.01, 1000);
  pointLight(255, 255, 255, 0, -200, 200);
  background(175);
  rectMode(CENTER);

  for (let x = -200; x < 200; x += 20) {
    push();
    // translate(x, 0, 0);
    translate(x, 0, x * 5 - 200);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle * 0.3);
    ambientMaterial(255);
    noStroke();
    // texture(img);
    box(40);
    pop();
  }

  // rotateX(HALF_PI);
  // ambientMaterial(255)
  // plane(500, 500);

  angle += 0.01;
}
