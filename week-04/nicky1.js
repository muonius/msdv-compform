//coding tutorial credit: Weidi https://www.youtube.com/watch?v=me04ZrTJqWA
let img
let cnv
let val = 2

function preload() {
    img = loadImage('./assets/trump.jpeg');
}

function setup() {
    cnv = createCanvas(img.width, img.height);
    // print(img.width,img.height);
    let newCanvX = (windowWidth - img.width) / 2;
    let newCanvY = (windowHeight - img.height) / 2;
    cnv.position(newCanvX, newCanvY);



    slider = createSlider(0, 20, 1);
    slider.position(newCanvX, newCanvY + img.height);
    slider.style('width', '80px');

}

function draw() {
    // access each pixel information of the image
    for (let col = 0; col < img.width; col += 10) {
        for (let row = 0; row < img.height; row += 10) {
            let xPos = col;
            let yPos = row;
            let c = img.get(col, row);
            push();
            translate(xPos, yPos);
            rotate(radians(random(360)));
            fill(color(c));
            text("$", xPos, yPos);
            noFill();
            strokeWeight(random(val));
            // fill(color(c));
            rect(xPos, yPos, random(5), random(3));
            strokeWeight(random(val));
            stroke(color(c))
            rect(col, row, 10, 5);
            curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * noise(2, 0.2), 0, 0, cos(yPos) * sin(yPos) * random(1, 120), cos(xPos) * sin(yPos) * 50);
            pop();
        }
    }
    val = slider.value();

    push();
    fill(255);
    text('Adjust Stroke', 10, 490)
    pop();
}