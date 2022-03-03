// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
/* exported setup draw */

function setup() {
    createCanvas(550, 550);
    noLoop();
  }
  
  // function draw() {
  //   background(100);
  //   noStroke();
  //   textSize(18);
  //   textAlign(CENTER, CENTER);
  
  //   for (let row = 0; row < 10; row++) {
  //     for (let col = 0; col < 10; col++) {
  //       // edit below
  //       const id =10* col + row;
  //       const x = row * 50 + 50;
  //       const y = col * 50 + 50;
  //       // edit above
  
  //       fill("#ccc");
  //       ellipse(x, y, 40, 40);
  //       fill("black");
  //       text(id, x, y);
  //     }
  //   }
  // }
  
  function draw() {
    background(100);
    noStroke();
    textSize(18);
    textAlign(CENTER, CENTER);
  
    for (let id = 0; id < 100; id++) {
      // edit below
      const col = id % 10;
      const row = floor(id/col);
      const x = row * 50 + 50;
      const y = col * 50 + 50;
      // edit above
  
      fill("#ccc");
      ellipse(x, y, 40, 40);
      fill("black");
      text(id, x, y);
    }
  }