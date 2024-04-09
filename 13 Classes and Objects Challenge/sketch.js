// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racer1; let racer2; let racer3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new RoundRacer(height/4, "red");
  racer2 = new RoundRacer(height/2, "blue");
  racer3 = new RoundRacer(3 * height/4, "green");
}

function draw() {
  background(220);
  racer1.move();
  racer2.move();
  racer3.move();
  racer1.display();
  racer2.display();
  racer3.display();
}

class RoundRacer {
  constructor(yPos, color) {
    this.xPosition = 0;
    this.yPosition = yPos;
    this.xSpeed = random(3,16);
    this.color = color;
  }

  move() {
    this.xPosition += this.xSpeed;
    if (this.xPosition >= width) {
      this.xPosition = 0;
    } 
  }

  display() {
    fill(color(this.color));
    circle(this.xPosition, this.yPosition, 25);
  }
}
