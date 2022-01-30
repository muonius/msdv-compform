
const points = [];
const pos = [];

function setup() {
    createCanvas(500, 500);
    noStroke();
    fill(255, 255, 255);
    noLoop();
}

function draw() {
    //1. Create grid of grid
    for (let j = 0; j < 5; j++) {
        push();
        translate(0, j * 120)
        for (let i = 0; i < 4; i++) {
            createGrid(5, 3, 50)
            translate(120, 0)
            console.log(i, j)
        }
        pop();

    }


    function createGrid(count, radius, margin) {
        for (let x = 0; x < count; x++) {
            for (let y = 0; y < count; y++) {
                const u = count <= 1 ? 0.5 : x / (count - 1);
                const v = count <= 1 ? 0.5 : y / (count - 1);
                points.push([u, v])
            }
        }

        points.forEach(([u, v]) => {
            push();
            const x = lerp(margin, width / 3 - margin, u);
            const y = lerp(margin, height / 3 - margin, v);
            pos.push([x, y])
            stroke(224, 0, 0);
            fill(224, 0, 0);
            ellipse(x, y, radius, radius);
            pop();
        })
    }
}

console.log(pos)