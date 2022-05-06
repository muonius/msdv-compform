//https://www.youtube.com/watch?v=3tTZlTq4Cxs
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

function preload() {
  twitterImg = loadImage("./assets/twitter.png");

  facebookImg = loadImage("./assets/facebook.png");

  snapchatImg = loadImage("./assets/snapchat.png");

  tiktokImg = loadImage("./assets/tiktok.png");

  truthsocialImg = loadImage("./assets/truth.png");

  instagramImg = loadImage("./assets/instagram.png");
}

function setup() {
  createCanvas(500, 500);
  twitterImg.resize(40, 40);
  facebookImg.resize(30, 30);
  snapchatImg.resize(60, 60);
  tiktokImg.resize(60, 60);
  truthsocialImg.resize(30, 30);
  instagramImg.resize(40, 40);

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
  distractors.bounce(walls);
  for (let i = 0; i < distractors.length; i++) {
    distractors[i].bounce(distractors);
  }
  drawSprites();
  // console.log(distractors);
}
