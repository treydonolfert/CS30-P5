// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}
let diameter;
let change = 10;

function draw() {
  background(220);
  stroke(0,0,255);
  strokeWeight(5);
  diameter = noise(change);
  diameter = map(diameter,0,1,0,1000);
  change += 0.01;

  circle(width/2,height/2, diameter);
}
