
// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js


function setup() {
    createCanvas(1800, 1800);
    noStroke();
    fill(255, 255, 255);
    noLoop();
}

function draw() {

    const createGrid = () => {
        const points = [];
        const count = 50;
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
    let radius;
    radius = random(0, 5);
    const margin = 50;

    push();
    points.forEach(([u, v]) => {
        const x = lerp(margin, width - margin, u);
        const y = lerp(margin, height - margin, v);
        // console.log([x, y])
        stroke(224, 0, 0);
        fill(224, 0, 0);
        ellipse(x, y, radius, radius);
    })
    pop();

}
