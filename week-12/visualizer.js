let music;
let ftrans;
let button;
let soundwave;
//this will be turned into an array
let visual;
let offset;

function preload() {
  music = loadSound("piano.mp3");
}

function setup() {
  createCanvas(500, 400);
  colorMode(HSB);
  button = createButton("Play/Pause");
  button.mousePressed(toggleMusic);
  //   music.play();
  ftrans = new p5.FFT(0.05, 64);
  //smoothness 0,1
  //bins available to sort out amplitude
  //a factor of 2s, higher, slower
  visual = new visualizer();
}

function draw() {
  background(0, 255);
  soundwave = ftrans.analyze();
  translate(width / 2, height / 2);
  noStroke();
  //   strokeWeight(2);
  for (let i = 0; i < soundwave.length; i++) {
    beginShape();
    let amp = soundwave[i];
    let color = map(amp, 0, 255, 150, 290);
    fill(color * 1.1, 100, 100);
    visual.update(i, amp);
    console.log(amp);
    endShape(CLOSE);
  }
}

function visualizer() {
  this.ysize = height * 0.05;
  //0, 255
  this.svel = 0.05;
  this.sfrq = 10;

  this.update = function (vi, vamp) {
    let x = map(vi, 0, 32, -width / 2, width / 2);

    let xf = -width / 64;
    let y = map(vamp, 0, 255, -this.ysize, this.ysize);

    this.sfre += this.svel * 0.01;
    if (this.sfrq < -50 || this.sfrq > 250) {
      this.svel *= -1;
    }
    let ymod = map(
      sin(this.sfrq * (vi * 0.0005)),
      -1,
      1,
      -height * 0.4,
      height * 0.4
    );
    push();

    vertex(x, y + ymod);
    vertex(x, -y + ymod);
    vertex(x + xf, -y + ymod);
    vertex(x + xf, y + ymod);

    pop();
    this.sfrq += 0.01;
  };
}

function toggleMusic() {
  if (music.isPlaying()) {
    music.pause();
  } else {
    music.play();
  }
}
