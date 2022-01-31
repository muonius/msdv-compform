// require https://cdn.jsdelivr.net/npm/p5
let strokeColor = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    ellipseMode(CENTER)
    noFill()
    ellipse(width / 2, height / 2, 300, 300);
}

function draw() {

    if ((parseInt(frameCount / 700) % 2) === 0) {
        strokeColor += 0.5
    } else {
        strokeColor -= 0.5
    }
    stroke(strokeColor)
    ellipse(width / 2 + 150 * sin(frameCount), height / 2 + 150 * cos(frameCount), 300, 300);
}