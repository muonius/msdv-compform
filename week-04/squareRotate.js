//inspiration:
//[SuperHi Looping Sqauare](https://looping-squares.superhi.com/)
//Only referenced the concept, SuperHi's code is in two.js



let count = 40;
let inc = 5;
let angle = 0;
const aDelay = 1 / 120;
const loopDuration = 60 * 8;

function setup() {
    createCanvas(500, 500)
    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw() {

    background(0);

    translate(width / 2, height / 2)
    for (let i = 0; i < count; i++) {
        rotate(radians(easingAngle(frameCount, easeInOutCubic, i)));
        push();
        let size = (count - i) * inc

        fill(i % 2 === 0 ? 0 : 255)
        noStroke();
        rect(0, 0, size, size);
        pop();
    }
    // noLoop();

}


//make the angle rotate in easeInOutCubic easing
function easingAngle(frameCount, callback, i) {

    const aStart = aDelay * i
    const aEnd = aDelay * (count - i)
    // const aStart = aDelay * (count - i) 
    // const aEnd = aDelay * i
    // const t tracks where the frame is at during total duration, it returns a vaule between 0 and 1
    const t = frameCount % loopDuration / loopDuration

    //I DARE YOU TO TRY THIS t!!
    // const t = frameCount / loopDuration

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