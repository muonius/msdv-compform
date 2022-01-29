
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
//[Flow Field] (https://www.youtube.com/watch?v=BjoM9oKOAKY&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=28)
//[Nature of Code] (https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM)
//1-8: Perlin noise 2D, 3D, simplex noise
//31-36: Particle systems

const inc = 0.05;
const scale = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField;

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.maxspeed = 4;
        this.prevPos = this.pos.copy();

        this.update = function () {
            this.vel.add(this.acc);
            this.vel.limit(this.maxspeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
        this.applyForce = function (force) {
            this.acc.add(force)
        }

        this.show = function () {
            stroke(0, 5);
            strokeWeight(1);
            // stroke(random(15), random(255), random(105), 5);
            // point(this.pos.x, this.pos.y);
            line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
            this.updatePrev();
        }

        this.updatePrev = function () {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
        }
        this.edges = function () {
            if (this.pos.x > width) {
                this.pos.x = 0;
                this.updatePrev();
            }
            if (this.pos.x < 0) {
                this.pos.x = width;
                this.updatePrev();
            }
            if (this.pos.y > height) {
                this.pos.y = 0;
                this.updatePrev();
            }
            if (this.pos.y < 0) {
                this.pos.y = height;
                this.updatePrev();
            }
        }

        this.follow = function (vectors) {
            let x = floor(this.pos.x / scale);
            let y = floor(this.pos.y / scale);
            let index = x + y * cols;
            let force = vectors[index];
            this.applyForce(force);
        }


    }


}

function setup() {
    createCanvas(500, 500);
    background(255);

    cols = floor(width / scale);
    rows = floor(height / scale);

    flowField = new Array(cols * rows);

    for (let i = 0; i < 10000; i++) {
        particles[i] = new Particle();
    }


}

function draw() {


    let yoff = 0;

    for (let y = 0; y < rows; y++) {
        let xoff = 0;

        for (let x = 0; x < cols; x++) {
            let r = noise(xoff, yoff) * 255;

            let index = (x + y * cols);
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 2;

            //straight right pointing lines
            // let v = p5.Vector.fromAngle(0);

            //straight downward pointing lines
            // let v = p5.Vector.fromAngle(PI / 2);

            //straight 60 deg pointing lines
            // let v = p5.Vector.fromAngle(PI / 6);

            //random TWO PI angle
            // let v = p5.Vector.fromAngle(random(TWO_PI));

            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowField[index] = v;
            xoff += inc;
            stroke(0, 50);

            //hide the vectors to speed up the particle rendering
            // push();
            // translate(x * scale, y * scale);
            // rotate(v.heading());
            // line(0, 0, scale, 0);
            // pop();

            // rect(x * scale, y * scale, scale, scale)
        }
        yoff += inc;
        zoff += 0.0001;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].edges();
        particles[i].update();
        particles[i].show();
        particles[i].follow(flowField);
    }

    // noLoop();
}

