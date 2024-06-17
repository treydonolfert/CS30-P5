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
let demoVar = false;

function setup() {
  createCanvas(800, 800);
  timer1 = millis();
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  text("1 pixel = " + 1 / scale + " meters", 50, 20);
  for (let i = 0; i < objects.length; i++) {
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
  kinematics();
}

function kinematics() {
  timer2 = millis();
  if (timer2 - timer1 >= threshold && stage !== 5) {
    stageProgress();
  }
  if (stage === 1) {
    text("This is a ball in a constant position.", 400, 200);
    if (newBall === true) {
      objects.push(new Ball(400, 400, 0, 0, 0, 0));
      threshold = 5000;
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
    if (newBall === true) {
      for (let i = 0; i < 4; i++) {
        inputs.push(createInput());
        inputs[i].position(100, 600 + 50 * i);
      }
      buttons.push(createButton('Continue to Dynamics'));
      buttons.push(createButton('Delete all Objects'));
      buttons[0].position(600, 600);
      buttons[1].position(600,575);
      threshold = 3e5; //5 minutes
      newBall = false;
    }
      buttons[0].mousePressed(stageProgress);
      buttons[1].mousePressed(deleteObjects);
      text("Will automatically move on after 5 minutes.\nFor demo purposes, there is no time limit \nand pressing the button resets the program\n to the kinematics animation, rather than continuing to \ndynamics. This will be changed in the \nfull program.", 650, 650);
      text("X Velocity (m/s): ", 60, 590);
      text("Y Velocity (m/s): ", 60, 640);
      text("X Acceleration (m/s²): ", 60, 690);
      text("Y Acceleration (m/s²): ", 60, 740);
  } else if (stage === 6) {
    text("Newton's First Law: An object will maintain its velocity if the forces are balanced.\nThis box has forces acting on it, but they cancel out and cause the box to maintain its 0 m/s velocity.\nNote: The arrows show acceleration in m/s²",400,200);
    if (newBall === true) {
      objects.push(new Box(400,400,0,0,[createVector(10,10), createVector(0,-10), createVector(-10,0)],5));
      threshold = 3e5;
      newBall = false;
    }

  }
}

function mousePressed() {
  if (stage === 5 && demoVar === false) {
    objects.push(new Ball(mouseX, mouseY, float(inputs[0].value()), float(inputs[1].value()), float(inputs[2].value()), float(inputs[3].value())));
  } else {
    demoVar = false;
  }
}

function stageProgress() {
  stage++;
  objects = [];
  for (let i of inputs) {
    i.remove();
  }
  inputs = [];
  for (let i of buttons) {
    i.remove();
  }
  buttons = [];
  timer1 = millis();
  newBall = true;
  if (stage === 6) {
    stage = 1;
  }
}

function deleteObjects() {
  objects = [];
  demoVar = true;
}


/*Helpful Things I found:
vector.rotate();
vector.add();
vector.mult();
deltaTime;
*/
