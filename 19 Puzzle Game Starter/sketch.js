// Puzzle Game Starter
// Treydon Olfert
// April 23, 2024
// Puzzle game played by clicking and making the whole grid black

//Grid + global variables
let grid =
  [[],
  [],
  [],
  [],
  []
  ];
let squareSize = 50;
let winCheck = true; let win = false;
const NUM_ROWS = 5; const NUM_COLS = 5;

let row, col;
let state = 0;

function setup() { //create canvas based on the grid's rows and columns, then randomizes the grid
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  textAlign(CENTER);
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_COLS; j++) {
      if (int(random(2)) === 1) grid[i].push(255);
      else grid[i].push(0);
    }
  }
}

function draw() { //gets the col and row that the mouse is nearest to, draws the grid, checks if the game is won, then draws the overlay
  col = getCurrentX();
  row = getCurrentY();
  background(220);
  drawGrid();
  if (winCheck === true) {
    fill("white");
    text("You win!", width / 2, height / 2);
    win = true;
    noLoop();
  }
  else winCheck = true;
  drawOverlay();
}

function mousePressed() {
  //only do something if mouseX/mouseY are on the canvas and if the game isn't won
  if (mouseX < width && mouseY < height && win === false) {
    flip(col, row); //flips current tile
    if (keyIsDown(SHIFT) === false) { //only flips any other tiles if shift isn't being held down
      if (state === 0) {  //cross flip
        if (row < NUM_ROWS - 1) flip(col, row + 1);
        if (row > 0) flip(col, row - 1);
        if (col < NUM_COLS - 1) flip(col + 1, row);
        if (col > 0) flip(col - 1, row);
      } else { //square flip, where the mouse tile is the top left corner of the square
        if (row < NUM_ROWS - 1) flip(col,row+1);
        if (col < NUM_COLS - 1) flip(col + 1, row);
        if (row < NUM_ROWS -1 && col < NUM_COLS - 1) flip(col + 1, row + 1);
      }
    }
  }
}

function keyPressed() {
  if (key === ' ' && win === false) {
    state = (state+1) % 2; //switches between cross and square flips
  }
}

function flip(x, y) { //flips inputted grid coordinate between white and black
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrentY() {
  //determine the current row of the mouse and return
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / squareSize);
}

function getCurrentX() {
  //determine the current column of the mouse and return
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / squareSize);
}

function drawOverlay() { //overlay drawn using the 4th fill() parameter. the code mimics the mousePressed() code
  if (win === false) {
    fill(0, 255, 0, 100);
    square(col * squareSize, row * squareSize, squareSize);
    if (keyIsDown(SHIFT) === false) {
      if (state === 0) {
        if (row < NUM_ROWS - 1) square(col * squareSize, (row + 1) * squareSize, squareSize);
        if (row > 0) square(col * squareSize, (row - 1) * squareSize, squareSize);
        if (col < NUM_COLS - 1) square((col + 1) * squareSize, row * squareSize, squareSize);
        if (col > 0) square((col - 1) * squareSize, row * squareSize, squareSize);
      } else {
        if (row < NUM_ROWS-1) square(col * squareSize, (row+1) * squareSize, squareSize);
        if (col < NUM_COLS - 1) square((col+1) * squareSize, row * squareSize, squareSize);
        if (row < NUM_ROWS - 1 && col < NUM_COLS - 1) square((col+1) * squareSize, (row+1) * squareSize, squareSize);
      }
    }
  }
}

function drawGrid() {
  //read data from our 2d array (grid) and use the numbers to set the color for squares which are arranged in a grid fashion
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      square(x * squareSize, y * squareSize, squareSize);
      if (grid[y][x] !== 0) { //the moment any of the squares are found to be light, the win condition is false
        winCheck = false; 
      }
    }
  }
}
