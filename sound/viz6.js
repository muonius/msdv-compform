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
  colorMode(HSB);
  button = createButton("play/pause");
  button.mousePressed(toggleSong);
  fft = new p5.FFT(0.5, 64);
  w = width / 64;
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
  translate(width / 2, height / 2);

  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 40, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
  }
}
