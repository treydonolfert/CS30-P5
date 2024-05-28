// AP Physics Summary Animation
// Treydon Olfert
// May 23, 2024

let balls = [];
let scale = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  text("1 pixel = " + 1 / scale + " meters", 0, 20);
  for (i = 0; i < balls.length; i++) {
    balls[i].move();
    if (balls[i].onScreen() === false) {
      balls.splice(i, 1);
      continue;
    }
    balls[i].display();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, 10, 20, 0, -9.8));
}



/*Helpful Things I found:
vector.rotate();
vector.add();
vector.mult();
deltaTime;
*/
