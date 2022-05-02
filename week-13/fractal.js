let angle = PI / 4;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  translate(width / 2, height);
  branch(100);
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
    branch(len * 0.57);
    pop();
  }
}
