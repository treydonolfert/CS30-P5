// Terrain Starter
// Treydon Olfert
// March 11, 2024
// Procedurally Generated 2D Terrain

let rectWidth = 1;
let changeHeight = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  drawRectangles();
}

function drawRectangles() {
  //generate side to side rectangles of varying height
  let rectHeight;
  fill(0);
  for (let x = 0; x < width; x += rectWidth) {
    //rectHeight = x; - pattern

    //random()
    //rectHeight = random(0, height*0.8);

    //noise()
    rectHeight = noise(changeHeight);
    rectHeight = map(rectHeight,0,1,0,height*0.8);
    changeHeight += 0.005;
    rect(x,height/2, rectWidth, rectHeight);
  }

}

function draw() {
}
