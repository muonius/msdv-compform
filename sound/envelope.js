let wave;
let button;
let playing;
let slider;
let env;

function setup() {
  createCanvas(300, 300);
  env = new p5.Env();
  env.setADSR(0.05, 0.25, 0.5, 0.1);
  env.setRange(0.8, 0);

  wave = new p5.Oscillator();
  wave.setType("sine");
  wave.freq(440);
  wave.amp(env);

  button = createButton("play/pause");
  button.mousePressed(toggle);
  slider = createSlider(100, 1200, 440);
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
  env.play();
}
