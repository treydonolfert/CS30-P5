// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(500, 500);
}
let state = 0;
let x = 0;
let y = 0;
let z = 25;
let speed = 10;
function draw() {
  background(220);
  square(x,y,z);
  if (state === 0) {
    x += speed;
    if (x === 350) {
      state = 1;
    }
  }
  if (state === 1) {
    y += speed;
    if (y === 350) {
      state = 2;
    }
  }
  if (state === 2) {
    x -= speed;
    if (x === 0) {
      state = 3;
    }
  }
  if (state === 3) {
    y -= speed;
    if (y === 0) {
      state = 0;
    }
  }
}

function keyPressed(){
  if (keyCode === 65){
    z = 5;
  }
  if (keyCode === 68){
    z = 50;
  }

  if (keyCode === 83){
    speed -= 5;
  }
  if (keyCode === 87){
    speed = 50;
  }
}
