
let angle = 0;

function setup() {
    createCanvas(600, 600)
    background(255)
    drawSpiral(300, 300, 1, 3000)
}

function drawSpiral(x, y, radius, points) {
    translate(width / 2, height / 2);
    stroke(50);
    noFill();
    beginShape();
    for (let i = 1; i < points; i++) {
        angle = radians(i)
        x = cos(angle) * radius * angle;
        y = sin(angle) * radius * angle;
        vertex(x, y)
        console.log([x, y])
        radius += 0.002
    }
    endShape();
}





