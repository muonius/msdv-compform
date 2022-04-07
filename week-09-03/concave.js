let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;

let engine;
let world;
let particles = [];
let letters = [];
let bounds = [];

function preload() {
  const comp = loadImage(`./assets/computational.svg`);
  const form = loadImage(`./assets/form.svg`);
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.2;
  frameRate(60);
  let b = new Boundary(width / 2, height, width, 50);
  bounds.push(b);

  const boxA = Bodies.circle(150, 200, 70);
  let boxAPos = boxA.body.position;
  World.add(world, boxA);
}

function draw() {
  background(255);

  fill("#FF2C55");
  push();
  ellipse(boxAPos.x, boxAPos.y, 80);
  pop();
}
