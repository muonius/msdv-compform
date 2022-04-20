let song;
let video;
let playButton;
let jumpButton;
let pauseButton;

function setup() {
  // createCanvas(300, 800);
  song = loadSound("music.mp3", soundLoaded);
  video = createVideo("video.mov", videoLoaded);
  video.size(400, 400);
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
  video.jum(len / 2);
}

function pause() {
  song.pause();
  video.pause();
}
