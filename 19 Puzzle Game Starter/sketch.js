// Puzzle Game Starter
// Treydon Olfert
// April 23, 2024

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
// let shiftPress = false;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  textAlign(CENTER);
  for (let i = 0; i < NUM_ROWS; i++) {
    for (let j = 0; j < NUM_COLS; j++) {
      if (int(random(2)) === 1) grid[i].push(255);
      else grid[i].push(0);
    }
  }
}

function draw() {
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
  //only do something if mouseX/mouseY are on the canvas

  //always flip current tile
  if (mouseX < width && mouseY < height && win === false) {
    flip(col, row);
    //flip 4 neighbors
    if (keyIsDown(SHIFT) === false) {
      if (state === 0) {
        if (row < NUM_ROWS - 1) flip(col, row + 1);
        if (row > 0) flip(col, row - 1);
        if (col < NUM_COLS - 1) flip(col + 1, row);
        if (col > 0) flip(col - 1, row);
      } else {
        if (row < NUM_ROWS - 1) flip(col,row+1);
        if (col < NUM_COLS - 1) flip(col + 1, row);
        if (row < NUM_ROWS -1 && col < NUM_COLS - 1) flip(col + 1, row + 1);
      }
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    state = (state+1) % 2;
  }
}

function flip(x, y) {
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrentY() {
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / squareSize);
}

function getCurrentX() {
  //determine the current column of the mouse and return
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / squareSize);
}

function drawOverlay() {
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
  //read data from our 2d array (grid) and use the numbers to set the color for squares whcih are arranged in a grid fashion
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      square(x * squareSize, y * squareSize, squareSize);
      if (grid[y][x] !== 0) {
        winCheck = false;
      }
    }
  }
}
