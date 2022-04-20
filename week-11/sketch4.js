let wave;
let button;
let playing;

let waveType;
let analyzer;
let music = [];
let slider;
function setup() {
  createCanvas(300, 300);
  slider = createSlider(200, 1200, 440);
  let num = slider.value();
  for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      num = num * 1.12;
    } else num = num - 25;
    music.push(num);
  }
  wave = new p5.Oscillator();
  wave.amp(0);
  button = createButton("play/pause");
  button.mousePressed(toggle);
  wave.setType("sine");
}

function start() {
  wave.start();
}

function draw() {
  playMusic(music);
}

function toggle() {
  if (!playing) {
    wave.start();
    wave.amp(0.5, 1);
    playMusic(music);
    playing = true;
  } else {
    wave.stop();
    wave.amp(0, 1);
    playing = false;
  }
}

function playMusic(music) {
  for (let i = 0; i < music.length; i++) {
    wave.freq(music[i]);

    let freq = wave.getAmp();
    let m = freq / 100;

    let color = map(i * m, 1000, 240000, 0, 255);
    background(random(200), 0, i);
  }
}
