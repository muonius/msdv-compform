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

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  ground = new Box(250, height - 50, width, 100, { isStatic: true });

  for (let x = 20; x < 380; x += 20) {
    p = new Circles(x, 100, 10);
    particles.push(p);
  }

  // let options = {
  //   bodyA: p1.body,
  //   bodyB: p2.body,
  //   length: 50,
  //   stiffness: 0.4,
  // };

  // let constraint = Constraint.create(options);
  // World.add(world, constraint);

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
