// Gradient Background + Nested Loops
// Treydon Olfert
// February 29, 2024
// Creating a gradient + drawing with nested loops

let rectHeight = 1;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gradientBackground();
  nestedLoops();
}

function nestedLoops() {
  //using nested loops, generate grid arrangement
  //for some circles
  for (let x = 0; x < 100; x += spacing) { //0, 20, 40, 60, 80
    for (let y = 0; y < 100; y += spacing) { //0, 20, 40, 60, 80
      circle(x,y,10);
    }
  }
}

function gradientBackground() {
    //use a single loop to draw rectangles
    //color them into a gradient
  let y = 0;
  while (y < height) {
    let c = color(0,map(y,0,height,255,0),map(y,0,height,0,255));
    fill(c);
    rect(0,y,width,rectHeight);
    y += rectHeight;
  }
}
