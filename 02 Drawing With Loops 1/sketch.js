// Drawing With Loops 1
// Treydon Olfert
// February 27, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 300);
  xPos = [width*0.05,width*0.95,width*0.05,width*0.95];
  yPos = [height*0.05,height*0.05,height*0.95,height*0.95];
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
  circle(x,y,20);
  line(x,y,mouseX,mouseY);
  i++;
}
circle(mouseX,mouseY,20);
}



function cornersAndMouse() {
  fill(255);
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