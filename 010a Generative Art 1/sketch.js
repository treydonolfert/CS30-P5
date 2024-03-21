// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridSpacing = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawLines();
}

function draw() {
  randomSeed(1000);
  gridSpacing = map()
  background(220);
  drawLines();
}

function diagonalAsc(x,y,s) {
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}

function diagonalDesc(x,y,s) {
  line(x + s/2, y + s/2, x - s/2, y - s/2);
}

function drawLines() {
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      let choice = int(random(2))
      if (choice === 0) {
        diagonalDesc(x,y,gridSpacing);
      }
      else {
        diagonalAsc(x,y,gridSpacing);
      }
    }
  }
}
