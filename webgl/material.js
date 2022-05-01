let angle = 0;
function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  //ambient light has no direction, no shadow
  // ambientLight(255);

  //point light
  // pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 0);
  // pointLight(255, 0, 0, 20, 200, 0);

  //directional light
  //ambient light can interact with directional light
  ambientLight(0, 0, 255);
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0);
  v.normalize();
  directionalLight(255, 0, 0, v);
  // directionalLight(255, 255, 0, v);
  // directionalLight(255, 255, 0, 0, 0, 1);

  background(175);
  rectMode(CENTER);
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
  // sphere(100);
  torus(100, 30);
  angle += 0.01;
}
