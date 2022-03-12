

function setup() {
    createCanvas(500, 500)

}

function draw() {
    background(51)

    translate(width / 2, height / 2)
    noFill()
    beginShape()

    for (let a = 0; a < TWO_PI; a += radians(1)) {

        let r = 200 * cos(7 * a);
        let x = r * cos(a + a * 0.02)
        let y = r * sin(a + a * 0.01)

        stroke(255)
        strokeWeight(4)
        vertex(x, y)
    }

    endShape()

}