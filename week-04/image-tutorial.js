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

    for (let col = 0; col < img.width; col += 5) {
        for (let row = 0; row < img.height; row += 5) {
            let c = img.get(col, row)
            // stroke(color(c))
            // strokeWeight(10)
            // point(col, row)
            fill(color(c))
            rect(col, row, 10, 5)
        }
    }
}
