function setup() {
    createCanvas(500, 500);
    // colorMode(HSB)
}

function draw() {
    background(0);

    img = createImage(20, 20);
    img.loadPixels();

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            // let c = color(y * 25, x * 25, 0);//1. diagnal1 gradient
            //let c = color(x * 25, y * 25, 0);//2. diagnal2 gradient
            //let c = color(0, x * 25, 0)//3. vertical green to black
            //let c = color(0, 0, y * 25)//4. horizontal black to blue
            //5.change colorMode for horizontal gradient
            // let hue = map(y, 0, img.height, 0, 360)
            // let c = color(random(hue), 100, 100)
            //6. Make a radial gradient
            let d = dist(width / 2, height / 2, x * 25, y * 25)
            console.log(d)
            let c = color(d, 0, 0)

            img.set(x, y, c);
        }
    }

    img.updatePixels();

    noSmooth();
    image(img, 0, 0, width, height);
    noLoop();
}