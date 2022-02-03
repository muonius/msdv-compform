//scalar
//magnitude distance between two points

//Physics Engines 

//vector
//magnitutde
//has direction
//velocity
//acceleration that changes velocity
//force = mass * acceleration
class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        // this.vel = createVector(1, 0);
        // this.vel = createVector(1, -1);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        // -1 is because p5 canvas grid is upside down
    }

    update() {
        //JS doesnt know how to add vector the following way
        // this.pos = this.pos + this.vel;
        this.pos.add(this.vel);

        // this.pos.x = this.pos.x + this.vel.x;
        // this.pos.y = this.pos.y + this.vel.y;
    }

    show() {
        stroke(255);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, 32);

    }
}


let walker;

function setup() {

    createCanvas(400, 400);
    walker = new Walker(200, 200)


}

function draw() {
    background(0)
    walker.update()
    walker.show()
}