// Multi-Colored Grid
// Treydon Olfert
// March 1st, 2024
// Semi-randomly colored grid that can be modified

// Left click - increase size
// Right click - decrease size
// Any key - redraw colors of squares
// ENTER - change and redraw color scheme of squares

//global variables

let size;
let initial = 1;
let currentFactor = 0;
let factors = [];
let randomColor;
let r; let g; let b;

function setup() { //removes context menu, then runs findFactors() and drawGrid()
  createCanvas(360, 360); //canvas can be modified to any square and should still be able to scale assuming the side length isn't a prime number
  document.addEventListener("contextmenu", event => event.preventDefault())
  findFactors();
  drawGrid();
}

function findFactors() { //finds factors of the side length of the square canvas to use in scaling and adds them to  the factors array, then initializes
  for (let i = 2; i < width; i++) { //excludes the factors of 1 and itself
    if (width % i === 0) {
      factors.push(i);
    }
  }
  currentFactor = factors.length-1
  size = factors[currentFactor]; 
}


function colorScheme() { //chooses 3 random numbers for RGB, but from then on only 1 of those values get randomized unless enter is pressed
  if (initial === 1) {
    randomColor = int(random(0, 3));
    if (randomColor === 0) {
      g = random(0, 256);
      b = random(0, 256);
    }
    else if (randomColor === 1) {
      r = random(0, 256);
      b = random(0, 256);
    }
    else if (randomColor === 2) {
      r = random(0, 256);
      g = random(0, 256);
    }
    initial = 0;
  }
  if (randomColor === 0) {
    r = random(0,256);
    fill(r,g,b);
  }
  else if (randomColor === 1) {
    g = random(0,256);
    fill(r,g,b);
  }
  else if (randomColor === 2) {
    b = random(0,256);
    fill(r,g,b);
  }
}

function drawGrid() { //draws square grid with nested loop and runs colorScheme() for fill()
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      colorScheme();
      square(x, y, size);
    }
  }
}

function mousePressed() { //cycles through factors found from findFactors() to resize the grid
  if (mouseButton === LEFT) {
    if (currentFactor !== 0) {
      currentFactor--;
      size = factors[currentFactor];
      drawGrid();
    }
  }
  else if (mouseButton === RIGHT) {
    if (currentFactor !== factors.length - 1) {
      currentFactor++;
      size = factors[currentFactor];
      drawGrid();
    }
  }
}

function keyPressed() { //changes color scheme if enter is pressed, otherwise just redraws with same color scheme
  if (keyCode === ENTER) {
    initial = 1;
  }
  drawGrid();
}

function draw() { //unused :(
}
