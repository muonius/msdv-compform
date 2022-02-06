
let board =
    [
        ['O', 'X', 'X'], ['O', 'O', 'X'], ['X', 'X', 'O']
    ]

let player1 = 'X';
let player2 = 'O';
let band;
let scale;
let offset = 50;
let innerWidth;

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(220);
    band = height / 3;
    mark = height / 6;
    innerWidth = width - mark;

    for (let i = 1; i <= 2; i++) {
        line(0, band * i, width, band * i)
        line(band * i, 0, band * i, height)

    }
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            let spot = board[i][j];
            let x = map(j, 0, 2, mark, innerWidth)
            let y = map(i, 0, 2, mark, innerWidth)
            text(spot, x, y);
        }


    }

}