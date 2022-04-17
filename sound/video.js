let song;
let video;
let playButton;
let jumpButton;
let pauseButton;
let img;

function setup() {
  // createCanvas(300, 800);
  song = loadSound("rapgod.mp3", soundLoaded);
  video = createVideo("instagram.mov", videoLoaded);
  playButton = createButton("play");
  playButton.mousePressed(togglePlaying);
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
}

function videoLoaded() {
  console.log("video loaded");
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
  Image(video, -100, 0);
}
