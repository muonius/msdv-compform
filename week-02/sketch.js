// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

const pane = new Tweakpane.Pane();
const colors = {
    'pastel': ["#c3dbb6", "#edffd9", "#ffe19c", "#ff784f", "#db9d47", "#3a3042"],
    'constructivism': ['#8d99ae', '#CCC5B9', '#403D39', '#252422', '#5D2109']
}
let posColor = 0;
let x = 0;
let y = 0;
let inc = 40;
let pctScale = 1;


function setup() {
    createCanvas(600, 600);
    noLoop();
    colorMode(HSB, 100);
    background('#fffcf2');
    // colors = shuffle(colors);
}

function colorFromDeck(theme) {
    let v = colors[theme][posColor];
    posColor++;
    if (posColor == colors[theme].length) {
        colors[theme] = shuffle(colors[theme]);
        posColor = 0;
    }
    return v;
}


function drawLine(count, pctScale) {
    for (let i = 0; i < count; i++) {
        push();
        stroke(colorFromDeck('constructivism'));
        strokeWeight(random(0, 2 * pctScale))
        line(random(20, (width / 2) * pctScale), random(40 * pctScale, (height / 6) * pctScale), random(width * pctScale * 0.7, width * pctScale * 0.9), random(height * pctScale * 0.6, height * pctScale * 0.9));
        pop();
    }
}
function draw() {

    drawLine(2, 1);
    drawRect(x, y, 7);

    noStroke();
    fill(colorFromDeck('constructivism'))
    triangle(random(width / 2, width), random(height / 2, height), random(width / 2, height), random(height / 2, 600), random(width / 2, 600), random(height / 2, 600));

    noFill();
    stroke(colorFromDeck('pastel'));
    strokeWeight(3)
    circle(random(60, 300), random(60, 300), random(60, 150));

}



function drawRect(x, y, count) {
    for (let i = 0; i < count; i++) {
        push();
        noStroke();
        fill(colorFromDeck('pastel'))
        rectMode(CENTER);
        rotate(PI / random(-3, -5));
        translate(-50, y + 40);
        rect(random(x - 20, x + 20), random(y - 20, y + 20), random(20, width / 2), random(10, height / 5));
        x += inc;
        y += inc;
        pop();
    }
}