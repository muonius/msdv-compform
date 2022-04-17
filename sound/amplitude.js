let song;
let playButton;
let jumpButton;
let pauseButton;
let img;

function setup() {
  createCanvas(300, 300);
  song = loadSound("rapgod.mp3", soundLoaded);
  amp = new p5.Amplitude();
  //amp.getLevel() 0 - 1 volume value

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  pauseButton = createButton("pause");
  pauseButton.mousePressed(pause);
}

function togglePlaying() {
  song.play(0, 1, 1);
  video.play();
  song.setVolume(0.5);
}

function soundLoaded() {
  console.log("sound loaded");
  playButton = createButton("play");
  playButton.mousePressed(togglePlaying);
}

function jumpSong() {
  let len = song.duration();
  song.jump(len / 2);
  //song.currentTime()
}

function pause() {
  song.pause();
  video.pause();
}

function draw() {
  background(51);
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.5, 10, 200);
  fill(255, 0, 50);
  ellipse(width / 2, height / 2, diam, diam);
}
