


function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    noStroke();

}


function draw() {

    background(211, 211, 211);

    let rows = height / 50;
    let cols = [];

    for (let y = width / 50; y <= width; y += width / 50) {
        cols.push(y)
    }

    cols.forEach((el, i) => {

        const palette = {
            colorR: random(5, 255),
            colorG: random(0, 255),
            colorB: random(50, 115)
        }

        for (row = -1; row < rows; row++) {
            drawThing(row * 50 + 25, cols[i]);
            fill(palette.colorR, palette.colorG, palette.colorB);
            console.log(i)
        }


    })


}

let brownianRadius = 25;

function drawThing(x, y) {
    let radius;
    radius = random(0, 50);
    ellipse(x, y, radius, radius);
}
