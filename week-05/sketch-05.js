// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let freq_slider;
let amplitude_slider;
let time_slider;
let r = 10;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let speed = 0;

function setup() {
    createCanvas(500, 500);

    createP("Frequency");
    freq_slider = createSlider(50, 200, 50);
    createP("Amplitude");
    amplitude_slider = createSlider(200, 500, 200);
    createP("Time Speed");
    time_slider = createSlider(0, 100, 50);
    colorMode(HSB);
}

function draw() {
    background(0);
    ellipseMode(CENTER);

    translate(width / 4, height / 4)

    let frequency = freq_slider.value() / 100;
    let amplitude = amplitude_slider.value() / 100;
    let time = time_slider.value() / 1000;

    speed += time;

    noiseDetail(2, 0.5);

    for (i = 0; i <= TWO_PI * 3; i += radians(1)) {


        let angle = radians(i)
        let x = 30 * i * cos(i) * angle;
        let y = 10 * i * sin(i) * angle;

        let n = noise(i * frequency + speed);

        if (r > 80) r -= n / 1000;

        let offsetX = noise(i * frequency + speed) * amplitude * 100;
        let offsetY = noise(i * frequency + speed, 10) * amplitude * 100;

        let hue = map(i, 0, PI, 0, 60)

        if (i === 0) { fill(0, 0, 0) }
        else fill(hue, 100, 100)

        ellipse(x + offsetX, y + offsetY, r, r);

        r += n / 1000;
    }

}