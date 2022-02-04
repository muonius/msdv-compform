//require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
//Google trend data extracted on Feb 2, 2022

const bbl = [4, 4, 10, 5, 3, 1, 2, 3, 6, 6, 9, 2, 3, 8, 9, 2, 8, 9, 2, 8, 6, 5, 6, 5, 5, 5, 6, 8, 4, 4, 3, 5, 9, 5, 4, 5, 7, 6, 6, 6, 5, 3, 7, 5, 8, 5, 6, 6, 5, 5, 6, 5, 6, 4, 8, 3, 8, 6, 4, 6, 4, 5, 6, 7, 6, 5, 6, 7, 5, 6, 6, 7, 7, 9, 6, 7, 7, 6, 7, 6, 7, 7, 6, 6, 7, 6, 6, 7, 7, 6, 6, 6, 6, 6, 7, 8, 7, 7, 7, 6, 9, 5, 8, 6, 8, 7, 6, 6, 9, 7, 7, 9, 7, 7, 8, 7, 6, 9, 8, 8, 8, 10, 9, 9, 7, 7, 8, 9, 9, 9, 8, 9, 12, 11, 11, 12, 10, 11, 10, 10, 11, 11, 10, 11, 13, 10, 13, 13, 12, 12, 11, 12, 12, 11, 10, 12, 12, 13, 15, 13, 14, 13, 13, 13, 11, 13, 13, 11, 16, 17, 17, 16, 16, 17, 16, 17, 14, 15, 15, 16, 20, 20, 18, 17, 22, 19, 21, 18, 18, 18, 19, 20, 29, 24, 24, 22, 29, 33, 34, 40, 39, 42, 39, 55, 52, 54, 59, 59, 72, 98, 100, 82, 74, 68, 82, 89, 95, 85]
const paris = [80, 71, 41, 37, 33, 47, 41, 40, 36, 48, 35, 45, 39, 100, 47, 47, 63, 48, 44, 31, 25, 27, 28, 28, 26, 27, 21, 22, 25, 34, 32, 34, 33, 24, 27, 44, 34, 29, 20, 18, 38, 84, 31, 22, 18, 18, 18, 19, 16, 17, 14, 13, 12, 14, 13, 27, 12, 15, 14, 14, 10, 9, 9, 9, 10, 13, 11, 9, 6, 6, 7, 7, 7, 6, 6, 7, 7, 7, 9, 11, 10, 6, 6, 7, 5, 6, 5, 5, 5, 10, 8, 5, 5, 4, 5, 5, 5, 4, 4, 4, 4, 5, 4, 4, 5, 3, 4, 4, 4, 3, 3, 3, 5, 5, 4, 3, 3, 5, 3, 5, 4, 4, 3, 3, 3, 3, 5, 6, 5, 3, 3, 3, 3, 4, 3, 3, 3, 4, 4, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 6, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 4, 2, 3, 8, 2, 3, 4];
const years = ["'04", "'05", "'06", "'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15", "'16", "'17", "'18", "'19", "'20", "'21", "'22"]
let chartLeft = 100;
let chartRight = 700;
let chartTop = 100;
let chartBottom = 700;

function setup() {
    createCanvas(800, 800);
    background(224);
    noLoop();
    rectMode(CENTER);
}


function draw() {
    push();
    translate(width / 2, height / 2);
    fill(140, 22, 22);
    noStroke();
    filter(BLUR, 1);
    rect(0, 0, 600, 600);
    filter(BLUR, 1);
    fill(170, 22, 22, 50);
    rect(2, 2, 601, 601);
    fill(130, 20, 22, 50);
    rect(-3, -3, 598, 600);
    filter(BLUR, 2);
    pop();



    //draw Paris line
    push();
    noStroke();
    fill(255, 251, 0, 100);
    beginShape();
    vertex(chartLeft, chartBottom);
    for (let i = 0; i < bbl.length; i++) {

        let x = map(i, 0, bbl.length - 1, chartLeft, chartRight)
        let yP = map(paris[i], 0, 100, chartBottom - 97, chartBottom - 300)
        // let yB = map(bbl[i], 0, 100, chartBottom - 97, chartBottom - 300)
        vertex(x, yP)
    }
    vertex(chartRight, chartBottom);
    endShape();
    pop();

    //draw BBL line
    push();
    noStroke();
    fill(37, 5, 247, 100);
    beginShape();
    vertex(chartLeft, chartBottom);
    for (let i = 0; i < bbl.length; i++) {

        let x = map(i, 0, bbl.length - 1, chartLeft, chartRight)
        // let yP = map(paris[i], 0, 100, chartBottom - 97, chartBottom - 300)
        let yB = map(bbl[i], 0, 100, chartBottom - 97, chartBottom - 300)
        vertex(x, yB)
    }
    vertex(chartRight, chartBottom);
    endShape();
    pop();


    // draw year
    fill(170, 22, 22);
    noStroke();
    textAlign(CENTER);
    for (let i = 0; i < years.length; i++) {
        let x = map(i, 0, years.length - 1, chartLeft, chartRight);
        text(years[i], x, chartBottom + 30);
    }

    fill(255, 174, 0);
    text('Paris Hilton', 50, 600);
    fill(102, 30, 227);
    text('BBL', 750, 600);

}