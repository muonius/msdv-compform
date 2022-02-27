
let heads = [];
let deckPos = 0;
let size = 0.05
let points = [];

function preload() {
    for (i = 0; i < 10; i++) {
        heads[i] = loadImage('https://raw.githubusercontent.com/muonius/msdv-compform/master/week-05/assets/doraemon-' + i + '.png');
    }
    // console.log(heads)
}

//Declare imageDeck function
function imageDeck() {
    let v = deckPos;
    deckPos++;
    if (deckPos == heads.length) {
        heads = shuffle(heads);
        deckPos = 0;
    }
    return v;
}

function setup() {
    createCanvas(400, 400);

}

function draw() {
    background('#19abff');

    noStroke();
    ellipseMode(CENTER);

    placePointsTiles(width / 250, width, height)

    console.log(points)

    for (let j = 0; j < points.length; j++) {
        // these points are not scattered in the same way
        // how can you make the arrangement match the challenge?

        let m = heads.length;

        push();
        image(heads[j % m], points[j % m].x, points[j % m].y, heads[j % m].width * size, heads[j % m].height * size);
        pop();

        // imageDeck()
        // size += 0.01;
        console.log(m)
    }

    noLoop();
}



// place points from premade "tiles"
function placePointsTiles(grid_size, width, height) {


    let tile1 = [
        {
            x: 0.049009,
            y: 0.497592,
        },
        {
            x: 0.145142,
            y: 0.47847,
        },
        {
            x: 0.235699,
            y: 0.44096,
        },
        {
            x: 0.317197,
            y: 0.386505,
        },
        {
            x: 0.386505,
            y: 0.317196,
        },
        {
            x: 0.440961,
            y: 0.235698,
        },
        {
            x: 0.47847,
            y: 0.145142,
        },
        {
            x: 0.497592,
            y: 0.049008,
        },
        {
            x: 0.950991,
            y: 0.502407,
        },
        {
            x: 0.854858,
            y: 0.52153,
        },
        {
            x: 0.764302,
            y: 0.559039,
        },
        {
            x: 0.682803,
            y: 0.613495,
        },
        {
            x: 0.613495,
            y: 0.682803,
        },
        {
            x: 0.559039,
            y: 0.764301,
        },
        {
            x: 0.52153,
            y: 0.854858,
        },
        {
            x: 0.502408,
            y: 0.950991,
        },
    ];

    let tile2 = [
        {
            x: 0.497592,
            y: 0.950991,
        },
        {
            x: 0.47847,
            y: 0.854857,
        },
        {
            x: 0.440961,
            y: 0.764301,
        },
        {
            x: 0.386505,
            y: 0.682803,
        },
        {
            x: 0.317196,
            y: 0.613494,
        },
        {
            x: 0.235698,
            y: 0.559039,
        },
        {
            x: 0.145142,
            y: 0.521529,
        },
        {
            x: 0.049008,
            y: 0.502407,
        },
        {
            x: 0.502408,
            y: 0.049008,
        },
        {
            x: 0.52153,
            y: 0.145142,
        },
        {
            x: 0.55904,
            y: 0.235698,
        },
        {
            x: 0.613495,
            y: 0.317196,
        },
        {
            x: 0.682804,
            y: 0.386505,
        },
        {
            x: 0.764302,
            y: 0.44096,
        },
        {
            x: 0.854858,
            y: 0.47847,
        },
        {
            x: 0.950992,
            y: 0.497592,
        },
    ];

    let tile3 = [
        {
            x: 0.497592,
            y: 0.950991,
        },
        {
            x: 0.049008,
            y: 0.502407,
        },
        {
            x: 0.502408,
            y: 0.049008,
        },
        {
            x: 0.592227,
            y: 0.592227,
        },
        {
            x: 0.407773,
            y: 0.592227,
        },
        {
            x: 0.407773,
            y: 0.407773,
        },
        {
            x: 0.592227,
            y: 0.407773,
        },
        {
            x: 0.950992,
            y: 0.497592,
        },
        {
            x: 0.498734,
            y: 0.737245,
        },
        {
            x: 0.498163,
            y: 0.8441,
        },
        {
            x: 0.499304,
            y: 0.630427,
        },
        {
            x: 0.500696,
            y: 0.369573,
        },
        {
            x: 0.501837,
            y: 0.155899,
        },
        {
            x: 0.155899,
            y: 0.501837,
        },
        {
            x: 0.369573,
            y: 0.500696,
        },
        {
            x: 0.630427,
            y: 0.499304,
        },
        {
            x: 0.8441,
            y: 0.498163,
        },
        {
            x: 0.501267,
            y: 0.262754,
        },
        {
            x: 0.262754,
            y: 0.501266,
        },
        {
            x: 0.737246,
            y: 0.498733,
        },
    ];

    // randomSeed(4);

    for (let y = 0; y < grid_size; y++) {
        for (let x = 0; x < grid_size; x++) {
            let r = random();
            let t = tile1;
            if (r > 0.4) {
                t = tile2;
            }
            if (r > 0.8) {
                t = tile3;
            }
            for (let k = 0; k < t.length; k++) {
                let pX = (t[i].x * width) / grid_size + (x * width) / grid_size;
                let pY = (t[i].y * height) / grid_size + (y * width) / grid_size;
                points.push({
                    x: pX,
                    y: pY,
                });
            }
        }
    }

    return points;
}