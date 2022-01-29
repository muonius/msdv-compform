
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
const inc = 0.01;
start = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    beginShape();
    let xoff = start;
    for (let x = 0; x < width; x++) {
        stroke(250)

        //1. sin wave generator
        // let y = height / 2 + sin(xoff) * height / 2;

        //2. basic sin wave with randomnese
        // let y = noise(xoff) * 200 + height / 2 + sin(xoff) * height / 2;

        //3. custom fine tuned sin wave with randomese
        //good for fine tuning type
        // let n = map(noise(xoff), 0, 1, -50, 50)
        // let s = map(sin(xoff), -1, 1, 0, height);
        // let y = s + n;


        //4. let noice be primary, sin wave secondary
        let n = map(noise(xoff), 0, 1, 0, height)
        let s = map(sin(xoff), -1, 1, -50, 50);
        let y = s + n;

        //Default - let y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
        // start += inc;

    }
    endShape();

    // xoff keeps changing position;   
    start += inc;
    noLoop();

}
