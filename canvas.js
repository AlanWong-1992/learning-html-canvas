var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(20, 100, 100, 100);

// Arc Circle
// for (var i = 0; i <10; i++) {
//   var radius = 30
//   var x = Math.random() * innerWidth;
//   var y = Math.random() * innerHeight;
//   var moveRightToLeft = Math.random() >= 0.5;
//   var moveUpToDown = Math.random() >= 0.5;
//   var speed = Math.random() * 10;
//
// }


// console.log(random_boolean);

class Circle {
  constructor(context, radius, x, y, moveRightToLeft, moveUpToDown, speed, color) {
    this.c = context;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.moveRightToLeft = moveRightToLeft;
    this.moveUpToDown = moveUpToDown;
    this.speed = speed;
    this.draw = () => {
      this.c.beginPath();
      this.c.arc(x, y, radius, 0, Math.PI * 2, false);
      this.c.strokeStyle = color;
      this.c.stroke();
    };
    this.move = () => {
      moveRightToLeft ? x += speed : x -= speed;
      moveUpToDown ? y += speed : y -= speed;

      if (x >= (innerWidth - radius) || x <= radius ) {
        moveRightToLeft = !moveRightToLeft;
      }

      if (y >= (innerHeight - radius) || y <= radius ) {
        moveUpToDown = !moveUpToDown;
      }
      this.draw();
    };
  }
}

var circles = [];

for (var i = 0; i <10; i++) {
  var radius = 30
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var moveRightToLeft = Math.random() >= 0.5;
  var moveUpToDown = Math.random() >= 0.5;
  var speed = Math.random() * 10;
  var colorRed = Math.round(Math.random() * 255);
  var colorGreen = Math.round(Math.random() * 255);
  var colorBlue = Math.round(Math.random() * 255);
  var colorAlpha = Math.random() * 255;
  var color = `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${colorAlpha})`;

  let i = new Circle(c, radius, x, y, moveRightToLeft, moveUpToDown, speed, color);
  // i.move();
  i.draw();
  circles.push(i);
}


var animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach((circle, index) => {
    circle.move();
  })
  // c.clearRect(0, 0, innerWidth, innerHeight);
  // c.beginPath();
  // c.arc(x, y, radius, 0, Math.PI * 2, false);
  // c.strokeStyle = 'blue';
  // c.stroke();
  //
  // moveRightToLeft ? x += speed : x -= speed;
  // moveUpToDown ? y += speed : y -= speed;
  //
  // if (x >= (innerWidth - radius) || x <= radius ) {
  //   moveRightToLeft = !moveRightToLeft;
  // }
  //
  // if (y >= (innerHeight - radius) || y <= radius ) {
  //   moveUpToDown = !moveUpToDown;
  // }
}

animate();

// for (var i = 0; i<10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var colorRed = Math.round(Math.random() * 255);
//   var colorGreen = Math.round(Math.random() * 255);
//   var colorBlue = Math.round(Math.random() * 255);
//   var colorAlpha = Math.random() * 255;
//
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, ${colorAlpha})`;
//   c.stroke();
// }
