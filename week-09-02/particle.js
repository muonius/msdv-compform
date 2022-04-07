//how to make things bounce?
//friction and restitution
//gravity is part of the world
//play with density (mass)
//time step variable engine.update delta

function Particle(x, y, img) {
  this.hue = random(360);
  const options = {
    restitution: 0.3,
    friction: 0.3,
    density: 0.5,
  };
  // x += random(-1, 1);
  x = random(50, width - 50);
  y = random(0, 50);
  this.body = Bodies.circle(x, y, 25, options);
  this.body.label = "particle";
  this.img = img;
  World.add(world, this.body);
}

Particle.prototype.show = function () {
  let offset = 0;
  fill(this.hue, 255, 255);
  stroke(140);
  let pos = this.body.position;
  push();
  //translate is cumulative
  translate(pos.x + offset, pos.y);
  image(this.img, 0, 0, 60, 30);
  pop();
  offset += 60;
};

Particle.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -50 || x > width + 50;
};
