//https://p5js.org/reference/#/p5/text
let data;
let osc1;
let osc2;
let year;
let temp1;
let temp2;
let playing;

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
  osc2.setType("sine");
  osc1.amp(0);
  osc2.amp(0);
  button = createButton("play/pause");
  button.mousePressed(toggle);
}

function draw() {
  background(50);
  push();
  fill(255);
  textSize(26);
  text("convert data", width - 200, height - 10);
  pop();
  playMusic(temp1, temp2, year);
}

function start() {
  osc1.start();
  osc2.start();
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

function playMusic(temp1, temp2, year) {
  for (let i = 1; i < year.length; i++) {
    let value1 = map(temp1[i], 1, 100, 10, 800);
    let value2 = map(temp2[i], 1, 200, 300, 1200);
    osc1.freq(value1);
    osc2.freq(value2);

    let height1 = map(temp1[i], 1, 100, 50, height * 0.8);
    let height2 = map(temp2[i], 1, 200, 10, height);
    let x = map(i, 0, year.length, 5, width);
    fill(255);
    text(year[i], x, height1);

    ellipse(x, height2, 2, 2);
    // console.log(year[i]);
  }
}
