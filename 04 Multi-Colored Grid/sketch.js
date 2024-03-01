// Multi-Colored Grid
// Treydon Olfert
// March 1st, 2024
//
let size = 10;

function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      square(x,y,size);
    }
  }
}

function draw() {
  background(220);
}
