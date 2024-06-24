// AP Physics Summary Animation
// Treydon Olfert
// May 23, 2024
// An animation showing a summary of some AP Physics concepts

//Global variables
let objects = [];
let scale = 10; //scale is used throughout the program to convert meters to pixels.
let timer1, timer2;
let stage = 0;
let initial = true;
let threshold;
let inputs = [];
let buttons = [];

function setup() {
  createCanvas(800, 800);
  timer1 = millis();
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() { //first does movement and onscreen checks for every object, then displays them, then continues with the animation() function
  background(220);
  text("1 pixel = " + 1 / scale + " meters", 50, 20);
  for (let i = 0; i < objects.length; i++) {
    objects[i].move();
    if (stage !== 5) {
      objects[i].onScreen2();
    } else {
      if (objects[i].onScreen1() === false) {
        objects.splice(i, 1);
        continue;
      }
    }
    objects[i].display();
  }
  animation();
}

function animation() { //the program uses a stage system. at certain time intervals, the animation switches to the next stage. most of the code here is pretty much identical to the last stage.
  timer2 = millis();
  if (timer2 - timer1 >= threshold) {
    stageProgress();
    if (stage === 11) { //wraps back to the beginning
      stage = 1;
    }
  }
  if (stage === 0) {
    text("AP Physics Review\nTreydon Olfert", 400, 200);
    if (initial === true) {
      buttons.push(createButton("Start"));
      buttons[0].position(380, 400);
      threshold = 3e5; //5 minutes
      initial = false;
    }
    buttons[0].mousePressed(stageProgress);
  } else if (stage === 1) {
    text("This is a ball in a constant position.", 400, 200);
    if (initial === true) {
      objects.push(new Ball(400, 400, 0, 0, 0, 0));
      threshold = 5000;
      initial = false;
    }
  } else if (stage === 2) {
    text("This is a ball with a constant velocity. Velocity is the rate of change of position.\nThe arrows on the ball are the vertical and horizontal components of the ball's velocity.", 400, 200);
    if (initial === true) {
      objects.push(new Ball(400, 400, 10, 20, 0, 0));
      threshold = 8000;
      initial = false;
    }
  } else if (stage === 3) {
    text("This is a ball with no initial velocity and constant acceleration. Acceleration is the rate of change of velocity.", 400, 200);
    if (initial === true) {
      objects.push(new Ball(400, 400, 0, 0, 10, 5));
      threshold = 8000;
      initial = false;
    }
  } else if (stage === 4) {
    text("This is a common scenario referred to as projectile motion. Acceleration due to Earth's gravity is roughly -9.8m/s² and only affects the vertical component of velocity.\nAir resistance is assumed to be negligible, so there is no horizontal acceleration.", 400, 200);
    if (initial === true) {
      objects.push(new Ball(400, 400, 10, 20, 0, -9.8));
      threshold = 10000;
      initial = false;
    }
  } else if (stage === 5) { //first interactive stage, uses lots of inputs and buttons to accomplish this
    if (initial === true) {
      for (let i = 0; i < 4; i++) {
        inputs.push(createInput());
        inputs[i].position(100, 600 + 50 * i);
      }
      buttons.push(createButton("Continue to Dynamics"));
      buttons.push(createButton("Delete all Objects"));
      buttons[0].position(600, 600);
      buttons[1].position(600, 575);
      threshold = 3e5;
      initial = false;
    }
    buttons[0].mousePressed(stageProgress);
    buttons[1].mousePressed(deleteObjects);
    text("Will automatically move on after 5 minutes.", 650, 650);
    text("X Velocity (m/s): ", 60, 590);
    text("Y Velocity (m/s): ", 60, 640);
    text("X Acceleration (m/s²): ", 60, 690);
    text("Y Acceleration (m/s²): ", 60, 740);
  } else if (stage === 6) {
    text("Newton's First Law: An object will maintain its velocity if the forces are balanced.\nThis box has forces acting on it, but they cancel out and cause the box to maintain its 0 m/s velocity.\nNote: The arrows show acceleration in m/s²", 400, 200);
    if (initial === true) {
      objects.push(new Box(400, 400, 0, 0, [createVector(10, 10), createVector(0, -10), createVector(-10, 0)], 5));
      threshold = 9000;
      initial = false;
    }
  } else if (stage === 7) {
    text("The same applies for this object, which has all its forces balanced so it maintains its constant 10 m/s velocity.", 400, 200);
    if (initial === true) {
      objects.push(new Box(400, 400, 0, 10, [createVector(10, 10), createVector(0, -10), createVector(-10, 0)], 5));
      threshold = 7000;
      initial = false;
    }
  } else if (stage === 8) {
    text("Newton's Second Law: The force on an object is equal to the product of mass and acceleration. (F = ma)\nWith the knowledge that this box has a 20N force on it, accelerating it at 4 m/s², you can calculate the mass.", 400, 200);
    if (initial === true) {
      objects.push(new Box(400, 400, 0, 0, [createVector(4, 0)], 5));
      threshold = 9000;
      initial = false;
    }
  } else if (stage === 9) {
    text("Newton's Third Law: Every force has an equal and opposite reaction force.\nIn this instant, the right box is being pushed against the left box, which is pinned in place. The right box exerts a force on the left, and the right box exerts a force \non the right of equal magnitude. For simplicity purposes, only the forces on the right box are shown.", 400, 200);
    if (initial === true) {
      objects.push(new Box(350, 400, 0, 0, [], 5));
      objects.push(new Box(450, 400, 0, 0, [createVector(10, 0), createVector(-10, 0)], 5));
      threshold = 10000;
      initial = false;
    }
  } else if (stage === 10) { //the second interactive stage, very similar code to the first one
    if (initial === true) {
      for (let i = 0; i < 2; i++) {
        inputs.push(createInput());
        inputs[i].position(100, 700 + 50 * i);
      }
      objects.push(new Box(400, 400, 0, 0, [], 5));
      buttons.push(createButton("Reset Program"));
      buttons.push(createButton("Delete all Forces"));
      buttons.push(createButton("Add Force"));
      buttons[0].position(600, 600);
      buttons[1].position(600, 575);
      buttons[2].position(300, 725);
      threshold = 3e5;
      initial = false;
    }
    buttons[0].mousePressed(resetProgram);
    buttons[1].mousePressed(resetForces);
    buttons[2].mousePressed(addForce);
    text("Mass of Box: " + objects[0].mass + " kg", 50, 35);
    text("Will reset program after 5 minutes.", 650, 650);
    text("X Component (N): ", 60, 690);
    text("Y Component (N): ", 60, 740);
  }
}

function mousePressed() { //places balls only in stage 5 and when the mouse is outside of the deadzones around the input boxes and the "Delete all Objects" button
  if (stage === 5 && !(mouseX < 265 && mouseX > 100 && mouseY > 600 && mouseY < 770) && !(mouseX > 600 && mouseX < 715 && mouseY < 600 && mouseY > 575)) {
    objects.push(new Ball(mouseX, mouseY, float(inputs[0].value()), float(inputs[1].value()), float(inputs[2].value()), float(inputs[3].value())));
  }
}

function stageProgress() { //resets everything and progresses to the next stage
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
  initial = true;
}

function deleteObjects() { //only used in stage 5 when clicking "Delete all Objects"
  objects = [];
}

function resetProgram() { //only used in stage 10 when clicking "Reset Program"
  stageProgress();
  stage = 1;
}

function resetForces() { //resets everything in stage 10 after clicking "Delete all Forces"
  objects[0].accForces = [];
  objects[0].vel.x = 0;
  objects[0].vel.y = 0;
  objects[0].pos.x = 400;
  objects[0].pos.y = 400;
}

function addForce() { //adds forces in stage 10 when clicking the button to do so
  objects[0].accForces.push(createVector(float(inputs[0].value()) / objects[0].mass, -1 * float(inputs[1].value()) / objects[0].mass));
}