//require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let elements = [];
let speed;
let count = 500;

class Element {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        // this.pz = this.z;
    }

    this.show = function () {
    noStroke();
    fill(224);
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 12, 0);
    ellipse(sx, sy, r, r);
}

this.update = function () {
    this.z -= speed;
    if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        // this.pz = this.z;
    }
}
}


function setup() {
    createCanvas(500, 500);
}

for (let i = 0; i < count; i++) {
    elements[i] = new Element();
}

function draw() {
    background(255);
    translate(width / 2, height / 2);
    speed = map(mouseX, 0, width, 2, 20);
    for (let i = 0; i < elements.length; i++) {
        elements[i].show();
        elements[i].update();
    }
}