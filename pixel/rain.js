let symbol;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    background(0)
    symbol = new Symbol(width / 2, height / 2)
    symbol.setToRandomSymbol()
}



function draw() {

}


class Symbol {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value;

    }

    setToRandomSymbol() {
        this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }

    render() {
        fill(0, 255, 70)
        text(this.value, this.x, this.y)
    }

}