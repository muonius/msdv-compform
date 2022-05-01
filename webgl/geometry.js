let angle = 0;
function setup() {
  createCanvas(400, 300, WEBGL);
}

// function draw() {
//   background(175);
//   rectMode(CENTER);
//   rotateX(angle);
//   rotateY(angle);
//   rotateZ(angle * 0.3);
//   rect(0, 0, 150, 100);
//   angle += 0.01;
// }

// function draw() {
//   background(175);
//   rectMode(CENTER);
//   rotateX(angle);
//   rotateY(angle);
//   rotateZ(angle * 0.3);
//   // translate(mouseX - width / 2, mouseY - height / 2);
//   //translating on z-axis
//   translate(0, 0, mouseX);
//   box(100);
//   angle += 0.01;
// }

function draw() {
  background(175);
  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle * 0.3);
  // translate(mouseX - width / 2, mouseY - height / 2);
  //translating on z-axis
  fill(255);
  translate(0, 0, mouseX);
  torus(100, 10);
  angle += 0.01;
}
