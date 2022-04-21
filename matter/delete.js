//reason why you need to delete bodies because once
//a particle moves off the screen you want JS to ignore it
//otherwise it will run very slow

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
let boundaries = [];
let circles = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  boundaries.push(new Boundary(150, 200, width * 0.4, 20, 0.4, "brown"));
  boundaries.push(new Boundary(250, 400, width * 0.6, 80, -0.3, "black"));
  boundaries.push(new Boundary(350, 300, width * 0.8, 2, -1.2, "black"));
  Runner.run(engine);
  frameRate(60);
}

function draw() {
  background("FloralWhite");

  //   boxes.push(new Box(random(200), 50, random(10, 30), random(20, 50)));
  circles.push(new Circles(200, 100, random(10, 30)));

  fill(255);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);

      i--;
    }
  }
  console.log(circles.length, world.bodies.length);
}
