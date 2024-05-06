// Creating Fractals
// Treydon Olfert
// May 6, 2024


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //concentricCircle(width);
  // cantor(width*0.1, height*0.3, width*0.8, 100);
  noFill();
  circleFractal(width/2,height/2, width/2, 10);
}

function circleFractal(x,y,diameter,depth) {
  if (depth > 0) {
    circle(x,y,diameter);

    circleFractal(x-diameter/2,y,diameter/2,depth-1);
    circleFractal(x+diameter/2,y,diameter/2,depth-1);
    circleFractal(x,y+diameter/2,diameter/2,depth-1);
  }
}

function cantor(x,y,len,depth) {
  if (depth > 1) {
    rect(x,y,len,10);
    y += 20;
    cantor(x,y,len/3,depth-1);
    cantor(x + len * 2/3, y, len/3, depth-1);
  }
}



function concentricCircle(diameter) {
  if (diameter > 0) {
    circle(width/2, height/2, diameter);
    concentricCircle(diameter-4);
  }
}