// Inheritance + using multiple files
// Treydon Olfert
// May 9, 2024

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1e6*1e-6; i++) {
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObj(random(width), random(height)));
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for (let o of objects) {
    o.move();
    o.display();
  }
}