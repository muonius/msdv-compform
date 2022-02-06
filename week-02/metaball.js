//require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let particles = [];

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.maxspeed = 20;
        this.r = random(20, 50);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(random(5, 20));
    }


    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }


    show() {
        noFill();
        noStroke();
        // stroke(0);
        // strokeWeight(4);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}


function setup() {
    createCanvas(600, 400);
    pixelDensity(1);
    // blendMode(MULTIPLY);
    // noLoop();
    for (let i = 0; i < 20; i++) {
        particles[i] = new Particle();
    }
}

function draw() {

    background(51);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let index = (x + y * width) * 4;
            let sum = 0;
            for (let p of particles) {
                let d = dist(x, y, p.pos.x, p.pos.y);
                sum += 50 * p.r / d;

                pixels[index + 0] = sum;
                pixels[index + 1] = 180;
                pixels[index + 2] = y;
                pixels[index + 3] = 200;

            }
        }

    }
    updatePixels();

    for (let p of particles) {
        p.edges();
        p.update();
        p.show();
    }
}