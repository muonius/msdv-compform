
let heads = [];
let deckPos = 0;
let size = 0.05

function preload() {
    for (i = 0; i < 10; i++) {
        heads[i] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-05/assets/doraemon-' + i + '.png');
    }
    console.log(heads)
}

//Declare imageDeck function
// function imageDeck() {
//     let v = heads[deckPos];
//     deckPos++;
//     if (deckPos == heads.length) {
//         heads = shuffle(heads);
//         deckPos = 0;
//     }
//     return v;
// }

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background('#19abff');

    noStroke();
    ellipseMode(CENTER);

    let noiseFrequency = 0.5;

    for (let j = 0; j < 60; j++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        let x = noise(j * noiseFrequency, 0) * width;
        let y = noise(j * noiseFrequency, 10) * height;

        let m = j % heads.length + 1;

        push();
        image(heads[j % m], x, y, heads[j % m].width * size, heads[j % m].height * size);
        pop();

        size += 0.01;
        console.log(m)
    }

    // noLoop();
}