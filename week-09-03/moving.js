// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Body = Matter.Body,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events,
  Common = Matter.Common;
Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.getElementById("alphabet-n"),
  engine: engine,
  options: {
    width: 300,
    height: 300,
    wireframes: false,
    pixelRatio: "auto",
    background: "transparent",

    // showAngleIndicator: true,
  },
});

function preload() {
  const comp = loadImage("./assets/computational.svg");
  const form = loadImage("./assets/form.svg");
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0.2;
  frameRate(60);
}

function draw() {
  background(255);
  Engine.update(engine, 16.66);
  const compShape = new Particle(50, 0, comp);
  // console.log(compShape);
}

// create two boxes and a ground
var boxA = Bodies.circle(150, 200, 70, {
  render: {
    fillStyle: "#FF2C55",
  },
});
var boxB = Bodies.circle(150, 200, 30, {
  render: {
    fillStyle: "#FFFFFF",
  },
});
var boxC1 = Bodies.rectangle(142, 90, 108, 40, {
  render: {
    fillStyle: "#24D6FF",
  },
});

var boxC2 = Bodies.rectangle(212, 90, 52, 40, {
  render: {
    fillStyle: "#24D6FF",
  },
});

var boxC = Body.create({
  parts: [boxC1, boxC2],
});

var boxD = Bodies.rectangle(150, 55, 48, 32, {
  render: {
    fillStyle: "#00D1A9",
  },
});

var constraintC = Constraint.create({
  pointA: { x: 150, y: 90 },
  bodyB: boxC,
  length: 2,
  stiffness: 0.05,
  damping: 0.001,
  render: {
    visible: false,
  },
});

var constraintD = Constraint.create({
  pointA: { x: 150, y: 55 },
  bodyB: boxD,
  length: 0,
  stiffness: 0.005,
  damping: 0.01,
  render: {
    visible: false,
  },
});

var circleChar = Body.create({
  parts: [boxA, boxB],
});

var constraintCircle = Constraint.create({
  pointA: { x: 150, y: 200 },
  bodyB: circleChar,
  length: 0,
  stiffness: 0.001,
  damping: 0.01,
  render: {
    visible: false,
  },
});
// var compound = Body.create({
//     parts: [boxC, boxD],
//     isStatic: false
// })

// add all of the bodies to the world
World.add(engine.world, [circleChar, constraintCircle, boxD, constraintD]);

World.add(engine.world, [boxC, constraintC]);

World.add(engine.world, [
  // walls
  Bodies.rectangle(150, 0, 300, 40, {
    isStatic: true,
    render: { fillStyle: "transparent" },
  }),
  Bodies.rectangle(150, 300, 300, 60, {
    isStatic: true,
    render: { fillStyle: "transparent" },
  }),
  Bodies.rectangle(300, 150, 70, 300, {
    isStatic: true,
    render: { fillStyle: "transparent" },
  }),
  Bodies.rectangle(0, 150, 70, 300, {
    isStatic: true,
    render: { fillStyle: "transparent" },
  }),
]);

var counter = 0;
var moveX = 5;

Events.on(engine, "beforeUpdate", function (event) {
  counter += 1;

  if (counter >= 60) {
    Body.setVelocity(circleChar, { x: moveX, y: -7 });

    moveX = moveX * -1;

    counter = 0;
  }
});

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
