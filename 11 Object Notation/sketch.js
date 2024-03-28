// Object Notation
// Treydon Olfert
// March 28, 2024
// Look at object notation

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function spawnBall(initialX, initialY) {
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xSpeed: random(-5,5),
    ySpeed: random(-5,5),
  };
  ballArray.push(ball);
}

function draw() {
  background(220);
  for (let b of ballArray) {
    b.x += b.xSpeed;
    if (b.x < 0 || b.x > width) {
      b.xSpeed *= -1;
    }
    b.y += b.ySpeed;
    if (b.y < 0 || b.y > height) {
      b.ySpeed *= -1;
    }
    circle(b.x,b.y,b.radius);
  }
}
