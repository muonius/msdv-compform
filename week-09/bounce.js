// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

/*exported setup draw */

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background("gray");

  stroke("white");
  noFill();
  line(100, 200, 300, 200);

  noStroke();
  fill("black");

  //slower
  // const a = map(frameCount, 0, 60, 0, PI);
  //faster
  // const a = map(frameCount, 0, 5, 0, PI);
  const a = map(frameCount, 0, 20, 0, PI);
  let offset = sin(a) * 50;
  offset = abs(offset);
  const y = 200 - offset;
  ellipse(200, y, 100, 100);
}
