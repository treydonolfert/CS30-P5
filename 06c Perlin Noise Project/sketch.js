// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectWidth = 5;
let changeHeight = 5;
let currentHighest = -1;
let highestX = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawRectangles();
}

function drawRectangles() {
  let rectHeight;
  // fill(0); 
  for (let x = 0; x < width; x += rectWidth) {
    rectHeight = noise(changeHeight);
    rectHeight = map(rectHeight,0,1,-0.8 * height,0);
    if (rectHeight < currentHighest) {
      currentHighest = rectHeight;
      highestX = x;
    }
    changeHeight += 0.005;
    rect(x,height,rectWidth,rectHeight);
  }
  drawFlag(highestX, currentHighest);
}

function drawFlag(x,y) {
  line(x,-y,x,-y-50);
  triangle(x,-y-25,x,-y-50,x+5,-y-12.5);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && rectWidth < width) {
    rectWidth++;
    background(255);
    drawRectangles();
  } else if (keyCode === LEFT_ARROW && rectWidth > 1) {
    rectWidth--;
    background(255);
    drawRectangles();
  }
}

function draw() {

}
