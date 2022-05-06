// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let globe;
let total = 25;
let offset = 0;
let m = 0;
let mchange = 0;
let a = 1;
let b = 1;

function setup() {
  createCanvas(600, 600, WEBGL);
  colorMode(HSB);
  globe = new Array((total + 1) * (total + 1));
}
function superShape(theta, m, n1, n2, n3) {
  let t1 = abs((1 / a) * cos((m * theta) / 4));
  t1 = pow(t1, n2);
  let t2 = abs((1 / b) * sin((m * theta) / 4));
  t2 = pow(t2, n3);
  let t3 = t1 + t2;
  let r = pow(t3, -1 / n1);
  return r;
}

function draw() {
  ambientLight(200);
  // directionalLight(255, 255, 255, 1, 0, 1);
  m = map(sin(mchange), -1, 1, 0, 7);
  mchange += 0.05;
  rotateX(mchange);
  background(0);
  noStroke();
  let r = 200;
  for (let i = 0; i < total + 1; i++) {
    let lat = map(i, 0, total, -HALF_PI, HALF_PI);
    let r2 = superShape(lat, m, 0.2, 1.7, 1.7);
    for (let j = 0; j < total + 1; j++) {
      let lon = map(j, 0, total, -PI, PI);
      let r1 = superShape(lon, m, 0.2, 1.7, 1.7);
      let x = r * r1 * cos(lon) * r2 * cos(lat);
      let y = r * r1 * sin(lon) * r2 * cos(lat);
      let z = r * r2 * sin(lat);

      let index = i + j * (total + 1);
      globe[index] = createVector(x, y, z);
    }
  }
  //   stroke(255);
  //   noFill();
  offset += 1;
  for (let i = 0; i < total; i++) {
    let hu = map(i, 0, total, 120, 290);
    fill(hu, 255, 255);
    // ambientMaterial((hu + offset) % 180, 50, 255);
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total + 1; j++) {
      let index1 = i + j * (total + 1);
      let v1 = globe[index1];
      curveVertex(v1.x, v1.y, v1.z);
      let index2 = i + 1 + j * (total + 1);
      let v2 = globe[index2];
      curveVertex(v2.x, v2.y, v2.z);
    }
    endShape(CLOSE);
  }
}
