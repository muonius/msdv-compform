
let board =
    [
        ['O', 'X', 'X'], ['O', 'O', 'X'], ['X', 'X', 'O']
    ]

let player1 = 'X';
let player2 = 'O';
let margin = 100;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(220);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let spot = board[i][j];
            let x = map(j, 0, 2, margin, width - margin)
            let y = map(i, 0, 2, margin, height - margin)
            text(spot, x, y);
        }
    }

}