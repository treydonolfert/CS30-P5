// Cars
// Treydon Olfert
// April 15, 2024
// Cars using classes
let eastbound = [];
let westbound = [];
let radius = 40;

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
  createCanvas(windowWidth, windowHeight, WEBGL);
  translate(100, 100, 100);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(1.1 * height/2, 0.95 * 3 * height/4), 1, int(random(16)))); //possibly round speed
    westbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(1.1 * height/4, 0.9 * height/2), 0, -1 * int(random(16))));
  }
}

function draw() {
  background(220);
  translate(-width/2, -height/2, 0);
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
    } else if (this.type === 1) {
      let coefficient;
      fill(this.color);
      stroke(0);
      strokeWeight(1);
      if (this.direction === 0) {
        coefficient = -1;
      }
      else {
        coefficient = 1;
      }
      push();
      translate(this.x, this.y, 40);
      box(70, 30, 40);
      translate(coefficient * -20, -15, 0);
      cone(20, 40);
      translate(0, 30, 0);
      cone(20, -40);
      pop();
      // rotateX(0.01 * frameCount);
      // rotateY(0.01 * frameCount);
      // rotateZ(0.01 * frameCount);
      // cone(radius,70);
      // pop();
      noStroke();
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