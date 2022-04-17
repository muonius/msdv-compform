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
  noFill();

  let currentY = map(vol, 0, 1, height, 0);

  translate(0, height / 2 - currentY);

  beginShape();
  for (let i = 0; i < volHistory.length; i++) {
    let y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (volHistory.length > width - 5) {
    volHistory.splice(0, 1);
  }
  stroke(255, 0, 0);
  line(volHistory.length, 0, volHistory.length, height);
}
