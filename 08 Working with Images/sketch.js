// Working with Images
// Treydon Olfert
// March 14, 2024
// Loading and Displaying Images/Animations

let lionL, lionR;
let pinImages = [];
let currentIndex = 0;

function preload() {
  //runs before setup. function won't end until all loading is done
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY,lionL.width/2,lionL.height/2);
  
  image(pinImages[currentIndex], width/2, height/2);
  currentIndex = (currentIndex + 1) % 9;
}
