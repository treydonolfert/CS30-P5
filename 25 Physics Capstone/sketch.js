// AP Physics Summary Animation
// Treydon Olfert
// May 23, 2024

let balls = [];
let scale = 10;
let timer1, timer2;
let stage = 1;

function setup() {
  createCanvas(800, 800);
  timer1 = millis();
  textAlign(CENTER);
}

function draw() {
  background(220);
  text("1 pixel = " + 1 / scale + " meters", 50, 20);
  kinematics();
  for (i = 0; i < balls.length; i++) {
    balls[i].move();
    if (balls[i].onScreen() === false) {
      balls.splice(i, 1);
    }
    else {
      balls[i].display();
    }
  }
}

function kinematics() {
  timer2 = millis();
  if (timer2 - timer1 >= 3000) {
    stage++;
    balls = [];
    timer1 = millis();
  }
  if (stage === 1) {
    text("This is a ball in a constant position.", 400, 200);
    balls.push(new Ball(400, 400, 0, 0, 0, 0));
  } else if (stage === 2) {
    text("This is a ball with a constant velocity. Velocity is the rate of change of position.", 400, 200);
    balls.push(new Ball(400,400,10,10,0,0));
  }
}

// function mousePressed() {
//   balls.push(new Ball(mouseX, mouseY, 10, 20, -10, -9.8));
// }



/*Helpful Things I found:
vector.rotate();
vector.add();
vector.mult();
deltaTime;
*/
