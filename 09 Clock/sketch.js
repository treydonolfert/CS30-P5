// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  strokeWeight(5);
  circle(width/2,height/2,width/2)
  translate(250,250);
  strokeWeight(3);
  hourTicks();
}

function hourTicks() {
  for (let i = 1; i <= 12; i++) {
    rotate(i*(PI/6));
    line(0,-60,0,-115);
  }
}
