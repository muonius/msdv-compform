//how to make things bounce?
//friction and restitution
//gravity is part of the world
//play with density (mass)
//time step variable engine.update delta

function Particle(x, y, w, h) {
  this.hue = random(360);
  const options = {
    restitution: 0.3,
    friction: 0,
    density: 0.01,
  };
  x += random(-1, 1);
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.body.label = "particle";
  World.add(world, this.body);
}

Particle.prototype.show = function () {
  fill(this.hue, 255, 255);
  stroke(255);
  let pos = this.body.position;
  //translate is cumulative
  push();
  translate(pos.x, pos.y);
  rect(0, 0, this.w, this.h);
  pop();
};

Particle.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -50 || x > width + 50;
};
