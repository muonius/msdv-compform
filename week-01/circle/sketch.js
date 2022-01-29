
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    noStroke();

}

function draw() {

    //cornsilk
    background(255, 248, 220);

    let rows = height / 50;
    let cols = [];

    for (let y = width / 20; y <= width; y += width / 20) {
        cols.push(y)
    }

    cols.forEach((el, i) => {

        const palette = {
            colorR: random(5, 150),
            colorG: random(100, 200),
            colorB: random(50, 250)
        }

        for (row = -1; row < rows; row++) {
            fill(palette.colorR, palette.colorG, palette.colorB);
            drawThing(cols[i], row * 50 + 50);
            //if switch position of the above two lines, top left circle is not filled

            // console.log(i)
        }


    })


}

let brownianRadius = 25;

function drawThing(x, y) {
    let radius;
    radius = random(0, 50);
    ellipse(x, y, radius, radius);
}
