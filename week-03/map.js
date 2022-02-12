let map;
let noiseScale = 1 / 150;
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#eecda3";
let grass = "#7ec850";
let stone = "#676767";
let snow = "#fffafa";
let black = "#000000";


function setup() {

    createCanvas(600, 600)
    noStroke();
    background(0);
    noiseDetail(5, 0.5);
    makeMap();
    drawMap();

}


function makeMap() {
    map = [];
    for (let i = 0; i < width; i++) {
        map[i] = [];
        for (let j = 0; j < height; j++) {
            // map[i][j] = color(noise(i * noiseScale, j * noiseScale) * 255) this is the 2D noise
            map[i][j] = pickColor(i, j);
        }
    }

}


function pickColor(i, j) {

    let height = noise((i) * noiseScale, (j) * noiseScale);
    let colorT = "#facade";//set up a color and initialize to a pink color if things go wrong

    if (height < 0.2) {
        colorT = ocean;
    }

    else if (height < 0.24 && height > 0.22) {
        colorT = black;
    }

    else if (height < 0.28) {
        colorT = lerpColor(color(black), color(ocean), 0.5)
    }
    else if (height < 0.3) {
        colorT = shore;

    }
    else if (height < 0.4) {
        colorT = sand;
    }
    else if (height < 0.5) {
        colorT = grass;
    }

    else if (height < 0.6) {
        colorT = stone;
    }

    else colorT = snow;

    //returns a color ojbect
    return color(colorT);

}

function drawMap() {

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            set(i, j, map[i][j])
        }
    }
    updatePixels();

    //console.log(map[0][0])
    //prints 0:0, 1: 141, 2:196, 3:255
    //
}

