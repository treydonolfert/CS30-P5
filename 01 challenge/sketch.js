// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}
let state = 0;
let x = 50;
let y = 0;
function draw() {
  background(220);
  square(x,y,50);
  if (state === 0) {
    x += 10;
    if (x === 350) {
      state = 1;
    }
  }
  if (state === 1) {
    y += 10;
    if (y === 350) {
      state = 2;
    }
  }
  if (state === 2) {
    x -= 10;
    if (x === 0) {
      state = 3;
    }
  }
  if (state === 3) {
    y -= 10;
    if (y === 0) {
      state = 0;
    }
  }
}
