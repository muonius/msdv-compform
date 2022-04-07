let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

let engine;
//world is the world inside of an engine
let world;
let box1;
let letters = [];
let bounds = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.2;
  box1 = Bodies.rectangle(400, 200, 80, 80);
  Engine.run(engine);
  World.add(world, box1);
}

function draw() {
  background(51);
  fill(255);
  rect(box1.position.x, box1.position.y, 80, 80);
}
