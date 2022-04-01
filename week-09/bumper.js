/* exported setup draw */
/*ltner */

function setup() {
  createCanvas(512 * 2, 512);

  background(0);
}

function draw() {
  for (let i = 0; i < 10; i++) {
    drawTriangle(20 + i * 20, 156 + i * 20, 912 + i * 20, 0.2 + i * 0.1);
  }
  drawText();
}

function drawTriangle(scale, wdith, height, radius) {
  let donkeyX = scale;
  let donkeyY = scale;
  const bale1X = width / 2;
  const bale1Y = scale;
  const bale2X = scale;
  const bale2Y = height - scale;
  const bale3X = width - scale;
  const bale3Y = height - scale;

  const bales = [
    { x: width / 2, y: scale },
    { x: scale, y: height - scale },
    { x: width - scale, y: height - scale },
  ];

  for (let i = 0; i < scale; i++) {
    const r = random();

    if (r < 0.333) {
      donkeyX = lerp(donkeyX, bale1X, 0.5);
      donkeyY = lerp(donkeyY, bale1Y, 0.5);
    } else if (r < 0.666) {
      donkeyX = lerp(donkeyX, bale2X, 0.5);
      donkeyY = lerp(donkeyY, bale2Y, 0.5);
    } else {
      donkeyX = lerp(donkeyX, bale3X, 0.5);
      donkeyY = lerp(donkeyY, bale3Y, 0.5);
    }

    noStroke();
    fill(200, 0, 0, 50);
    ellipse(donkeyX, donkeyY, radius, radius);

    fill(0);
    ellipse(bale1X, bale1Y, 1, 1);

    ellipse(bale2X, bale2Y, 1, 1);
    ellipse(bale3X, bale3Y, 1, 1);
    // noLoop();
  }
}

function drawText() {
  const a = map(frameCount, 0, 100, 0, PI / 3);
  let offset = cos(a) * 100;
  let size = 100 - offset;
  stroke(255, 0, 0, 50);
  strokeWeight(0.25);
  noFill();
  textFont("Helvetica");
  textSize(size);
  text("CompForm", sin(a) * 100, 306);
}
