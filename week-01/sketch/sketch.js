
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(255, 255, 255);
    noLoop();
}

function draw() {

    const createGrid = () => {
        const points = [];
        const count = 5;
        for (let x = 0; x < count; x++) {
            for (let y = 0; y < count; y++) {
                const u = count <= 1 ? 0.5 : x / (count - 1);
                const v = count <= 1 ? 0.5 : y / (count - 1);
                points.push([u, v])
            }
        }
        return points;
    }

    const points = createGrid();

    console.log(points)

}
