let osc;
let freq;
let headingEl;
let tempEl;

async function setup() {
  createCanvas(500, 500);
  let data = await fetch("weather.csv");
  let csv = await data.text();
  let weather = d3.csvParseRows(csv);
  headingEl = createSpan("");
  tempEl = createSpan("");
  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.amp(1);
  osc.start();
  for (let i = 1; i < weather.length; i++) {
    for (let j = 1; j < weather[i].length; j++) {
      headingEl.html(`${weather[i][0]} - ${weather[0][j]}`);
      tempEl.html(weather[i][j]);
      drawSound(parseFloat(weather[i][j]), weather[i][0], j - 1);
      playSound(parseFloat(weather[i][j]));
      // TODO: Erkin make a sun change color using the following function that you will write
      await sleep(250);
    }
  }
}

function drawSound(temperature, year, month) {
  let yearPosition = (width / 119) * (year - 1900);
  let monthPosition = (width / 119 / 12) * month;
  let x = yearPosition + monthPosition;
  let y = map(temperature, 0, 100, height, 0);
  circle(x, y, 2);
}

function playSound(temperature) {
  let freq = map(temperature, 0, 100, 200, 1600);
  osc.freq(freq);
}

async function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
