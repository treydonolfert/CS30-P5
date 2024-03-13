//Interactive Scene
//Treydon Olfert
//March 13, 2024
//Interactive scene involving a man and an apple tree

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

//global variables

let currentBack = 0;
let apple = 0;
let appleY = 160;
let Newton = 0;
let baseWidth = 200;
let baseHeight = 200;

//drawing the scene functions

function drawTrunk() {
  fill(123,63,0);
  noStroke();
  rect(width/2,height/2+20,25,110);
}

function drawTreeLeaves() {
  fill(34, 139, 34);
  noStroke(); 
  circle(width/2-15, height/2-40, 50);
  circle(width/2-15, height/2-70, 50);
  circle(width/2+15, height/2-40, 50);
  circle(width/2+15, height/2-70, 50);
}

function drawGround() {
  fill(79, 121, 66);
  noStroke();
  rect(width/2, height/2 + 137, 400, 125);
}

function drawApple(appleState) {
  //if apple is 0, the apple is drawn in the tree. if it's 1, the apple is drawn falling by modifying appleY each frame.
  //once it hits Newton's hair, the apple vanishes and Newton is changed to 1, which in turn makes newtonState = 1.
  if (appleState === 0) {
    fill(210, 43, 43);
    circle(width/2, height/2-40, 15);
    stroke(0);
    strokeWeight(3);
    line(width/2, height/2-47.5, width/2+5, height/2-50);
  }
  else if (appleState === 1) {
    fill(210, 43, 43);
    if (appleY <= height/2-11) {
      appleY++;
    }
    else {
      apple = 2;
      Newton = 1;
      baseHeight -= 20;
    }
    circle(width/2, appleY, 15);
    stroke(0);
    strokeWeight(3);
    line(width/2, appleY-7.5, width/2+5, appleY-10);
  }
}

function drawNewton(newtonState) { 
  //if newtonState is 0, Newton is drawn sitting and otherwise it draws him walking away by modifying baseWidth each time the function runs.
  if (newtonState === 1) {
    baseWidth++;
  }
  noStroke();
  fill(255, 206, 180);
  circle(baseWidth, baseHeight+20, 25);
  fill(255,255,255);
  circle(baseWidth+21, baseHeight+27, 20);
  circle(baseWidth+21, baseHeight+16, 20);
  circle(baseWidth+15, baseHeight+4, 20);
  circle(baseWidth, baseHeight-1, 20);
  circle(baseWidth-15, baseHeight+4, 20);
  circle(baseWidth-21, baseHeight+16, 20);
  circle(baseWidth-21, baseHeight+27, 20);
  stroke(0);
  strokeWeight(3);
  line(baseWidth, baseHeight+32.5, baseWidth, baseHeight+75);
  //legs
  if (newtonState === 0) {
    line(baseWidth, baseHeight+75, baseWidth+25, baseHeight+100);
    line(baseWidth, baseHeight+75, baseWidth-25, baseHeight+100);
  }
  else {
    line(baseWidth, baseHeight+75, baseWidth+20, baseHeight + 105);
    line(baseWidth, baseHeight+75, baseWidth-20, baseHeight + 105);
  }
  //arms
  line(baseWidth, baseHeight+40, baseWidth+20, baseHeight+70);
  line(baseWidth, baseHeight+40, baseWidth-20, baseHeight+70);
}

function draw() {
  //draws the background, then calls the scene drawing functions
  if (currentBack === 0) {
    background(135,206,235);
  }
  else if (currentBack === 1) {
    background(200,50,76);
  }
  else if (currentBack === 2) {
    background(50,150,20);
  }
  else if (currentBack === 3) {
    background(50,15,165);
  }
  drawGround();
  drawTrunk();
  drawTreeLeaves();
  drawApple(apple);
  drawNewton(Newton);
  if (Newton === 1) {
    text("and so he left to discover\nwhat brought the apple to his head", width/2-185, height/2);
  }
  text("By: Treydon Olfert\nType r to reset.", 0, height-20);
}

//functions for when r is typed or when the mouse is clicked
function mousePressed() {
  if (apple === 0 && mouseButton === LEFT) {
    apple = 1;
  }
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;
  }
}

function  keyTyped() {
  if (key === 'r') {
    currentBack = 0;
    Newton = 0;
    apple = 0;
    appleY = 160;
    baseHeight = 200;
    baseWidth = 200;
  }
}