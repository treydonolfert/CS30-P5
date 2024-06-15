// Perlin Noise Terrain Generation
// Treydon Olfert
// June 14, 2024
// Interactive terrain generation using Perlin noise

//Global variables
let rectWidth = 5;
let changeHeight = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawRectangles(dHeight) { 
  //For every rectangle: uses noise on the input, dHeight, then maps it to the height of the canvas, then draws the rectangle, then increments the noise input.
  //Afterwards, draws average line and calls drawFlag() 
  let rectHeight;
  let currentHighest = -1;
  let highestX = 1;
  let sum = 0;
  let divisor = 0;
  fill(0); 
  for (let x = 0; x < width; x += rectWidth) {
    rectHeight = noise(dHeight);
    rectHeight = map(rectHeight,0,1,0,height);
    sum += rectHeight;
    divisor++; //sum and divisor are used to keep track of average height
    if (rectHeight < currentHighest || currentHighest === -1) { //rectHeight is from the top of the canvas, so the tallest rectangle should be the one with the lowest rectHeight 
      currentHighest = rectHeight;
      highestX = x;
    }
    dHeight += 0.005;
    rect(x,rectHeight,rectWidth,height);
  }
  stroke(255,0,0);
  line(0,sum/divisor,width,sum/divisor);
  stroke(0);
  drawFlag(highestX,currentHighest);
}

function drawFlag(x,y) { //draws the flag on the highest rectangle
  line(x,y,x,y-50);
  fill(255);
  triangle(x,y-25,x,y-50,x+15,y-37.5);
}

function keyPressed() { //increases/decreases rectangle width on arrow key presses. has a max of the width of the canvas and a minimum of 1 pixel
  if (keyCode === RIGHT_ARROW && rectWidth < width) {
    rectWidth++;
    drawRectangles();
  } else if (keyCode === LEFT_ARROW && rectWidth > 1) {
    rectWidth--;
    drawRectangles();
  }
}

function draw() { //draws the background, then draws the terrain, then changes the noise input slightly to give the panning effect
  background(255);
  drawRectangles(changeHeight);
  changeHeight+=0.005;
}
