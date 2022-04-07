//how to make things bounce?
//friction and restitution
//gravity is part of the world
//play with density (mass)
//time step variable engine.update delta

function Box(x, y, img) {
  const options = {
    restitution: 0.3,
    friction: 0.3,
    density: 0.5,
  };
  this.x = x;
  this.y = y;
  this.body = Bodies.rectangle(x, y, 50, 25, options);
  this.body.label = "particle";
  this.img = img;
  World.add(world, this.body);
}

Box.prototype.show = function () {
  let pos = this.body.position;
  push();
  //translate is cumulative
  translate(pos.x, pos.y);
  image(this.img, 0, 0, 60, 30);
  pop();
};

function Circle(x, y, img) {
  const options = {
    restitution: 0.3,
    friction: 0.3,
    density: 0.5,
  };
  this.x = x;
  this.y = y;
  this.body = Bodies.circle(x, y, 50, options);
  this.body.label = "particle";
  this.img = img;
  World.add(world, this.body);
}

Circle.prototype.show = function () {
  let pos = this.body.position;
  push();
  //translate is cumulative
  translate(pos.x, pos.y);
  image(this.img, 0, 0, 60, 30);
  pop();
};
