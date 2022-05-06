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
let y = 250;

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

  twitter = createSprite(random(width / 2), y, 20, 20);
  twitter.addImage(twitterImg);
  twitter.velocity.x = 1;

  // twitter.velocity.y = height - offset;
  facebook = createSprite(0, 250, 20, 20);
  facebook.addImage(facebookImg);
  snapchat = createSprite(0, 300, 20, 20);
  snapchat.addImage(snapchatImg);
  tiktok = createSprite(0, 350, 20, 20);
  tiktok.addImage(tiktokImg);
  truthsocial = createSprite(0, 350, 20, 20);
  truthsocial.addImage(truthsocialImg);
  instagram = createSprite(0, 400, 20, 20);
  instagram.addImage(instagramImg);
}

function draw() {
  background(0);
  const a = map(frameCount, 0, 20, 0, PI);
  let offset = sin(a) * 200;
  y = height - offset;
  drawSprites();
}
