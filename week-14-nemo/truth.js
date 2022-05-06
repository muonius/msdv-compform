// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /microgames/sketches/p5.play.js

let twitter;
let twitterImg;
let facebook;
let facebookImg;
let snapchat;
let snapchatImg;
let instagram;
let instagramImg;
let tiktok;
let tiktokImg;
let truthsocial;
let truthsocialImg;
let truth;
let offset;
let x = 250;
let y = 250;
let walls;
let distractors;
let nemo;
let nemo1;
let nemo2;
let puffer;
let dad1;
let dad2;

function preload() {
  twitterImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/twitter.png"
  );

  facebookImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/facebook.png"
  );

  snapchatImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/snapchat.png"
  );

  tiktokImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/tiktok.png"
  );

  truthsocialImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/truth.png"
  );

  instagramImg = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/instagram.png"
  );

  nemo1 = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/nemo1.png"
  );
  nemo2 = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/nemo2.png"
  );
  pufferImg = loadImage("./assets/puffer.png");
  dad1 = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/dad1.png"
  );
  dad2 = loadImage(
    "https://raw.githubusercontent.com/muonius/msdv-compform/master/week-14-nemo/assets/dad2.png"
  );
}

function setup() {
  createCanvas(500, 500);
  twitterImg.resize(40, 40);
  facebookImg.resize(30, 30);
  snapchatImg.resize(60, 60);
  tiktokImg.resize(60, 60);
  truthsocialImg.resize(30, 30);
  instagramImg.resize(40, 40);

  puffer = createSprite(150, 150);
  puffer.addImage(pufferImg);
  puffer.visible = false;

  nemo = createSprite(50, 50, 50, 50);
  nemo.addAnimation("normal", nemo1, nemo2, 2400);

  dad = createSprite(450, 450, 150, 150);
  dad.addImage(dad1);

  distractors = new Group();

  twitter = createSprite(x, y, 20, 20);
  twitter.addImage(twitterImg);
  twitter.velocity.x = 5;
  twitter.velocity.y = 2;
  distractors.add(twitter);

  facebook = createSprite(random(width), 250, 20, 20);
  facebook.addImage(facebookImg);
  facebook.velocity.x = 10;
  facebook.velocity.y = 5;
  distractors.add(facebook);

  snapchat = createSprite(random(width), 300, 20, 20);
  snapchat.addImage(snapchatImg);
  snapchat.velocity.x = 5;
  snapchat.velocity.y = 10;
  distractors.add(snapchat);

  tiktok = createSprite(random(width), 350, 20, 20);
  tiktok.addImage(tiktokImg);
  tiktok.velocity.x = 8;
  tiktok.velocity.y = 8;
  distractors.add(tiktok);

  truthsocial = createSprite(random(width), 350, 20, 20);
  truthsocial.addImage(truthsocialImg);
  truthsocial.velocity.x = 5;
  truthsocial.velocity.y = 5;
  distractors.add(truthsocial);

  instagram = createSprite(random(width), 400, 20, 20);
  instagram.addImage(instagramImg);
  instagram.velocity.x = 8;
  instagram.velocity.y = 8;
  distractors.add(instagram);

  walls = new Group();

  const left_wall = createSprite(5, height * 0.5, 10, height);
  left_wall.immovable = true;
  walls.add(left_wall);

  const right_wall = createSprite(width - 5, height * 0.5, 10, height);
  right_wall.immovable = true;
  walls.add(right_wall);

  const top_wall = createSprite(width * 0.5, 5, width, 10);
  top_wall.immovable = true;
  walls.add(top_wall);

  const bottom_wall = createSprite(width * 0.5, height - 5, width, 10);
  bottom_wall.immovable = true;
  walls.add(bottom_wall);
}

function draw() {
  background(0);
  nemo.position.x = mouseX;
  nemo.position.y = mouseY;

  puffer.position.x = mouseX;
  puffer.position.y = mouseY;

  if (nemo.overlap(distractors)) {
    puffer.visible = true;
    nemo.displace(puffer);
    nemo.visible = false;
  }
  distractors.bounce(walls);
  for (let i = 0; i < distractors.length; i++) {
    distractors[i].bounce(distractors);
  }
  drawSprites();
  fill(255);
  textSize(22);
  text("Return Nemo to Dad, Not Puffer", 50, 450);

  // console.log(distractors);
}
