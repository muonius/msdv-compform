let mySound;
let fft;
let speed = 0;
let sliderVolume;
let sliderRate;
let sliderPan;

function setup() {
  createCanvas(300, 300);

  mySound = loadSound("rapgod.mp3", start);
  sliderRate = createSlider(0, 1, 0.5, 0.01);
  sliderPan = createSlider(-1, 1, 0.5, 0.01);

  fft = new p5.FFT(0, 128);
  fft.setInput(mySound);

  startButton = createButton("start");
  startButton.mousePressed(start);

  stopButton = createButton("stop");
  stopButton.mousePressed(stop);
}

function start() {
  if (!mySound.isPlaying()) {
    mySound.play(0, 0.8, 1);
    mySound.setVolume(0.5);
  }
}

function stop() {
  mySound.pause();
}

function draw() {
  background(0);

  //right to left speaker?
  mySound.pan(sliderPan.value());
  mySound.rate(sliderRate.value());
}
