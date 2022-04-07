// I took it from https://stackoverflow.com/questions/42437971/exporting-a-video-in-p5-js

const btn = document.querySelector("button"),
  chunks = [];

function record() {
  chunks.length = 0;
  let stream = document.querySelector("canvas").captureStream(30),
    recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = (e) => {
    recorder.stop();
    btn.textContent = "start recording";
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = "stop recording";
}

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement("video");
  vid.id = "recorded";
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}
btn.onclick = record;
