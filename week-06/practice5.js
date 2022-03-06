
let worldImage;

function preload() {
  worldImage = loadImage("./assets/Olivier.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  for (let y = 0; y < worldImage.height; y++) {
    for (let x = 0; x < worldImage.width; x++) {
      let this_color = worldImage.get(x, y);
      let below_color = worldImage.get(x, y + 1);
      let color_a = color(worldImage.get(x, y))
      let color_b = color(worldImage.get(x, y + 1))
      let blend_color = lerpColor(color_a, color_b, 0.5)

      if (lightness(this_color) < lightness(below_color)) {
        let out_color = blend_color;
        worldImage.set(x, y + 1, out_color);
        worldImage.updatePixels();
      } else {
        let out_color = color(0, 0, 0)
        worldImage.set(x, y + 1, out_color);
        worldImage.updatePixels();
      }
    }
  }

  noSmooth();
  image(worldImage, 0, 0, width, height);

  noLoop();
}
