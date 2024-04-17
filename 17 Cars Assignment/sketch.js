// Cars
// Treydon Olfert
// April 15, 2024
// Cars using classes
let eastbound = [];
let westbound = [];

function drawRoad() {
  noStroke();
  fill(0);
  rect(0, height/4, width, height/2);
  stroke(255, 255, 0);
  strokeWeight(5);
  for (let i = 0; i < width; i+= 40) {
    line(i, height/2, i + 20, height/2);
  }
  noStroke();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(height/2, 3 * height/4), 1, int(random(16)))); //possibly round speed
    westbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(height/4, height/2), 0, -1 * int(random(16))));
  }
}

function draw() {
  background(220);
  drawRoad();
  for (i of eastbound) {
    i.action();
  }
  for (i of westbound) {
    i.action();
  }
}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  action() {
    if (int(random(99)) === 0) {
      this.speedUp();
    }
    if (int(random(99)) === 0) { 
      this.speedDown();
    }
    if (int(random(99)) === 0) {
      this.changeColor();
    }
    this.move();
    this.display();
  }

  display() {
    if (this.type === 0) {
      fill(this.color);
      circle(this.x, this.y, 50);
    }
  }

  move() {
    if (this.x + this.xSpeed > width) {
      this.x = 0;
    }
    if (this.x + this.xSpeed < 0) {
      this.x = width;
    }
    this.x += this.xSpeed;
  }

  speedUp() {
    if (this.direction === 1 && this.xSpeed < 15) {
      this.xSpeed++;
    }
    else if (this.xSpeed > -15) {
      this.xSpeed--;
    }
  }

  speedDown() {
    if (this.direction === 1 && this.xSpeed > 0) {
      this.xSpeed--;
    }
    else if (this.xSpeed < 0) {
      this.xSpeed++;
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}