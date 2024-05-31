// AP Physics Summary Animation
// Treydon Olfert
// May 23, 2024

let balls = [];
let scale = 10;
let timer1, timer2;
let stage = 1;
let newBall = true;
let threshold = 5000;

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
    balls[i].onScreen2();
    balls[i].display();
    // if (balls[i].onScreen1() === false) {
    //   balls.splice(i, 1);
    // }
    // else {
    //   balls[i].display();
    // }
  }
}

function kinematics() {
  timer2 = millis();
  if (timer2 - timer1 >= threshold) {
    stage++;
    balls = [];
    timer1 = millis();
    newBall = true;
  }
  if (stage === 1) {
    text("This is a ball in a constant position.", 400, 200);
    if (newBall === true) {
      balls.push(new Ball(400, 400, 0, 0, 0, 0));
      newBall = false;
    }
  } else if (stage === 2) {
    text("This is a ball with a constant velocity. Velocity is the rate of change of position.\nThe arrows on the ball are the vertical and horizontal components of the ball's velocity.", 400, 200);
    if (newBall === true) {
      balls.push(new Ball(400,400,10,20,0,0));
      threshold = 8000;
      newBall = false;
    }
  } else if (stage === 3) {
    text("This is a ball with no initial velocity and constant acceleration. Acceleration is the rate of change of velocity.", 400, 200);
    if (newBall === true) {
      balls.push(new Ball(400,400,0,0,10,5));
      threshold = 8000;
      newBall = false;
    }
  } else if (stage === 4) {
    text("This is a common scenario referred to as projectile motion. Acceleration due to Earth's gravity is roughly -9.8m/s^2 and only affects the vertical component of velocity.\nAir resistance is assumed to be negligible, so there is no horizontal acceleration.",400,200);
    if (newBall === true) {
      balls.push(new Ball(400,400,10,20,0,-9.8));
      threshold = 10000;
      newBall = false;
    }
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
