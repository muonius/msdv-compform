let img;
let particlesArray = [];
const numberOfParticles = 5000;
let mappedImage = [];
let drawing;

function preload() {
  img = loadImage("./assets/Olivier.png");
  // img.resize(300,300)
}

function setup() {
  createCanvas(600, 600)
}

function draw() {

  img.loadPixels()

  for (let y = 0; y < img.height; y++) {
    let row = [];
    for (let x = 0; x < img.width; x++) {
      const red = getQuick(img, x, y)[0];
      const green = getQuick(img, x, y)[1];
      const blue = getQuick(img, x, y)[2];
      const brightness = calculateRelativeBrightness(red, green, blue)
      const cell = [
        cellBrightness = brightness
      ]
      row.push(cell)
    }
    mappedImage.push(row)
  }




  function getQuick(img, x, y) {
    const i = (y * img.width + x) * 4;
    return [
      img.pixels[i],
      img.pixels[i + 1],
      img.pixels[i + 2],
      img.pixels[i + 3],
    ];
  }

  function calculateRelativeBrightness(red, green, blue) {
    return Math.sqrt(
      (red * red) * 0.299 + (green * green) * 0.587 +
      (blue * blue) * 0.114
    )

  }

  class Particle {
    constructor() {
      this.x = Math.random() * img.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 2.5;
      this.size = Math.random() * 1.5 + 1;
      this.position1 = Math.floor(this.y)
      this.position2 = Math.floor(this.x)

    }
    update() {
      this.position1 = Math.floor(this.y)
      this.position2 = Math.floor(this.x)
      this.speed = mappedImage[this.position1][this.position2][0]

      let movement = this.speed + this.velocity
      this.y += movement
      if (this.y > img.height) {
        this.y = 0;
        this.x = Math.random() * img.width;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill();
    }
  }


  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle);
    }
  }
  init();

  function animate() {
    // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update()
      // ctx.globalAlpha = particlesArray[i].speed * 0.5;
      particlesArray[i].draw()
    }
    //requestAnimationFrame is a built in JS method
    requestAnimationFrame(animate);
  }
  animate();

})