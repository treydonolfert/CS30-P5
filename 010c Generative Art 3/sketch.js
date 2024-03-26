// Generative Art - Repetition
// Treydon Olfert
// March 25, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  stroke(0,80);
}

function randomElement(currentLen) {
  push();
  rotate(random(2*PI));
  while(currentLen > 5) {
    rotate(random(-PI/4,PI/4));
    line(0,0,0,currentLen);
    translate(0,currentLen);
    currentLen *= 0.75;
  }
  pop();
}

function draw() {
  translate(width/2,height/2);
  for(let i = 0; i < 1e3; i++) {
    randomElement(75);
  }
}
