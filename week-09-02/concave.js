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
let letters = [];

function preload() {
  for (let i = 1; i <= 8; i++) {
    letters.push(loadImage(`./assets/${i}.svg`));
  }
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 1;
  console.log(letters);
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
  let p = new Particle(random(300), 0, 20, 20);
  particles.push(p);
}
