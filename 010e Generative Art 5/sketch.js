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
  strokeWeight(2);
  for (let i = 0; i < 90; i++) {
    x = 20;
    frequency = 1;
    while (x < width - 20) {
      let mappedX = map(x, 20, width - 20, 0, 1.5 * PI);
      y = map(i,0,89,50,height-50) + 20 * sin(frequency * mappedX);
      point(x, y);
      x++;
      frequency += 0.01;
    }
  }
}

