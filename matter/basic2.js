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

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  ground = new Box(250, height - 50, width, 100, { isStatic: true });
  console.log(ground);
  Runner.run(engine);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 20), random(10, 30)));
}

function draw() {
  background(51);
  fill(255);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  push();
  strokeWeight(4);
  stroke(50);
  fill(150);
  rectMode(CENTER);
  rect(ground.body.position.x, ground.body.position.y, width, 100);
  pop();
}
