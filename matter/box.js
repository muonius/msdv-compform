function Box(x, y, w, h, optionReplace) {
  let options = {};
  if (optionReplace) {
    options = optionReplace;
  } else {
    options = {
      friction: 0.5,
      restitution: 1,
    };
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rotate(angle);
    strokeWeight(1);
    stroke(150);
    fill("red");
    rect(0, 0, this.w, this.h);
    pop();
  };
}
