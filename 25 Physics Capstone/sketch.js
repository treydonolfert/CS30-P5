// AP Physics Summary Animation
// Treydon Olfert
// May 23, 2024

let objects = [];
let scale = 10;
let timer1, timer2;
let stage = 1;
let newBall = true;
let threshold = 5000;
let inputs = [];
let buttons = [];

function setup() {
  createCanvas(800, 800);
  timer1 = millis();
  textAlign(CENTER);
}

function draw() {
  background(220);
  text("1 pixel = " + 1 / scale + " meters", 50, 20);
  kinematics();
  for (i = 0; i < objects.length; i++) {
    objects[i].move();
    if (stage !== 5) {
      objects[i].onScreen2();
    } else {
      if (objects[i].onScreen1() === false) {
        objects.splice(i,1);
        continue;
      }
    }
    objects[i].display();
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
    stageProgress();
  }
  if (stage === 1) {
    text("This is a ball in a constant position.", 400, 200);
    if (newBall === true) {
      objects.push(new Ball(400, 400, 0, 0, 0, 0));
      newBall = false;
    }
  } else if (stage === 2) {
    text("This is a ball with a constant velocity. Velocity is the rate of change of position.\nThe arrows on the ball are the vertical and horizontal components of the ball's velocity.", 400, 200);
    if (newBall === true) {
      objects.push(new Ball(400, 400, 10, 20, 0, 0));
      threshold = 8000;
      newBall = false;
    }
  } else if (stage === 3) {
    text("This is a ball with no initial velocity and constant acceleration. Acceleration is the rate of change of velocity.", 400, 200);
    if (newBall === true) {
      objects.push(new Ball(400, 400, 0, 0, 10, 5));
      threshold = 8000;
      newBall = false;
    }
  } else if (stage === 4) {
    text("This is a common scenario referred to as projectile motion. Acceleration due to Earth's gravity is roughly -9.8m/s² and only affects the vertical component of velocity.\nAir resistance is assumed to be negligible, so there is no horizontal acceleration.", 400, 200);
    if (newBall === true) {
      objects.push(new Ball(400, 400, 10, 20, 0, -9.8)); 
      threshold = 10000;
      newBall = false;
    }
  } else if (stage === 5) {
    threshold = 3e5; //5 minutes
    if (newBall === true) {
      for (let i = 0; i < 4; i++) {
        inputs.push(createInput());
        inputs[i].position(100, 600 + 50 * i);
      }
      buttons.push(createButton('Continue to Dynamics'));
      buttons[0].position(600, 600);
      newBall = false;
    }
      buttons[0].mousePressed(stageProgress);
      text("Will automatically move on after 5 minutes.", 650, 650);
      text("X Velocity (m/s): ", 60, 590);
      text("Y Velocity (m/s): ", 60, 640);
      text("X Acceleration (m/s²): ", 60, 690);
      text("Y Acceleration (m/s²): ", 60, 740);
  } else if (stage === 6) {
    
  }
}

function mousePressed() {
  if (stage === 5) {
    objects.push(new Ball(mouseX, mouseY, int(inputs[0].value()), int(inputs[1].value()), int(inputs[2].value()), int(inputs[3].value())));
  }
}

function stageProgress() {
  stage++;
  objects = [];
  for (i of inputs) {
    i.remove();
  }
  inputs = [];
  for (i of buttons) {
    i.remove();
  }
  buttons = [];
  timer1 = millis();
  newBall = true;
}


/*Helpful Things I found:
vector.rotate();
vector.add();
vector.mult();
deltaTime;
*/
