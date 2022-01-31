// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

const points = [];
const pos = [];
let newPos;
let offset = 120;

function setup() {
    createCanvas(500, 500);
    noStroke();
    fill(255, 255, 255);
    noLoop();
}

function draw() {
    function drawVertex(count, radius, margin, offset) {
        //Create grid of grid
        for (let j = 0; j < count; j++) {
            push();
            translate(0, j * offset)
            for (let i = 0; i < 4; i++) {
                createGrid(count, radius, margin)
                translate(offset, 0)
                // console.log(i, j)
            }
            pop();

        }

        //Use vertex to draw random connecting lines
        for (let k = 0; k < count; k++) {
            translate(k * offset, 0)

            push();
            for (let j = 0; j < (count - 1) * (count - 1); j++) {
                translate(0, j * offset)
                strokeWeight(1);
                stroke(139, 0, 0);
                beginShape(LINES);
                for (let i = 0; i < count * count; i++) {
                    newPos = shuffle(pos)
                    vertex(newPos[i][0], newPos[i][1])
                }
                endShape();
            }
            pop();
        }
    }

    //Base grid function
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

    drawVertex(5, 3, 50, 120)
    // console.log(shuffle(pos.slice(0, 25)));
}

