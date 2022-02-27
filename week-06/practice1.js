let inc = 0.01;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  img = createImage(5, 5);
  img.loadPixels();

  for (let i = 0; i < 50; i++) {
    //   let c = color(0, 0, random(255)); //andom blue
    // let c = color(random(255));//random shade of gray
    let c = color(255 * noise(i + inc, 0), 255 * noise(i + inc, 1), 255 * noise(i + inc, 2));//random shade of gray
    img.set(random(10), random(10), c);
    inc += 0.01;
  }

  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  noLoop();
}
