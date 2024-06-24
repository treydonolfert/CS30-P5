// Cars
// Treydon Olfert
// April 15, 2024
// Cars and traffic shown with classes

//Global variables
let eastbound = [];
let westbound = [];
let radius = 40;
let light;
let frames1, frames2;

function drawRoad() { //draws black rectangle for road and uses for loop to draw the road line
  fill(0);
  rect(0, height/4, width, height/2);
  stroke(255, 255, 0);
  strokeWeight(5);
  for (let i = 0; i < width; i+= 40) {
    line(i, height/2, i + 20, height/2);
  }
  noStroke();
}


function setup() { //makes traffic light object and makes all of the vehicle objects
  createCanvas(windowWidth, windowHeight, WEBGL); //uses WEBGL for one of the car types, which is 3D
  noStroke();
  light = new TrafficLight;
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(1.1 * height/2, 0.95 * 3 * height/4), 1, int(random(16)))); 
    westbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), random(width), random(1.1 * height/4, 0.9 * height/2), 0, -1 * int(random(16))));
  }
}

function draw() { //draws road, cars, and traffic light each frame
  background(220);
  frames1 = frameCount;
  translate(-width/2, -height/2, 0); //converts the WEBGL coordinate system to the standard p5 coordinate system
  drawRoad();
  if (frames1 - frames2 >= 120) light.state = 1;
  for (i of eastbound) {
    i.action();
  }
  for (i of westbound) {
    i.action();
  }
  light.display();
}

function mousePressed() { //shift + mouse = eastbound car, mouse = westbound car
  if (keyIsDown(SHIFT)) {
    eastbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), mouseX, random(1.1 * height/2, 0.95 * 3 * height/4), 1, int(random(16))));
  }
  else {
    westbound.push(new Vehicle(int(random(2)), color(random(255), random(255), random(255)), mouseX, random(1.1 * height/4, 0.9 * height/2), 0, -1 * int(random(16))));
  }
}

function keyPressed() { //space key changes light to red and starts the frame timer
  if (key === ' ') {
    light.state = 0;
    frames2 = frameCount;
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

  action() { //1% chance each frame for speedUp(), speedDown(), and changeColor()
    if (int(random(100)) === 0) {
      this.speedUp();
    }
    if (int(random(100)) === 0) { 
      this.speedDown();
    }
    if (int(random(100)) === 0) {
      this.changeColor();
    }
    if (light.state === 1) { //no moving when the light is red
      this.move();
    }
    this.display();
  }

  display() {
    if (this.type === 0) { //2D model of car
      noStroke();
      fill('brown');
      rect(this.x + 10, this.y - 5, 10, 40);
      rect(this.x + 30, this.y - 5, 10, 40);
      fill(this.color);
      rect(this.x, this.y, 50, 30);
    } else if (this.type === 1) { //3D model of car
      let coefficient;
      fill(this.color);
      stroke(0);
      strokeWeight(1);
      if (this.direction === 0) { //since the car is only 2 wheels, this helps place the wheels in the right spot for what side of the road it's on
        coefficient = -1;
      }
      else {
        coefficient = 1;
      }
      push();
      translate(this.x, this.y, 40);
      box(70, 30, 40);
      translate(coefficient * -20, -15, 0);
      push();
      rotateY(this.xSpeed * frameCount / 20); //uses rotational kinematics to determine angle
      cone(20, 40);
      pop();
      translate(0, 30, 0);
      push();
      rotateY(this.xSpeed * frameCount / 20);
      cone(20, -40);
      pop();
      pop();
    }
  }

  move() { //makes sure the cars are within the canvas and changes position afterwards
    if (this.x + this.xSpeed > width) {
      this.x = 0;
    }
    if (this.x + this.xSpeed < 0) {
      this.x = width;
    }
    this.x += this.xSpeed;
  }

  speedUp() { //increases car speeds
    if (this.direction === 1 && this.xSpeed < 15) {
      this.xSpeed++;
    }
    else if (this.xSpeed > -15) {
      this.xSpeed--;
    }
  }

  speedDown() { //decreases car speeds
    if (this.direction === 1 && this.xSpeed > 0) {
      this.xSpeed--;
    }
    else if (this.xSpeed < 0) {
      this.xSpeed++;
    }
  }

  changeColor() { //changes car color
    this.color = color(random(255), random(255), random(255));
  }
}

class TrafficLight {
  constructor() {
    this.state = 1;
    this.x = 0.1 * width/2;
    this.y = height/2 - 25
  }

  display() { //displays the traffic light, changes fill colors depending on what state the light is in
    fill('yellow');
    rect(this.x, this.y, 20, 50);
    if (this.state === 0) fill(255,0,0);
    else fill(0);
    square(this.x + 4, this.y + 4, 13);
    if (this.state === 1) fill(0,100,0);
    else fill(0);
    square(this.x + 4, this.y + 25, 13);
  }
}