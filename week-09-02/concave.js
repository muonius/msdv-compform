let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Events = Matter.Events;
// let MouseConstraint = Matter.MouseConstraint;
// let Mouse = Matter.Mouse;
let Composite = Matter.Composite;
// let Vertices = Matter.Vertices;
// let Svg = Matter.Svg;

let engine;
let world;
let particles = [];
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

function setup() {
  createCanvas(600, 800);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 1;
}

function draw() {
  background(50);
  if (frameCount % 60 == 0) {
    newParticle();
  }
  Engine.update(engine, 10.66);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      //remove the particle from the world as well
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
  }
}

function newParticle() {
  let p = new Particle(300, 0, 10, 10);
  particles.push(p);
}
