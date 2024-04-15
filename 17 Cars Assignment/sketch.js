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
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(width/2, 3 * width/4), 1, random(0,255)))
    westbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(width/2, 3 * width/4), 0, -1 * random(0,255)))
  }
}

function draw() {
  background(220);
  drawRoad();
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

  }

  display() {

  }

  move() {

  }

  speedUp() {

  }

  speedDown() {

  }

  changeColor() {

  }
}