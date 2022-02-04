//require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let elements = [];
let speed;
let count = 500;
let rectInc = 50;
let weight = 4;
let posColor = 0;
let colors = ["#ffc300", "#ba181b", "#03045e", "#ffffff"]
let lineX = 30;


function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noLoop();

  function Element() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;

    this.show = function () {
      noStroke();
      fill('#8d99ae');
      let sx = map(this.x / this.z, 0, 1, 0, width);
      let sy = map(this.y / this.z, 0, 1, 0, height);
      let r = map(this.z, 0, width, 150, 5);
      let px = map(this.x / this.pz, 0, 1, 0, width);
      let py = map(this.y / this.pz, 0, 1, 0, height);
      this.pz = this.z;
      rectMode(CENTER);
      stroke(0);
      strokeWeight(weight);
      fill(colorShuffle());
      rect(sx - rectInc, sy - rectInc, r, r);
      noStroke;
      strokeWeight(weight);
      rect(sx - rectInc * 2, sy - rectInc * 3, 1, random(0, height / 2));
      rect(sx - rectInc * 2, sy - rectInc * 3, random(0, height / 2), 1);
    }

    this.update = function () {
      this.z -= speed;

      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    }

  }

  for (let i = 0; i < count; i++) {

    elements[i] = new Element();
    lineX++;
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  speed = map(mouseX, 0, width, 2, 5);
  for (element of elements) {
    element.show();
    element.update();
  }
}


function colorShuffle() {
  let v = colors[posColor];
  posColor++;
  if (posColor == colors.length) {
    colors = shuffle(colors);
    posColor = 0;
  }
  return v;
}