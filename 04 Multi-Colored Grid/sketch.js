// Multi-Colored Grid
// Treydon Olfert
// March 1st, 2024
//
let size = 20;
let initial = 1;
let randomColor;
let r; let g; let b;
//for future me, make which RGB value is randomly selected for each square then randomize the other 2 and use those for every square and only randomize the third value

function setup() {
  createCanvas(500, 500);
  document.addEventListener("contextmenu", event => event.preventDefault())
  drawGrid();
}

function colorScheme() {
  if (initial === 1) {
    randomColor = int(random(0, 3));
    print(randomColor);
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
  //print(r, "\n", g, "\n", b, "\n");
}

function drawGrid() {
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      colorScheme();
      square(x, y, size);
      print(r,g,b);
    }
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (size !== 2) {
      size--;
      drawGrid();
    }
  }
  else if (mouseButton === RIGHT) {
    if (size !== 500) {
      size++;
      drawGrid();
    }
  }
  print(size);
}

function keyPressed() {
  if (keyCode === ENTER) {
    initial = 1;
  }
  drawGrid();
}

function draw() {
}
