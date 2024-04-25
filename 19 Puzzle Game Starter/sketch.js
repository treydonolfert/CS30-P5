// Puzzle Game Starter
// Treydon Olfert
// April 23, 2024

let grid =
[ [],
  [],
  [],
  [],
  []
];

let squareSize = 50;
let winCheck = true;
const NUM_ROWS = 5; const NUM_COLS = 5;

let row, col;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
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
}

function mousePressed() {
  //only do something if mouseX/mouseY are on the canvas

  //always flip current tile
  if (mouseX < width && mouseY < height) {
    flip(col, row);
      //flip 4 neighbors
    if (!(keyIsPressed && keyCode === SHIFT)) {
      if (row < NUM_ROWS-1) flip(col, row+1);
      if (row > 0) flip(col, row-1);
      if (col < NUM_COLS-1) flip(col+1, row);
      if (col > 0) flip(col-1, row);
    }
    for (let y = 0; y < NUM_ROWS; y++) {
      for (let x = 0; x < NUM_COLS; x++) {
        if (grid[y][x] !== 0) {
          winCheck = false;
          break;
        }
      }
      if (winCheck === false) { 
        break;
      }
    }
    if (winCheck === true) win();
    else winCheck = true;
  }
print(winCheck);

}

function flip(x,y) {
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrentY() {
  let constrainY = constrain(mouseY, 0, height-1);
  return int(constrainY/squareSize);
}

function getCurrentX() {
  //determine the current column of the mouse and return
  let constrainX = constrain(mouseX, 0, width-1);
  return int(constrainX/squareSize);
}


function drawGrid() {
  //read data from our 2d array (grid) and use the numbers to set the color for squares whcih are arranged in a grid fashion
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function win() {
  print("f");
  fill("white");
  text("ok", width/2, height/2);
}
