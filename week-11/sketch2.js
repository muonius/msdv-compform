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
  fft = new p5.FFT(0.5, 128);
  w = width / 128;
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(random(2));
  noFill();
  let spectrum = fft.analyze();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let a = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let rVal = map(amp, 0, 256, 1, 200);
    let r = rVal * cos(72 * a);
    let x = r * cos(a + a * 0.1);
    let y = r * sin(a + a * 0.01);
    vertex(x, y);
  }
  endShape();
}
