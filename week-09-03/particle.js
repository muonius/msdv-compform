function Particle(x, y, img) {
  this.hue = random(360);
  const options = {
    restitution: 0.3,
    friction: 0.3,
    density: 0.5,
  };
  // x += random(-1, 1);
  this.body = Bodies.rectangle(x, y, 100, 100, options);
  this.body.label = "particle";
  this.img = img;
  World.add(world, this.body);
}

Particle.prototype.show = function () {
  let pos = this.body.position;
  let angle = this.angle;
  push();
  //translate is cumulative
  translate(pos.x, pos.y);
  rectMode(CENTER);
  rotate(angle);
  image(this.img, 0, 0, 150, 150);
  pop();
};

Particle.prototype.isOffScreen = function () {
  let x = this.body.position.x;
  let y = this.body.position.y;
  return x < -50 || x > width + 50;
};

function Box(x, y, img) {
  this.hue = random(360);
  const options = {
    restitution: 0.3,
    friction: 0.3,
    density: 0.5,
  };
  // x += random(-1, 1);
  this.body = Bodies.rectangle(x, y, 100, 100, options);
  this.body.label = "particle";
  this.img = img;
  World.add(world, this.body);
}

Box.prototype.show = function () {
  let pos = this.body.position;
  let angle = this.angle;
  push();
  //translate is cumulative
  translate(pos.x, pos.y);
  rectMode(CENTER);
  rotate(angle);
  image(this.img, 0, 0, 250, 60);
  pop();
};
