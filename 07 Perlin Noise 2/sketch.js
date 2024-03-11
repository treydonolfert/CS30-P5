// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(500,500);
}
let diameter; let xSpeed;
let changeCircle = 10; let changexSpeed = 5;

function draw() {
  background(220);
  stroke(0);
  strokeWeight(1);
  line(width/2,0,width/2,height/2);
  line(0,height/2,width,height/2);
  stroke(0,0,255);
  strokeWeight(5);
  diameter = noise(changeCircle);
  diameter = map(diameter,0,1,0,width/2);
  changeCircle += 0.01;

  stroke(0);
  strokeWeight(1);
  xSpeed = noise(changexSpeed);
  xSpeed = map(xSpeed,0,1,0,width);
  changexSpeed += 0.1;
  rect(width/2+xSpeed,height/4,10,20);

  circle(width/4,height/4, diameter);
}
