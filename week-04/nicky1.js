// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
//coding tutorial credit: Weidi https://www.youtube.com/watch?v=me04ZrTJqWA
let img;
let cnv;
let sliderStroke;
let sliderText;
const textArr = ["$", "$$$", "A$AP", "BURGERS", "NEVER SAY NEVER", "SO GOOD"]

function preload() {
    img = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-04/assets/trump.jpeg');
}

function setup() {
    cnv = createCanvas(img.width, img.height);
    // print(img.width,img.height);
    let newCanvX = (windowWidth - img.width) / 2;
    let newCanvY = (windowHeight - img.height) / 2;
    cnv.position(newCanvX, newCanvY);


    // createP("Adjust Stroke")
    sliderStroke = createSlider(0, 20, 1);
    // sliderStroke.position(newCanvX, newCanvY + img.height);
    sliderStroke.position(newCanvX, newCanvY + img.height);
    sliderStroke.style('width', '80px');

    //create textSlider
    sliderText = createSlider(0, 5, 1);
    sliderText.position(newCanvX + img.width - 80, newCanvY + img.height);
    sliderText.style('width', '80px');

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
            strokeWeight(sliderStroke.value());
            fill(color(c));
            if (random(1) < 0.5) {
                text(textArr[sliderText.value()], xPos, yPos);
                textSize(min(random(8, 16), random(8, 16)))
            }
            noFill();
            // fill(color(c));
            // rect(xPos, yPos, random(5), random(3));
            strokeWeight(sliderStroke.value());
            stroke(color(c))
            // rect(col, row, 10, 5);
            curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * noise(2, 0.2), 0, 0, cos(yPos) * sin(yPos) * random(1, 120), cos(xPos) * sin(yPos) * 50);
            pop();
        }
    }


    push();
    fill(255);
    text('Adjust Brush Stroke', 10, 490)
    text('Change Text', 320, 490)
    pop();
}