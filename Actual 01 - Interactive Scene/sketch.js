function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

let apple = 0;
let appleY = 160;
let Newton = 0;
let baseWidth = 200;
let baseHeight = 200;

function drawTrunk() {
  fill(123,63,0);
  rect(width/2,height/2+20,25,110);
}

function drawTreeLeaves() {
  fill(34, 139, 34);
  stroke(34, 139, 34);
  strokeWeight(0);
  circle(width/2-15, height/2-40, 50);
  circle(width/2-15, height/2-70, 50);
  circle(width/2+15, height/2-40, 50);
  circle(width/2+15, height/2-70, 50);
}

function drawGround() {
  fill(79, 121, 66);
  rect(width/2, height/2 + 137, 400, 125);
}

function drawNewton(newtonState) {
  if (newtonState === 1) {
    baseWidth++;
  }
  strokeWeight(0);
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
  /*circle(width/2+17, height/2+20, 15);
  circle(width/2+16, height/2+15, 15);
  circle(width/2+15, height/2+12, 15);*/
  stroke(0);
  strokeWeight(3);
  line(baseWidth, height/2+32.5, baseWidth, height/2+75);
  //legs
  if (newtonState === 0) {
    line(baseWidth, baseHeight+75, baseWidth+25, baseHeight+100);
    line(baseWidth, baseHeight+75, baseWidth-25, baseHeight+100);
  }
  else {
    
  }
  //arms
  line(baseWidth, height/2+40, baseWidth+20, height/2+70);
  line(baseWidth, height/2+40, baseWidth-20, height/2+70);
}

function draw() {
  background(135, 206, 235);
  strokeWeight(0);
  drawGround();
  drawTrunk();
  drawTreeLeaves();
  if (apple === 0) {
    fill(210, 43, 43);
    circle(width/2, height/2-40, 15);
    stroke(0);
    strokeWeight(3);
    line(width/2, height/2-47.5, width/2+5, height/2-50);
  }
  else if (apple === 1) {
    fill(210, 43, 43);
    if (appleY <= height/2-11) {
      appleY++;
    }
    else {
      apple = 2;
      Newton = 1;
    }
    circle(width/2, appleY, 15);
    stroke(0);
    strokeWeight(3);
    line(width/2, appleY-7.5, width/2+5, appleY-10);
  }
  drawNewton(Newton);
}

function mousePressed() {
  if (apple === 0) {
    apple = 1;
  }
}