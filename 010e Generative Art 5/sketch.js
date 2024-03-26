// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let frequency = 1;
let x = 20;
let y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  while (x < width-20) {
    point(x,50+sin(frequency*x)); //try drawing line connecting dots
    x++;
    frequency += 0.001;
  }
}
