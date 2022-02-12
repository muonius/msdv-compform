let x = 0;
let y = 0;
let xoff = 0;
let spacing = 40;

function setup() {
    createCanvas(600, 600)
    background(0);
}

function draw() {
    stroke(255)
    //cross stitching
    // if (random(1) < 0.5) {
    //     line(x, y, x + spacing, y + spacing)
    //     line(x, y + spacing, x + spacing, y)
    // }


    // 10 print
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing)
    } else line(x, y + spacing, x + spacing, y)

    // if (random(1) < 0.9) {
    //     line(x, y, x + noise(xoff, 1) * 15, y + spacing)
    // } else line(x, y + spacing, x + noise(xoff, 2) * 15, y)

    x += spacing;

    if (x > width) {
        x = 0;
        y += spacing;
    }
    // xoff += 0.1;
}