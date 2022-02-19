let scaleSlider, a1Slider, a2Slider, a3Slider, opSliderX, opSliderY;

let operations = ["*", "+", "-"]

function setup() {
    createCanvas(600, 600)
    angleMode(DEGREES)

    createP("OperationsX")
    opSliderX = createSlider(0, 1, 1)

    createP("OperationsY")
    opSliderY = createSlider(0, 1, 1)

    // createP("scale")
    // scaleSlider = createSlider(10, 40, 10)

    createP("Multiplier a1")
    a1Slider = createSlider(1, 30, 0.1)

    createP("Multiplier a2")
    a2Slider = createSlider(1, 30, 0.1)

    createP("Multiplier a3")
    a3Slider = createSlider(1, 10, 0.1)




}

function draw() {
    background(255);
    push();

    translate(width / 2, height / 2)

    stroke(0);
    strokeWeight(1)

    fill('red');
    beginShape();
    for (let a = 0; a < 360; a += radians(1)) {
        // let r = scaleSlider.value()
        let r = 10
        let x1;
        let y1;

        if (opSliderX.value() == 0) {
            x1 = r * 16 * sin(a * a1Slider.value() + r * a1Slider.value()) * sin(a * a2Slider.value() + r * a2Slider.value()) * sin(a * a3Slider.value() + r * a3Slider.value())

        } else if (opSliderX.value() == 1) {
            x1 = -r * 30 * cos(a * a3Slider.value() - r * a3Slider.value()) * cos(a * a2Slider.value() - r * a3Slider.value()) * cos(a * a2Slider.value() - r * a3Slider.value()) * cos(a * a3Slider.value() - r * a3Slider.value())
        }



        if (opSliderY.value() == 0) {
            y1 = -r * (13 * cos(a * a1Slider.value() + r * a1Slider.value()) + cos(2 * a2Slider.value() + r * a2Slider.value()) * cos(3 * a3Slider.value() + r * a3Slider.value()) * cos(4 * a2Slider.value()));

        } else if (opSliderY.value() == 1) {
            y1 = r * (15 * sin(a * a1Slider.value() + r * a1Slider.value()) * cos(2 * a2Slider.value() + r * a2Slider.value()) * cos(3 * a3Slider.value() + r * a3Slider.value()));
        }


        // let x1 = r * 16 * sin(a * a1Slider.value() + r * a1Slider.value()) * sin(a * a2Slider.value() + r * a2Slider.value()) * sin(a * a3Slider.value() + r * a3Slider.value())
        // let y1 = -r * (13 * cos(a * a1Slider.value() + r * a1Slider.value()) + 9 * cos(2 * a2Slider.value() + r * a2Slider.value()) - 12 * cos(3 * a3Slider.value() + r * a3Slider.value()) * cos(4 * a2Slider.value()));


        //standard heart shape
        // let x1 = r * 16 * pow(sin(a), 3);
        // let y1 = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));

        vertex(x1, y1)
        // vertex(x1, y1)

    }

    endShape(CLOSE);
    pop();
    // console.log("scaleSlider", scaleSlider.value())
    // console.log("a1Slider", a1Slider.value())
    // console.log("a2Slider", a2Slider.value())
    // console.log("a3Slider", a3Slider.value())
    //scaleSlider 10,7,7,4

}
