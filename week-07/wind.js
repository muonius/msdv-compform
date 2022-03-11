class Mover {

    constructor(x, y) {
        this.pos = new Point(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        this.acc = createVector(0, 0);
        this.r = 16;
        // this.acc = p5.Vector.random2D();
        // this.acc.setMag(0.01);
    }


    applyForce(force) {
        // this.acc = force; wrong
        this.acc.add(force)
    }

    edges() {
        if (this.pos.y > height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }
        else if (this.pos.y <= 0 + this.r) {
            this.pos.y = 0 + this.r;
            this.vel.y *= -1;
        }
        if (this.pos.x > width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        }

        else if (this.pos.x <= 0 + this.r) {
            this.pos.x = 0 + this.r;
            this.vel.x *= -1;
        }
    }
    update() {

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
        //clear acc 
    }


    show() {

        stroke(0);
        strokeWeight(2);
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }

}


var mover;

function setup() {
    createCanvas(400, 400);
    mover = new Mover(200, 200);


}

function draw() {
    background(0);

    var gravity = createVector(0, 0.1);
    mover.applyForce(gravity)


    if (mouseIsPressed) {

        var wind = createVector(0.1, 0);
        mover.applyForce(wind)
    }

    mover.edges()
    mover.update()
    mover.show()
}