//https://www.youtube.com/watch?v=3tTZlTq4Cxs

let angle = 0;
let img;
let graphics;
let love;

function setup() {
  createCanvas(400, 300, WEBGL);
  graphics = createGraphics(200, 200);
  graphics.background(255);

  love = createGraphics(300, 300);
  // love.background(255, 0, 0);
  love.fill(255);
  love.textAlign(CENTER);
  love.textSize(100);
  love.text("love", 150, 150);
}

function preload() {
  img = loadImage("mexico.jpg");
}

function draw() {
  background(0);
  graphics.fill(255, 0, 255);
  graphics.ellipse(mouseX, mouseY, 20);
  ambientLight(100);
  directionalLight(255, 255, 255, 1, 0, 1);

  rectMode(CENTER);
  for (let x = -200; x < 200; x += 50) {
    push();
    translate(x, 0, 200);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.7);
    noStroke();
    texture(love);
    box(100);
    pop();
    angle += 0.001;
  }

  translate(0, 100);
  rotateX(HALF_PI);
  fill(0);
}
