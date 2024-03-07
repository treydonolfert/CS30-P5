// Noisy Numbers
// Treydon Olfert
// March 7, 2024
// Randomness: uniform distribution vs perlin noise

let segmentLength = 3;
let ballY = 200; let ySpeed;
let ballTime = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentLine() {
  strokeWeight(15);
  let greyTime = 0;
  let x = 0;
  while (x < width) {
    //option 1: random()
    let greyValue = random(0,255);

    //option 2: perlin noise()
    greyValue = noise(greyTime);
    greyValue = map(greyValue,0,1,0,255);
    greyTime += 0.01;

    stroke(greyValue);
    line(x, height/2, x + segmentLength, height/2);
    x += segmentLength;
  }
}

function moveBall() {
  strokeWeight(1); stroke(0);
  //option 1: random()
  ySpeed = random(-20,20);
//option 2: noise()
  ySpeed = noise(ballTime);
  ySpeed = map(ySpeed,0,1,-20,20);
  ballTime += 0.01;

  ballY += ySpeed;
  circle(width*0.7,ballY,30);
}

function draw() {
  background(220);
  segmentLine();
  moveBall();
}
