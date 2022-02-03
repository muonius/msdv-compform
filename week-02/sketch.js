// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

//Declare all variables 
// const pane = new Tweakpane.Pane();
const colors = {
    'pastel': ["#c3dbb6", "#edffd9", "#ffe19c", "#ff784f", "#db9d47", "#3a3042", "#b8bedd"],
    'constructivism': ['#8d99ae', '#CCC5B9', '#403D39', '#252422', '#5D2109']
}
let posColor = 0;
let x = 0;
let y = 0;
let inc = 40;
let pctEdge = 0.9;
const seeds = [0, 3, 5, 8, 10, 12, 13, 17, 23, 25, 29, 32, 55, 82];


function setup() {

    createCanvas(600, 600);
    noLoop();
    angleMode(RADIANS);
    colorMode(HSB, 100);
    background('#fffcf2');

}


function draw() {

    randomSeed(random(seeds));

    drawLine(random(5, 9));
    drawRect(x, y, 7);
    noStroke();
    fill(colorFromDeck('constructivism'))
    triangle(random(width / 2, width * pctEdge), random(height / 2, height * pctEdge), random(width / 2, width * pctEdge), random(height / 2, height * pctEdge), random(width / 2, width * pctEdge), random(height / 2, height * pctEdge));
    noFill();
    stroke(colorFromDeck('pastel'));
    strokeWeight(3)
    circle(random(60, 300), random(60, 300), random(60, 150));

}


//Declare colorFromDeck function
function colorFromDeck(theme) {
    let v = colors[theme][posColor];
    posColor++;
    if (posColor == colors[theme].length) {
        colors[theme] = shuffle(colors[theme]);
        posColor = 0;
    }
    return v;
}

//Declare drawLine function

function drawLine(count) {

    for (let i = 0; i < count; i++) {
        //draw two main lines
        if (i <= 1) {
            push();
            stroke(colorFromDeck('constructivism'));
            strokeWeight(random(0, 3))
            strokeCap(SQUARE);
            line(random(20, width / 2), random(40, height / 6), random(width * 0.7, width * 0.9), random(height * 0.6, height * 0.9));
            rotate(PI / 2);
            scale(1, -1);
            translate(random(width / 2.5, width), random(height, height / 4))
            strokeWeight(random(4, 8))
            strokeCap(SQUARE);
            line(random(50, 60), random(10, 50), random(30), random(50));
            pop();

        }
        else {
            //draw additional sprinkled short lines without adding any more main lines
            push();
            translate(random(width / 2.5, width), random(height, height / 4))
            stroke(colorFromDeck('constructivism'));
            strokeWeight(random(2, 8))
            strokeCap(SQUARE);
            line(random(50, 60), random(40, 50), random(30, 40), random(50, 60));
            pop();
        }
    }

}


//Declare drawRect function
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