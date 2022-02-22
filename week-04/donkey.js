
/* exported setup draw */
/*ltner */

let donkeyX = 100;
let donkeyY = 100;
const bale1X = 256;
const bale1Y = 100;
const bale2X = 100;
const bale2Y = 512 - 100;
const bale3X = 512 - 100;
const bale3Y = 512 - 100;


const bales = [
    { x: 256, y: 100 },
    { x: 100, y: 512 - 100 },
    { x: 512 - 100, y: 512 - 100 }
]
function setup() {
    createCanvas(512, 512)

    background(40)

}

function draw() {

    for (let i = 0; i < 100; i++) {

        const r = random();

        if (r < 0.333) {
            donkeyX = lerp(donkeyX, bale1X, 0.5)
            donkeyY = lerp(donkeyY, bale1Y, 0.5)
        } else if (r < 0.666) {
            donkeyX = lerp(donkeyX, bale2X, 0.5)
            donkeyY = lerp(donkeyY, bale2Y, 0.5)
        } else {
            donkeyX = lerp(donkeyX, bale3X, 0.5)
            donkeyY = lerp(donkeyY, bale3Y, 0.5)
        }


        noStroke();
        fill('red')
        ellipse(donkeyX, donkeyY, 5, 5)


        fill('white')
        ellipse(bale1X, bale1Y, 10, 10)

        ellipse(bale2X, bale2Y, 10, 10)
        ellipse(bale3X, bale3Y, 10, 10)
        // noLoop();

    }

}