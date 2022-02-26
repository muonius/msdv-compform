// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

// 1. Low amplitude, low frequency
// 2. increment offset values
// 3. offset changes back and forth between the bounds 
// 4. for 3 to happen, need to create negative noise value

let amplitude_slider;
let freq_slider;
let speed_slider;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

function setup() {
    createCanvas(500, 300);

    createP("Frequency");
    freq_slider = createSlider(0, 5000, 50);

    createP("Amplitude");
    amplitude_slider = createSlider(0, 100, 50);

    createP("Time Speed");
    speed_slider = createSlider(0, 50, 10);

}

function draw() {
    background(50);
    ellipseMode(CENTER);

    let amplitude = amplitude_slider.value() / 100;
    let frequency = freq_slider.value() / 1000;
    let speed = speed_slider.value() / 1000;

    noiseDetail(5, 0.5);

    fill(255);
    noStroke();

    // study this loop. do you understand how the line of ellipses is created?
    for (i = 0; i < 1; i += 0.02) {

        let offsetX = 0;
        let offsetY = 0;

        // hint: drive offsetX and offsetY with noise() instead of random()
        let n;
        n = noise(i * frequency, frameCount * speed)

        offsetX += (n - 0.5) * amplitude * 100;
        offsetY += (n - 0.5) * amplitude * 200;

        let x = lerp(startX, endX, i);
        let y = lerp(startY, endY, i);

        ellipse(x + offsetX, y + offsetY, 10, 10);


    }
}
