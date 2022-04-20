let wave;
let button;
let playing;
let slider;
let waveType;
let sel;

function setup() {
  createCanvas(300, 300);
  wave = new p5.Oscillator();
  wave.amp(0);
  button = createButton("play/pause");
  button.mousePressed(toggle);
  slider = createSlider(100, 600, 440);

  wave.setType("sine");
}

function start() {
  wave.start();
}

function draw() {
  wave.freq(slider.value());
  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  if (!playing) {
    wave.start();
    wave.amp(0.5, 1);
    wave.freq(440);
    playing = true;
  } else {
    wave.stop();
    wave.amp(0, 1);
    playing = false;
  }
}
