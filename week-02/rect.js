// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

let incRect = 50;
let incRectX = 10;
function setup() {
    createCanvas(800, 800);
    background(255);
    strokeWeight(1.5);

    angleMode(DEGREES);

}

function draw() {
    let x = 0;
    let y = 0;

    drawRect(100, 200, 10);


    function drawRect(x, y, count) {
        for (let i = 0; i < count; i++) {
            push();
            rectMode(CENTER);
            fill(random(200), random(220), random(220));
            translate(x, y);
            rotate(315);
            translate(-50, -50);
            rect(random(x - 20, x + 20), random(y - 20, y + 30), random(10, 200), random(50, 100))
            pop();
            y += incRect;
            x += incRectX;
        }
    }

    noLoop();
}


