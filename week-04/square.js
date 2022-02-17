let count = 30;
let inc = 10;
let angle = 0;

function setup() {
    createCanvas(500, 500)
    rectMode(CENTER)
}

function draw() {

    background(255)
    for (let i = 0; i < count; i++) {

        angle = radians(1 * i)
        let size = (count - i) * inc
        push();
        fill(i % 2 === 0 ? 0 : 255)
        noStroke();
        translate(width / 2, height / 2)
        rotate(angle);
        rect(0, 0, size, size);
        pop();

    }

    angle += radians(1)

}
