// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const g = -9.81;
let scale = 10; //used for converting meters to pixels
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  text("1 pixel = 0.1 meters", 0, 20);
  for (i of balls) {
    i.move();
    i.display();
  }
}

class Ball {
  constructor(vX,vY) {
    this.vX = vX;
    this.vY = vY;
    this.x = mouseX;
    this.y = mouseY;
  }

  move() {
    this.vY += g * (deltaTime/1000);
    this.x += scale * this.vX * (deltaTime/1000);
    this.y -= scale * this.vY * (deltaTime/1000);
  }

  display() {
    circle(this.x, this.y, 25);
    line(this.x, this.y, this.x + 10 * this.vX, this.y);
    line(this.x, this.y, this.x, this.y - 10 * this.vY);
  }
}

function mousePressed() {
  balls.push(new Ball(20,20));
}