let mySound;
let fft;

function preload() {
  mySound = loadSound("rapgod.mp3");
}

function setup() {
  createCanvas(500, 200);

  fft = new p5.FFT(0, 128);
  fft.setInput(mySound);

  startButton = createButton("start");
  startButton.mousePressed(start);

  stopButton = createButton("stop");
  stopButton.mousePressed(stop);
}

function start() {
  mySound.play(0, 0.8, 1);
}

function stop() {
  mySound.pause();
}

function draw() {
  background(50);
  stroke(255);
  noFill();
  strokeWeight(random(10));
  const data = fft.waveform();
  beginShape();
  for (let i = 0; i < TWO_PI; i += radians(1)) {
    let r = map(noise(data[i]), 0, 1, 10, 50);
    const x = r * cos(i);
    const y = r * sin(i);
    vertex(x, y);
  }
  endShape();
}
