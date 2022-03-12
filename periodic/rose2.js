
let sliderD;
let sliderN;
let k;

function setup() {
    createCanvas(500, 500)
    sliderD = createSlider(1, 10, 5, 1)
    sliderN = createSlider(1, 10, 5, 1)

}

function draw() {
    background(51)
    d = sliderD.value()
    n = sliderN.value()
    k = n / d
    translate(width / 2, height / 2)
    noFill()
    beginShape()
    stroke(255)
    strokeWeight(1)

    for (let a = 0; a < TWO_PI * d; a += radians(1)) {

        let r = 200 * cos(k * a);
        let x = r * cos(a)
        let y = r * sin(a)


        vertex(x, y)
    }

    endShape()

}