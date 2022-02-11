
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

//Concept Reference: [Perlin Noise Loop](https://www.youtube.com/watch?v=ZI1dmHv3MeM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=194)

let noiseMax = 2;
let phase = 0;
let zoff = 0;
let roff = 0;

function setup() {
    createCanvas(500, 500);
    noiseDetail(3, 0.6);
    noiseSeed(20);
}
function draw() {
    background(25);
    noStroke();



    translate(width / 2, height / 2);
    stroke(255);
    noFill();
    for (let i = 0; i < 800; i++) {
        beginShape();

        if (roff >= width) roff = 0
        for (let a = 0; a < TWO_PI; a += radians(1)) {
            strokeWeight(random(10) / 10);
            // strokeWeight((random(6) / 10, random(5) / 10, random(3, 12) / 10) / 3);
            //perlin noise +1 to keep all positive values
            // let xoff = cos(a) + 1;
            // let yoff = sin(a) + 1;

            // rotate(a);
            stroke(random(255))
            let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
            let yoff = map(sin(a - phase), -1, 1, 0, noiseMax);
            let r = map(noise(xoff, yoff, zoff), 0, 1, noise(xoff, 1) * 1, noise(yoff, 1) * 100) + roff
            let x = r * cos(a);
            let y = r * sin(a);
            vertex(x, y);


        }
        endShape(CLOSE);
        phase += 0.01;
        zoff += 0.01;
        roff += noise(zoff * 200, 5);
    }
    noLoop();
}

