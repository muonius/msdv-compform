//inspiration:
//[SuperHi Looping Sqauare](https://looping-squares.superhi.com/)
//Only referenced the concept, SuperHi's code is in two.js
//easing library https://gist.github.com/gre/1650294


let countSlider, crazyMode, easingSlider;

// let count = 50;
// let inc = 10;
// let angle = 0;
const aDelay = 1 / 120;
const loopDuration = 60 * 8;
//I intended to include different easing effect into a slider but decided not to complicate things
// const easingArray = [easeInOutCubic, easeInOutQuad, easeInOutQuint]

function setup() {
    createCanvas(400, 400)
    rectMode(CENTER)
    angleMode(DEGREES)

    createP("Number of Squares");
    countSlider = createSlider(5, 100, 5)


    createP("Bandwidth");
    incSlider = createSlider(1, 20, 1)

    createP("Go Crazy or Go Normal")
    crazyMode = createSlider(0, 1, 1)

    // createP("Try Different Easing")
    // easingSlider = createSlider(0, 2, 1)
}

function draw() {

    background(0);

    translate(width / 2, height / 2)
    for (let i = 0; i < countSlider.value(); i++) {
        rotate(radians(easingAngle(frameCount, easeInOutCubic, i)));
        push();
        let size = (countSlider.value() - i) * incSlider.value()

        fill(i % 2 === 0 ? 0 : 255)
        noStroke();
        rect(0, 0, size, size);
        pop();
    }
    // noLoop();

}


//make the angle rotate in easeInOutCubic easing
function easingAngle(frameCount, callback, i) {
    const aStart = aDelay * (countSlider.value() - i)
    const aEnd = aDelay * i
    let t;

    crazyMode.value() == 0 ? t = frameCount % loopDuration / loopDuration : t = frameCount / loopDuration;
    // easingSlider.value == 0 ? t = frameCount % loopDuration / loopDuration : frameCount / loopDuration

    // const u creates a mapped t value for each square that has an incremental delay effect
    const u = map(t, aStart, 1 - aEnd, 0, 1)
    // use a callback function allows me to call any easing function I like, right now
    // we only included the easeInOutCubic
    const angle = callback(u) * 180;
    // console.log(console.log(callback(t)))
    return angle;
}


//easing function copied from SuperHi util.js
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
}
