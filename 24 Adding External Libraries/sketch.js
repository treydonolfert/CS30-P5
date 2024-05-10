// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let scribble = new Scribble();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  strokeWeight(4);
  scribble.scribbleLine(width/2,height/2,mouseX,mouseY);
  let radius = dist(width/2,height/2,mouseX,mouseY);
  scribble.scribbleEllipse(width/2,height/2,radius*2,radius*2);
}
