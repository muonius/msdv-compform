let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
let Constraint = Matter.Constraint;
let Mouse = Matter.Mouse;
let MouseConstraint = Matter.MouseConstraint;
let Common = Matter.Common;
let Runner = Matter.Runner;

let engine;
//world is the world inside of an engine
let world;
let imgComp;
let imgForm;

function preload() {
  imgComp = loadImage("./assets/computational.svg");
  imgForm = loadImage("./assets/form.svg");

  console.log(imgComp);
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  box1 = Bodies.rectangle(400, 200, 80, 80);
  Runner.run(engine);
  World.add(world, box1);
}

function draw() {
  background(255);
  const img1 = new Particle(200, 200, imgComp);
  const img2 = new Box(100, 300, imgForm);
  img1.show();
  img2.show();
}
