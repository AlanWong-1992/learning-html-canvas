var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var maxRadius = 40;
var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

class Circle {
  constructor(radius, x, y, dx, dy, color) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.minRadius = radius;
    this.maxRadius = maxRadius;

    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      // c.strokeStyle = this.color;

      c.stroke();

    };

    this.update = () => {

      // Detects wall collision on x axis
      if (this.x + this.radius > window.innerWidth || this.x -this.radius < 0) {
        this.dx = -this.dx;
      }

      // Detects wall collision on y axis
      if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      // interactivity
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.radius < this.maxRadius) {
        this.radius += 0.8;
      } else if (this.radius > this.minRadius) {
        this.radius -= 0.8;
      }

      this.draw();
    };
  }
}

var circles = [];
var init = () => {
  circles = [];
  for (var i = 0; i <100; i++) {
    var radius = (Math.random() * 28) + 2;
    var x = Math.random() * (innerWidth - 2 * radius) + radius;
    var y = Math.random() * (innerHeight - 2 * radius) + radius;
    var dx = Math.random() * -0.5;
    var dy = Math.random() * -0.5;
    var colorRed = Math.round(Math.random() * 255);
    var colorGreen = Math.round(Math.random() * 255);
    var colorBlue = Math.round(Math.random() * 255);
    var colorAlpha = Math.random() * 255;
    var color = `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${colorAlpha})`;

    circles.push(new Circle(radius, x, y, dx, dy, color));
  }
}

init();
var animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach((circle, index) => {
    circle.update();
  })
}

animate();
