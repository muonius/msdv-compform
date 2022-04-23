//https://p5js.org/reference/#/p5/text
let data;
let osc;
let year;
let freq;
let headingEl;
let tempEl;
let playing;
let music;

function preload() {
  data = loadTable("weather.csv", "csv", "header");
}
function setup() {
  createCanvas(500, 500);
  temp = data.getColumn("January");
  year = data.getColumn("Year");
  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.amp(0);
  button = createButton("play/pause");
  button.mousePressed(toggle);
}

function draw() {
  background(50);
  for (let i = 0; i < year.length; i++) {
    x = map(i, 0, year.length, 5, width);
    fill(255);
    text(year[i], x, 250);
    // console.log(year[i]);
  }
  playMusic(music);
}

function start() {
  osc.start();
}

function toggle() {
  if (!playing) {
    osc.start();
    osc.amp(0.5, 1);
    playMusic(temp);
    playing = true;
  } else {
    osc.stop();
    osc.amp(0, 1);
    playing = false;
  }
}

function playMusic(music) {
  for (let i = 0; i < music.length; i++) {
    let value = map(music[i], 0, 100, 200, 600);
    osc.freq(value);

    let freq = osc.getAmp();
    let m = freq / 100;
    console.log(value);
  }
}
