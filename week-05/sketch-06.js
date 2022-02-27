
let heads = [];
let deckPos = 0;
let size = 0.1
let spacing = 5;
let space = 20;

function preload() {
    for (i = 0; i < 10; i++) {
        heads[i] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-05/assets/doraemon-' + i + '.png');
    }
    console.log(heads)
}

//Declare imageDeck function
function imageDeck() {
    deckPos++;
    if (deckPos == heads.length) {
        heads = shuffle(heads);
        deckPos = 0;
    }
}

function setup() {
    createCanvas(400, 400);
    noiseDetail(2, 0.5)
}

function draw() {
    background('#19abff');

    noStroke();
    ellipseMode(CENTER);

    let noiseFrequency = 0.01;

    for (let j = 0; j < 30; j++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?
        let x = noise(j * noiseFrequency + spacing, 0, size) * width;
        let y = noise(j * noiseFrequency + spacing, 10, size) * height;

        let m = heads.length;

        push();
        image(heads[j % m], x, y, heads[j % m].width * size, heads[j % m].height * size);
        pop();

        spacing += 0.5;
        size += 0.005;
        imageDeck();
    }

    noLoop();
}