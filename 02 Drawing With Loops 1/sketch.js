// Drawing With Loops 1
// Treydon Olfert
// February 27, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPos, yPos;
let color = 0;

function setup() {
  createCanvas(400, 300);
  xPos = []; yPos = [];
  outRing();
  //xPos = [width*0.05,width*0.95,width*0.05,width*0.95];
  //yPos = [height*0.05,height*0.05,height*0.95,height*0.95];
}

function initWithLoops() {
  for (let x = 10; x < width; x += 20) {
    xPos.push(x);
    yPos.push(height/2);
  }
}

function outRing() {
  for (let x = 0; x <= width; x += 40) {
    xPos.push(x);
    yPos.push(0);
  }
  for (let x = 0; x <= height; x += 30) {
    xPos.push(0);
    yPos.push(x);
  }
  for (let x = 400; x >= 0; x -= 40) {
    xPos.push(x);
    yPos.push(300);
  }
  for (let x = 300; x >= 0; x -= 30) {
    xPos.push(400);
    yPos.push(x);
  }
}

function draw() {
  background(220);
  cornersAndMouseLoop();
}

function mousePressed() {
  xPos.push(mouseX);
  yPos.push(mouseY);
}


function cornersAndMouseLoop() {
let i = 0;
while (i < xPos.length) {
  let x = xPos[i];
  let y = yPos[i];
  if (color === 0) {
    fill(255,0,0);
    color = 1;
  }
  else if (color === 1) {
    fill(0,255,0);
    color = 2;
  }
  else if (color === 2) {
    fill (0,0,255);
    color = 3;
  }
  else if (color === 3) {
    fill(255,255,0);
    color = 0;
  }
  print(color);
  triangle(xPos[i-1],yPos[i-1],x,y,mouseX,mouseY);
  fill(0,0,0);
  circle(x,y,20);
  //line(x,y,mouseX,mouseY);
  i++;
}
circle(mouseX,mouseY,20);
}



function cornersAndMouse() {
  circle(width*0.05, height*0.05, 20);
  circle(width*0.95, height*0.05, 20);
  circle(width*0.05, height *0.95, 20);
  circle(width*0.95, height*0.95, 20);
  circle(mouseX, mouseY, 20);

  line(width*0.05, height*0.05, mouseX,mouseY);
  line(width*0.95, height*0.05, mouseX,mouseY);
  line(width*0.05, height *0.95, mouseX,mouseY);
  line(width*0.95, height*0.95, mouseX,mouseY);
}