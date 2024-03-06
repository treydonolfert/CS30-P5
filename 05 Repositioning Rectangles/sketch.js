// Repositioning Rectangles
// Treydon Olfert
// March 6, 2024
// Creating geometry that can be moved around

let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let pickedUp = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth = 200; rHeight = 100;
}

function updateEdgePositions() {
  rLeft = x - rWidth/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y + rHeight/2;
}

function inRectangle() {
  if (mouseX < rRight && mouseX > rLeft) {
    if (mouseY > rTop && mouseY < rBottom) {
      return true;
    }
  }
  return false;
}

function drawRectangle() {
  updateEdgePositions();
  print("L: ", rLeft, "\tT: ",rTop, "\tR: ", rRight, "\b", rBottom);
  if (inRectangle()) {
    fill(100, 250, 150);
  }
  else {
    fill(255);
  }

  if(pickedUp) {
    x = mouseX;
    y = mouseY;
  }
  
  rect(x,y,rWidth,rHeight);
}

function mousePressed() {
  if (inRectangle()) {
    pickedUp = true;
  }
}

function mouseReleased() {
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}
