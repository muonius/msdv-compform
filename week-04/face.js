// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
// require https://cdn.jsdelivr.net/npm/tweakpane@1.5.9/dist/tweakpane.min.js

let heads = [];
let extras = [];
const pane = new Tweakpane();
const params = {
    head: 0,
    brow: 0,
    extra: 0,
    cheekColor: "#FF82A4",
    lip: 0,
    lipColor: "#990F02"
}

pane.addInput(params, "head", { min: 0, max: 4, step: 1 });
pane.addInput(params, "brow", { min: 1, max: 2, step: 0.3 });
pane.addInput(params, "extra", { min: 0, max: 2, step: 1 });
pane.addInput(params, "cheekColor");
pane.addInput(params, "lip", { min: 1, max: 3, step: 0.5 });
pane.addInput(params, "lipColor");

function preload() {
    heads[0] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Bezos.jpg');
    heads[1] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Biden.jpg');
    heads[2] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Xi.jpg');
    heads[3] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Kim.jpg');
    heads[4] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Putin.jpg');
    // heads[5] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Trump.jpg');
}

function setup() {
    canvas = createCanvas(400, 400);
    imageMode(CENTER);
}

function draw() {

    //create heads
    push();
    translate(width / 2, height / 2)
    image(heads[params.head], 0, 0, width, heads[params.head].height * width / heads[params.head].width);
    pop();

    //create function object
    const extras = [];
    extras[0] = drawStar(0, 0);
    extras[1] = drawTears();
    extras[2] = drawStar(50, -10);
    // extras[1] = drawStar();

    drawLips();
    drawBrow(-20, 1, -1 * params.brow);
    drawBrow(45, -1, -8 * params.brow);
    drawCheek(180, 200, 20, 10)
    //invoke closure! First time using closure in personal project
    extras[params.extra]();


}

function drawLips() {
    push();
    translate(width / 2 + 10, height / 2 + 50)

    stroke(params.lipColor);
    strokeWeight(1)
    // fill('#FF0000');
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {
        let r = 1.5
        let x1 = (12 / 5 * params.lip + r * 4) * pow(sin(a), 3) * r
        let x2 = (16 / 5 * params.lip + r * 4) * pow(sin(a), 3) * r
        let y1 = (-5 * cos(a * 2) * cos(a * 2) * r) + params.lip - r * 2
        let y2 = (5 * cos(a * 2) * cos(a * 2) * r) - r * 13 + params.lip

        vertex(x1, y1)
        vertex(x2, y2)


    }
    endShape(CLOSE);
    pop();
}


function drawBrow(xoff, zoff, angle) {

    push();
    translate(width / 2, height / 2)
    stroke('black');
    strokeWeight(3)
    rotate(radians(angle * params.brow))
    fill(0)
    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(1)) {

        let r = 5 * params.brow
        let x1 = 2 * params.brow * sin(a) * r + xoff
        let y1 = zoff * 3 * params.brow * cos(a) * (cos(a) + params.brow / 2) - 25

        //diamond 2
        vertex(x1, y1)

    }
    endShape(CLOSE);

    pop();
}

function drawTears() {

    return function () {
        push();
        translate(width / 2, height / 2)
        stroke('Blue');
        strokeWeight(1)
        noFill();
        beginShape();
        for (let a = 0; a < TWO_PI; a += radians(1)) {
            let r = 5
            let x1 = 2 * cos(a) * (sin(a) + 1) - 20
            let y1 = 1 * sin(a) * r
            //diamond 2
            vertex(x1, y1)

        }
        endShape(CLOSE);
        pop();
    }
}

function drawStar(xoff, yoff) {

    return function () {
        push();
        translate(width / 2, height / 2)
        stroke('Yellow');
        strokeWeight(1)
        noFill();
        beginShape();
        for (let a = 0; a < TWO_PI; a += radians(1)) {
            let r = 5
            let x = r * pow(cos(a), 3) - 10 + xoff
            let y = r * pow(sin(a), 3) - 10 + yoff
            //diamond 2
            vertex(x, y)

        }
        endShape(CLOSE);
        pop();
    }
}

function drawCheek(x, y, w, h) {
    push();
    noStroke();
    const c = color(params.cheekColor);
    c.setAlpha(80)
    // if (random() < 0.5) rotate(params.cheek * 0.1)
    fill(c);
    ellipse(x, y, w, h)
    ellipse(x + 60, y, w - 1, h + 1)
    // filter(BLUR, 4)
    pop();
}