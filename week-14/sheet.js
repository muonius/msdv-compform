//Creating animations from sprite sheets
let sprite_sheet;
let sunny_animation;
let sprite_sheet_image;

function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadSpriteSheet("assets/sunny.png", 300, 300, 12);
  sunny_animation = loadAnimation(sprite_sheet);
  sprite_sheet_image = loadImage("assets/sunny.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  clear();

  // animate the sprite sheet
  animation(sunny_animation, 300, 200);
  image(sprite_sheet_image, 50, 400, 600, 250);
}
