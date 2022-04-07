// module aliases
let Engine = Matter.Engine,
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
let engine = Engine.create();

// create a renderer
let render = Render.create({
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

let imgComp;
let imgForm;

function preload() {
  imgComp = loadImage("./assets/computational.svg");
  imgForm = loadImage("./assets/form.svg");
}
// create two boxes and a ground
let boxA = Bodies.circle(150, 200, 70, {
  render: {
    fillStyle: "#FF2C55",
  },
});
function setup() {
  createCanvas(600, 600);
}
// function draw() {
//   let boxA = new Circle(150, 200, 70, imgComp);
//   boxA.show();
// }

let boxB = Bodies.circle(150, 200, 30, {
  render: {
    fillStyle: "#FFFFFF",
  },
});
let boxC1 = Bodies.rectangle(142, 90, 108, 40, {
  render: {
    fillStyle: "#24D6FF",
  },
});

let boxC2 = Bodies.rectangle(212, 90, 52, 40, {
  render: {
    fillStyle: "#24D6FF",
  },
});

let boxC = Body.create({
  parts: [boxC1, boxC2],
});

let boxD = Bodies.rectangle(150, 55, 48, 32, {
  render: {
    fillStyle: "#00D1A9",
  },
});

let constraintC = Constraint.create({
  pointA: { x: 150, y: 90 },
  bodyB: boxC,
  length: 2,
  stiffness: 0.05,
  damping: 0.001,
  render: {
    visible: false,
  },
});

let constraintD = Constraint.create({
  pointA: { x: 150, y: 55 },
  bodyB: boxD,
  length: 0,
  stiffness: 0.005,
  damping: 0.01,
  render: {
    visible: false,
  },
});

let circleChar = Body.create({
  parts: [boxA, boxB],
});

let constraintCircle = Constraint.create({
  pointA: { x: 150, y: 200 },
  bodyB: circleChar,
  length: 0,
  stiffness: 0.001,
  damping: 0.01,
  render: {
    visible: false,
  },
});
// let compound = Body.create({
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

let counter = 0;
let moveX = 5;

Events.on(engine, "beforeUpdate", function (event) {
  counter += 1;

  if (counter >= 60) {
    Body.setVelocity(circleChar, { x: moveX, y: -7 });

    moveX = moveX * -1;

    counter = 0;
  }
});

// add mouse control
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.5,
      render: {
        visible: false,
      },
    },
  });

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// run the engine
Matter.Runner.run(engine);

// run the renderer
Render.run(render);
