// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let zoff = 0;
let noiseMax = 2;
let noiseLoop = [];

function setup() {
    createCanvas(600, 600);
    createNoiseLoop();
    console.log(noiseLoop[1])
}

function draw() {

    background(255);
    translate(300, -100)
    rotate(PI / 4);

    beginShape();


    for (let i = 0; i < noiseLoop.length; i++) {

        let angle = noiseLoop[i][2]
        // rotate(map(noise(angle * 5, 1), 0, 1, 0, TWO_PI / 6))

        let xoff = map(noiseLoop[i][0], 0, 1, 0, width)
        let yoff = map(noiseLoop[i][1], 0, 1, 0, height)


        x = map(noise(xoff * 0.01, 7), 0, 1, 0, width);
        y = map(noise(yoff * 0.01, 7), 0, 1, 0, height);



        fill(220, 50, 50)
        // strokeWeight(inc)
        // vertex(x, y)
        curveVertex(x, y)


    }
    endShape();


    // noLoop();

}


function createNoiseLoop() {

    for (let a = 0; a < TWO_PI; a += radians(1)) {
        let xoff = map(cos(a), -1, 1, 0, noiseMax);
        let yoff = map(sin(a), -1, 1, 0, noiseMax);
        let angle = noise(xoff, yoff, zoff) * TWO_PI;
        zoff += 0.01;

        noiseLoop.push([xoff, yoff, zoff, angle])

    }

}









