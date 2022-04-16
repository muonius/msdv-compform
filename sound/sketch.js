let mySound;
let fft;
let speed = 0;

function preload() {
  mySound = loadSound("rapgod.mp3");
}

function setup() {
  createCanvas(300, 300);
  // colorMode(HSB);

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
  background(0);
  stroke(random(200), random(200), random(200));
  translate(random(width / 2), random(height));
  strokeWeight(random(20));
  const data = fft.waveform();
  beginShape();
  for (let i = 0; i < 2; i += 1) {
    let r = map(noise(i * abs(data[i])), 0, 1, 0, 200);
    let color = map(noise(i * abs(data[i])), 0, 1, 0, 255);
    const x = r * cos(noise(i));
    const y = r * sin(noise(i));
    // console.log(color);
    // fill(random(255), random(255), random(255));
    vertex(x, y);
  }
  endShape(CLOSE);
}
