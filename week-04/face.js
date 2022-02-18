// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
// require https://cdn.jsdelivr.net/npm/tweakpane@1.5.9/dist/tweakpane.min.js

//deconstructing arr
let heads = [];
const pane = new Tweakpane();
const params = {
    head: 0,
    brow: 0,
    cheek: 0,
    cheekColor: "#f00",
    lip: 0,
    lipColor: "#f00"
}

pane.addInput(params, "head", { min: 0, max: 4, step: 1 });
pane.addInput(params, "brow", { min: 0, max: 4, step: 1 });
pane.addInput(params, "cheek", { min: 0, max: 4, step: 1 });
pane.addInput(params, "cheekColor", { min: 0, max: 4, step: 1 });
pane.addInput(params, "lip", { min: 0, max: 4, step: 1 });
pane.addInput(params, "lipColor", { min: 0, max: 4, step: 1 });

function preload() {
    heads[0] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Bezos.jpg');
    heads[1] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Biden.jpg');
    heads[2] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Xi.jpg');
    heads[3] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Kim.jpg');
    heads[4] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/Putin.jpg');

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    // print(imgBezos.width, imgBezos.height);
    //set up Tweakpane
}

function draw() {

    push();
    translate(width / 2, height / 2)
    image(heads[params.head], 0, 0);
    pop();

}