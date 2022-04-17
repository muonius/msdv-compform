let song;
let playButton;
let jumpButton;
let pauseButton;

function setup() {
  createCanvas(300, 300);

  song = loadSound("rapgod.mp3", loaded);

  playButton = createButton("play");
  playButton.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  pauseButton = createButton("pause");
  pauseButton.mousePressed(pause);

  background(51);
  song.addCue(5, changeBackground);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play(0, 1, 1);
    song.setVolume(0.5);
  }
}

function loaded() {
  console.log("loaded");
}
function jumpSong() {
  let len = song.duration();
  song.jump(len / 2);
  //song.currentTime()
}

function pause() {
  song.pause();
}

// function draw() {
//   // background(song.currentTime() * 10, 0, 255);
// }

function changeBackground() {
  background(random(255), random(255), random(255));
}
