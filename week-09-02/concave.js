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
let bounds = [];

function preload() {
  let img;
  for (let i = 1; i <= 8; i++) {
    img = loadImage(`./assets/${i}.svg`);
    img.resize(random(50, 100), random(20, 50));
    letters.push(img);
  }
  console.log(letters);
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.2;
  frameRate(60);
  // console.log(letters);

  //create outer bound
  let b = new Boundary(width / 2, height, width, 50);
  bounds.push(b);
}

function draw() {
  background(255);
  if (frameCount % 120 == 0) {
    newParticle();
  }
  Engine.update(engine, 16.66);
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
  for (let i = letters.length - 1; i >= 0; i--) {
    const offset = 50;
    let p = new Particle(50 + offset * i, 0, letters[i]);
    particles.push(p);
  }
}
