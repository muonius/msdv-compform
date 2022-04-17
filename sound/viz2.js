let song;
let playButton;
let jumpButton;
let pauseButton;

let img;
let amp;
let volHistory = [];

function preload() {
  song = loadSound("rapgod.mp3");
}
function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
  button = createButton("play/pause");
  button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  background(51);

  let vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  strokeWeight(random(2));
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 1; i < 361; i++) {
    let r2 = map(volHistory[i - 1], 0, 1, 10, 200);
    let r1 = map(volHistory[i + 1], 0, 1, 40, width / 2);
    let x = r1 * cos(i);
    let y = r2 * sin(i);
    curveVertex(x, y);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
}
