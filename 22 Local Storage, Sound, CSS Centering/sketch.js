// CSS Centering, Sound, Local Storage
// Mr. Scott
// May 7, 2024

let music, bounceSound;
let started = false;
let pos; let vel;
let totalBounces = 0;

function preload() {
  music = loadSound("assets/background.mp3");
  bounceSound = loadSound("assets/bounceSound.wav");
}

function setup() {
  createCanvas(400, 300);
  textSize(30);
  textAlign(CENTER);
  pos = createVector(width/2, height/2);
  vel = createVector(5,3);
  if(localStorage.getItem("bounce") === null) {
    localStorage.setItem("bounce", 0);
  }
  else {
    totalBounces = int(localStorage.getItem("bounce"));
  }
}

function draw() {
  background(220);
  if (started === false) {
    text("Click to Begin.", width/2, height/2);
    if (mouseIsPressed) {
      started = true;
      music.setVolume(0.3);
      music.loop();
    }
  } else {
    updateBall();
    text(totalBounces, width/2, height/2);
  }
}

function updateBall() {
  pos.add(vel);
  bounceSound.setVolume(0.9);
  if(pos.x<0||pos.x>width) {
    totalBounces++;
    bounceSound.play();
    vel.x *= -1;
    localStorage.setItem("bounce", totalBounces);
  }
  if (pos.y < 0 || pos.y > height) {
    totalBounces++;
    bounceSound.play();
    vel.y *= -1;
    localStorage.setItem("bounce", totalBounces);
  }
  circle(pos.x, pos.y, 20);
}