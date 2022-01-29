
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(255, 255, 255);
    noLoop();
}

function draw() {
    console.log("draw, grass");
    background(40, 40, 40);


    rect(0, height * 0.5, width, height * 0.5);

    const paletteLight = {
        colorR: random(5, 50),
        colorG: random(150, 255),
        colorB: random(0, 50)
    }
    const paletteDark = {
        colorR: random(5, 20),
        colorG: random(50, 100),
        colorB: random(0, 20)
    }

    const paletteHlight = {
        colorR: random(95, 150),
        colorG: random(200, 255),
        colorB: random(50, 100)
    }

    drawGrass(0, height * 0.5 - 100, width, 100);
    stroke(paletteDark.colorR, paletteDark.colorG, paletteDark.colorB);
    // stroke(220, 220, 220);
    stroke(paletteLight.colorR, paletteLight.colorG, paletteLight.colorB);
    drawGrass(0, height * 0.5 - 100, width, 100);
    stroke(paletteHlight.colorR, paletteHlight.colorG, paletteHlight.colorB);
    drawGrass(0, height * 0.5 - 100, width, 100);
    // drawGrass(0, height * 0.5 - 100, width, 100);
    // drawGrass(0, height * 0.5 - 100, width, 100);
}

function drawGrass(left, top, width, height) {
    // loop from the left to the right, one pixel per step
    for (let x = left; x < left + width; x++) {
        // x and y are the base of the blade of grass
        let y = top + height;

        // height of the grass
        // pick lowest of three "rolls" to bias strongly towards short blades
        // with occasional long ones
        let bladeHeight = min(
            random(0, height),
            random(0, height * 5),
            random(0, height * 10)
        );
        bladeHeight = random(0, height);

        // horizontal offset of top of blade relative to base
        // average two "rolls" to bias towards middle
        let bladeLean = (random(-1, 1) + random(-1, 1)) * 0.2;

        // scale lean by height so that shorter blades aren't more leany
        bladeLean = bladeLean * bladeHeight;

        // scaling factor to to taste
        bladeLean = bladeLean * 0.95;

        // draw the grass
        line(x, y, x + bladeLean, y - bladeHeight - 100);
    }
}
