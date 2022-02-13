let pixelMap = [];
let noiseScale = 0.001;
let treasurePath = [];
let noiseMax = 1;

const palette = [{ "name": "Indigo Dye", "hex": "053c5e", "rgb": [5, 60, 94], "cmyk": [95, 36, 0, 63], "hsb": [203, 95, 37], "hsl": [203, 90, 19], "lab": [24, -3, -25] }, { "name": "Prussian Blue", "hex": "1d3958", "rgb": [29, 57, 88], "cmyk": [67, 35, 0, 65], "hsb": [212, 67, 35], "hsl": [212, 50, 23], "lab": [23, 0, -22] }, { "name": "Space Cadet", "hex": "353652", "rgb": [53, 54, 82], "cmyk": [35, 34, 0, 68], "hsb": [238, 35, 32], "hsl": [238, 21, 26], "lab": [24, 7, -17] }, { "name": "English Violet", "hex": "4c334d", "rgb": [76, 51, 77], "cmyk": [1, 34, 0, 70], "hsb": [298, 34, 30], "hsl": [298, 20, 25], "lab": [25, 16, -11] }, { "name": "Old Mauve", "hex": "643047", "rgb": [100, 48, 71], "cmyk": [0, 52, 29, 61], "hsb": [333, 52, 39], "hsl": [333, 35, 29], "lab": [28, 26, -3] }, { "name": "Catawba", "hex": "7c2e41", "rgb": [124, 46, 65], "cmyk": [0, 63, 48, 51], "hsb": [345, 63, 49], "hsl": [345, 46, 33], "lab": [31, 36, 6] }, { "name": "Red Violet Color Wheel", "hex": "942b3b", "rgb": [148, 43, 59], "cmyk": [0, 71, 60, 42], "hsb": [351, 71, 58], "hsl": [351, 55, 37], "lab": [35, 45, 16] }, { "name": "Upsdell Red", "hex": "ab2836", "rgb": [171, 40, 54], "cmyk": [0, 77, 68, 33], "hsb": [354, 77, 67], "hsl": [354, 62, 41], "lab": [39, 53, 25] }, { "name": "Fire Engine Red", "hex": "c32530", "rgb": [195, 37, 48], "cmyk": [0, 81, 75, 24], "hsb": [356, 81, 76], "hsl": [356, 68, 45], "lab": [43, 61, 35] }, { "name": "Cadmium Red", "hex": "db222a", "rgb": [219, 34, 42], "cmyk": [0, 84, 81, 14], "hsb": [357, 84, 86], "hsl": [357, 73, 50], "lab": [47, 68, 44] }]
const colBlue1 = palette[0]["rgb"];
const colBlue2 = palette[1]["rgb"];
const colPurple1 = palette[2]["rgb"];
const colPurple2 = palette[3]["rgb"];
const colPurple3 = palette[4]["rgb"];
const colRed1 = palette[5]["rgb"];
const colRed2 = palette[6]["rgb"];
const colRed3 = palette[7]["rgb"];
const colRed4 = palette[8]["rgb"];
const colRed5 = palette[9]["rgb"];

function setup() {

    createCanvas(600, 600)
    noStroke();
    // blendMode(LIGHTEST);
    background(0);
    //major effect acheived through noise Detail change
    noiseDetail(5, 0.9);
    makeMap();
    drawMap();


}

function draw() {
    noFill();

    stroke(255);
    // stroke(colPurple3);
    strokeWeight(1);
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {
        let xoff = map(cos(a), -1, 1, 0, noiseMax);
        let yoff = map(sin(a), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff, noiseScale), 0, 1, 0, 400)
        let x = width - r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
        treasurePath.push([x, y]);
        //Draw triangle turned grid
        triangle(x, y, x - 1, y - 2, x - 2, y - 3)


    }
    endShape(CLOSE);
    // console.log(floor(treasurePath[50][0]))

    //Draw text for Map
    stroke(255);
    strokeWeight(2);
    ellipse(floor(treasurePath[20][0]), floor(treasurePath[20][1]), 20, 15)
    noStroke();
    fill(255);
    textSize(10);

    //Draw text for Map
    textFont('Futura');
    text('Time for Chocolate', floor(treasurePath[4][0]) - 60, floor(treasurePath[4][1]) + 5);
    text('Time for Chocolate', floor(treasurePath[30][0]) - 60, floor(treasurePath[30][1]) + 5);
    text('Time for Chocolate', floor(treasurePath[42][0]) - 60, floor(treasurePath[42][1]) + 5);
    text('Time for Chocolate', floor(treasurePath[60][0]) - 60, floor(treasurePath[60][1]) + 5);

    fill(255);
    textSize(18);
    textFont('Futura');
    text('Time for Chocolate Ice Cream', floor(treasurePath[20][0]) + 20, floor(treasurePath[20][1]) + 5);
    noLoop();
}


function makeMap() {
    for (let i = 0; i < width; i++) {
        pixelMap[i] = [];
        for (let j = 0; j < height; j++) {
            pixelMap[i][j] = pickColor(i, j);
        }
    }

}

function pickColor(i, j) {


    let height = noise((i) * noiseScale, (j) * noiseScale);
    let colorT = "#facade";//set up a color and initialize to a pink color if things go wrong
    let colorR = floor(map(noise(height, 1), 0, 1, 0, 155))
    let colorG = floor(map(noise(height, 3), 0.2, 1, 50, 150))
    let colorB = floor(map(noise(height, 4), 0, 1, 0, 255))

    // console.log(height)

    colorT = [colorR, colorG, colorB]


    // if (height < 0.9 && height > 0.85) {
    //     colorT = lerpColor(color(colPurple1), color(colRed2), 0.3)
    // }

    // console.log([colorR, colorG, colorB])
    //returns a color ojbect
    return color(colorT);

}


function drawMap() {

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            set(i, j, pixelMap[i][j])
        }
    }
    updatePixels();

    // console.log(pixelMap[0][0])
    //prints 0:0, 1: 141, 2:196, 3:255
    //
}







