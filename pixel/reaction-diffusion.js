//https://www.youtube.com/watch?v=BV9ny785UNc&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=16&t=16s

//1. two dimensional array
//2. each cell has spot A and spot B
//3. each frame creates a new value of A and new value of B
//4. the math function is a convolution 


let grid = [];
let nextGrid = [];

//default;
// const dA = 1
// const dB = 0.5
// const feed = 0.055
// const k = 0.062
// const t = 1;

const dA = 0.7
const dB = 0.2
const feed = 0.055
const k = 0.062
const t = 1;

function setup() {
    createCanvas(200, 200)
    pixelDensity(1)
    for (let x = 0; x < width; x++) {
        grid[x] = [];
        nextGrid[x] = [];
        for (let y = 0; y < height; y++) {
            grid[x][y] = { a: 1, b: 0 }
            nextGrid[x][y] = { a: 1, b: 0 }
        }
    }

    for (let i = 90; i < 110; i++) {
        for (let j = 90; j < 110; j++)
            grid[i][j].b = 1
    }
}

function draw() {
    background(50)

    for (let x = 1; x < width - 1; x++) {

        for (let y = 1; y < height - 1; y++) {
            let a = grid[x][y].a
            let b = grid[x][y].b
            //diffusion formula
            //laplace is the convolution
            nextGrid[x][y].a = a + (dA * laplaceA(x, y)) - (a * b * b) + (feed * (1 - a)) * t
            nextGrid[x][y].b = b + (dB * laplaceB(x, y)) + (a * b * b) - ((k + feed) * b) * t

            nextGrid[x][y].a = constrain(nextGrid[x][y].a, 0, 1)
            nextGrid[x][y].b = constrain(nextGrid[x][y].b, 0, 1)

        }
    }

    loadPixels();
    for (let x = 0; x < width; x++) {

        for (let y = 0; y < height; y++) {
            let index = (x + y * width) * 4
            let c = color(255, 0, 100);
            pixels[index + 0] = floor(nextGrid[x][y].a * 255);
            pixels[index + 1] = 0
            pixels[index + 2] = floor(nextGrid[x][y].b * 255);
            pixels[index + 3] = 200
        }
    }
    updatePixels();
    swap();
}

function swap() {
    //very fundemental swapping concept
    let tempGrid = grid;
    grid = nextGrid;
    nextGrid = tempGrid;
}

function laplaceA(x, y) {
    let sumA = 0;
    sumA += grid[x][y].a * -1;
    sumA += grid[x - 1][y].a * 0.2;
    sumA += grid[x + 1][y].a * 0.2;
    sumA += grid[x][y + 1].a * 0.2;
    sumA += grid[x][y - 1].a * 0.2;
    sumA += grid[x - 1][y - 1].a * 0.05;
    sumA += grid[x + 1][y - 1].a * 0.05;
    sumA += grid[x + 1][y + 1].a * 0.05;
    sumA += grid[x - 1][y + 1].a * 0.05;

    return sumA;
}

function laplaceB(x, y) {
    let sumB = 0;
    sumB += grid[x][y].b * -1;
    sumB += grid[x - 1][y].b * 0.2;
    sumB += grid[x + 1][y].b * 0.2;
    sumB += grid[x][y + 1].b * 0.2;
    sumB += grid[x][y - 1].b * 0.2;
    sumB += grid[x - 1][y - 1].b * 0.05;
    sumB += grid[x + 1][y - 1].b * 0.05;
    sumB += grid[x + 1][y + 1].b * 0.05;
    sumB += grid[x - 1][y + 1].b * 0.05;

    return sumB;
}