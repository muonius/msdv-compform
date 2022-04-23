//https://p5js.org/reference/#/p5/text
let data;
let osc1;
let osc2;
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
  temp1 = data.getColumn("January");
  temp2 = data.getColumn("Febrary");
  year = data.getColumn("Year");
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc1.setType("sine");
  osc2.setType("square");
  osc1.amp(0);
  osc2.amp(0);
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
    osc1.start();
    osc1.amp(0.5, 1);
    osc2.start();
    osc2.amp(0.5, 1);
    playMusic(temp1, temp2, year);
    playing = true;
  } else {
    osc1.stop();
    osc1.amp(0, 1);
    osc2.stop();
    osc2.amp(0, 1);
    playing = false;
  }
}

function playMusic(temp1, temp2, data) {
  for (let i = 0; i < data.length; i++) {
    let value1 = map(temp1[i], 1, 100, 10, 1000);
    let value2 = map(temp2[i], 1, 200, 400, 1600);
    osc1.freq(value1);
    osc2.freq(value2);
  }
}
