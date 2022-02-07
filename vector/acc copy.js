/* global p5 */


class Mover {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(3));
        // this.acc = p5.Vector.random2D();
        // this.acc.setMag(0.01);
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        //calculate acc mouse vector substrct random vector
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(1)
        //apply acc to vector
        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);

    }

    show() {

        stroke(0);
        strokeWeight(2);
        fill(255, 100)
        ellipse(this.pos.x, this.pos.y, 22, 22)
    }

}


let mover;

function setup() {
    createCanvas(400, 400);
    mover = new Mover(200, 200);
    background(0);
}

function draw() {
    mover.update()
    mover.show()
}