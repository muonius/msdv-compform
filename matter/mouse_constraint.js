let Engine = Matter.Engine;
let World = Matter.World;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

let engine;
//world is the world inside of an engine
let world;
let boxes = [];
let ground;
let p;
let particles = [];
let mConstraint;

function setup() {
  let canvas = createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  ground = new Box(250, height - 50, width, 100, { isStatic: true });

  let prev = null;

  for (let x = 200; x < 400; x += 40) {
    let fixed = false;
    if (!prev) {
      fixed = true;
    }
    p = new Particle(x, 100, 20, fixed);
    particles.push(p);

    if (prev) {
      let options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 40,
        stiffness: 0.4,
      };

      let constraint = Constraint.create(options);
      World.add(world, constraint);
    }

    prev = p;
  }

  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  console.log(canvasMouse);
  let optionsMouse = {
    mouse: canvasMouse,
  };

  mConstraint = MouseConstraint.create(engine, optionsMouse);
  World.add(world, mConstraint);

  Runner.run(engine);
}

function draw() {
  background(51);
  fill(255);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
  }

  let lineX1 = particles[0].body.position.x;
  let lineY1 = particles[0].body.position.y;
  let lineX2 = particles[1].body.position.x;
  let lineY2 = particles[1].body.position.y;

  //note that the line is visible but has no physics properties
  line(lineX1, lineY1, lineX2, lineY2);

  push();
  strokeWeight(4);
  stroke(50);
  fill(150);
  rectMode(CENTER);
  rect(ground.body.position.x, ground.body.position.y, width, 100);
  pop();
}
