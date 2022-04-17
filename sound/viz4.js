let song;
let fft;
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
  createCanvas(256, 256);
  angleMode(DEGREES);
  button = createButton("play/pause");
  button.mousePressed(toggleSong);
  fft = new p5.FFT(0.5, 256);
  w = width / 32 - 2;
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
  fill(255);
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    rect(i * w, y, w, height - y);
  }
}
