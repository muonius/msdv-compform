let wave;
let button;
let playing;

function setup() {
  createCanvas(300, 300);
  wave = new p5.Oscillator();
  wave.setType("sine");

  wave.amp(0);
  button = createButton("play/pause");
  button.mousePressed(toggle);
}

function start() {
  wave.start();
}

function draw() {
  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  if (!playing) {
    wave.start();
    wave.amp(1);
    wave.freq(440);
    playing = true;
  } else {
    wave.stop();
    wave.amp(0);
    playing = false;
  }
}
