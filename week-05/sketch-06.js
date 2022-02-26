
let heads = [];
let deckPos = 0;
let size = 0.05

function preload() {
    for (i = 1; i <= 11; i++) {
        heads[i] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-05/assets/doraemon-' + i + '.png');
    }
}

//Declare imageDeck function
function imageDeck() {
    let v = heads[deckPos];
    deckPos++;
    if (deckPos == heads.length) {
        heads = shuffle(heads);
        deckPos = 0;
    }
    return v;
}

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background('#19abff');

    noStroke();
    ellipseMode(CENTER);

    let noiseFrequency = 20;

    for (let i = 1; i < 60; i++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        let x = noise(i * noiseFrequency, 0) * width;
        let y = noise(i * noiseFrequency, 100) * height;

        let m = i % heads.length + 1;

        push();
        image(heads[i % m], x, y, heads[i % m].width * size, heads[i % m].height * size);
        pop();

        size += 0.01;
        console.log(m)
    }

    noLoop();
}