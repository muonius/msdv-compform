window.setup = function () {
  createCanvas(600, 600);
  frameRate(60);
};

window.draw = function () {
  background(200);
  stroke(50);
  strokeWeight(4);

  lines_1();
};

function lines_1() {
  for (let x = 100; x <= 500; x += 10) {

    let offsetX = 0;
    let offsetY = 0;
    n = noise(x * 0.1);
    offsetX += n * 20 - 10;

    let x1 = x;
    let y1 = 200;
    let x2 = x;
    let y2 = 400;
    line(x + offsetX, 200, x - offsetX * 2, 400);
    // console.log(noise(x))
    // console.log(noise(x * 0.1))
  }
}