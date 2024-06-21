// CS30 - Final Programming Challenge
// Treydon Olfert
// June 21, 2024
// CS30 Final involving animated foxes

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImagesLeft = [];   //array to hold all 8 images in left direction
let animationImagesRight = [];   //array to hold all 8 images in right direction
let animationImagesUp = [];   //array to hold all 8 images in up direction
let animationImagesDown = [];   //array to hold all 8 images in down direction
let npcFoxes = [];
let currentTint = 0;
let index = 0;
let animationIndex = 0;
let pos;
let frame = 0;
let scaleFactor = 100;
let pepsi = false;

function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

function setup() { //initializes position for player fox and adds NPC foxes
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  pos = createVector(width/2,height/2);
  for (let i = 0; i < 10; i++) {
    npcFoxes.push(new Fox(random(width),random(height)));
  }
}

function draw() { //checks for pepsi, checks for keys, runs all functions for each NPC fox
  background(220);
  if (pepsi === true) {
    currentTint = color(random(255), random(255), random(255));
    scaleFactor = random(50,150);
  }
  if (currentTint === 0) noTint();
  else tint(currentTint);
  keyCheck();
  for (let i of npcFoxes) {
    i.move();
    i.onScreen();
    i.distCheck();
    i.display();
  }
}

function keyCheck() { //checks keys for direction and animates the fox every 4 frames
  if (keyIsDown(65)) { //a
    image(animationImagesLeft[animationIndex],pos.x,pos.y,scaleFactor,scaleFactor);
    if (index !== 0) index = 0;
    frame++;
    if (frame % 4 === 0) {
      animationIndex = (animationIndex + 1) % 8;
    }
    pos.add(-5,0);
  }
  else if (keyIsDown(68)) { //d
    image(animationImagesRight[animationIndex],pos.x,pos.y,scaleFactor,scaleFactor);
    if (index !== 1) index = 1;
    frame++;
    if (frame % 4 === 0) {
      animationIndex = (animationIndex + 1) % 8;
    }
    pos.add(5,0);
  }
  else if (keyIsDown(87)) { //w
    image(animationImagesUp[animationIndex],pos.x,pos.y,scaleFactor,scaleFactor);
    if (index !== 2) index = 2;
    frame++;
    if (frame % 4 === 0) {
      animationIndex = (animationIndex + 1) % 8;
    }
    pos.add(0,-5);
  }
  else if (keyIsDown(83)) { //s
    image(animationImagesDown[animationIndex],pos.x,pos.y,scaleFactor,scaleFactor);
    if (index !== 3) index = 3;
    frame++;
    if (frame % 4 === 0) {
      animationIndex = (animationIndex + 1) % 8;
    }
    pos.add(0,5);
  }
  else { //displays static images when not holding key
    animationIndex = 0;
    frame = 0;
    image(staticImages[index],pos.x,pos.y,scaleFactor,scaleFactor);
  }
}

function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

function loadAnimation(){
  for(let i = 1; i <= 8; i++){  //LEFT
    animationImagesLeft.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //RIGHT
    animationImagesRight.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //UP
    animationImagesUp.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //DOWN
    animationImagesDown.push(loadImage("/assets/down" + i + ".png"));
  }
}

function keyPressed() {   //checks pepsi and reset
  if (key === 'p' || key === 'P') {
    if (pepsi === true) pepsi = false;
    else pepsi = true;
  }
  if (key === 'r' || key === 'R') {
    currentTint = 0;
    scaleFactor = 100;
    pos.x = width/2;
    pos.y = height/2;
  }
}

function mousePressed() { //scales on click for upper and lower half
  if (mouseY > height/2 && scaleFactor > 5) {
    scaleFactor -= 5;
  }
  else if (mouseY < height/2) {
    scaleFactor += 5;
  }
}

class Fox {
  constructor(xpos,ypos) {
    this.pos = createVector(xpos,ypos);
    this.direction;
    this.frames = 0;
    this.animFrames = 0;
    this.animIndex = 0;
  }

  move() { //moves fox
    if (this.frames % 30 === 0) {
      this.direction = int(random(4));
      this.animIndex = 0;
      this.animFrames = 0;
    }
    if (this.direction === 0) this.pos.add(-5,0);
    else if (this.direction === 1) this.pos.add(5,0);
    else if (this.direction === 2) this.pos.add(0,-5);
    else if (this.direction === 3) this.pos.add(0,5);
  }

  distCheck() { //checks distance between this.pos and pos (which is pos of playable fox)
    if (this.pos.dist(pos) < 200) {
      tint(0,0,100);
    }
    else noTint();
  }

  onScreen() { //wraps around when leaving canvas
    if (this.pos.x < 0) this.pos.x = width;
    else if (this.pos.x > width) this.pos.x = 0;
    else if (this.pos.y > height) this.pos.y = 0;
    else if (this.pos.y < 0) this.pos.y = height;
  }

  display() { //displays the NPC foxes
    if (this.direction === 0) {
      image(animationImagesLeft[this.animIndex],this.pos.x,this.pos.y);
      this.animFrames++;
      if (this.animFrames % 4 === 0) {
        this.animIndex = (this.animIndex + 1) % 8;
      }
    }
    else if (this.direction === 1) {
      image(animationImagesRight[this.animIndex],this.pos.x,this.pos.y);
      this.animFrames++;
      if (this.animFrames % 4 === 0) {
        this.animIndex = (this.animIndex + 1) % 8;
      }
    }
    else if (this.direction === 2) {
      image(animationImagesUp[this.animIndex],this.pos.x,this.pos.y);
      this.animFrames++;
      if (this.animFrames % 4 === 0) {
        this.animIndex = (this.animIndex + 1) % 8;
      }
    }
    else if (this.direction === 3) {
      image(animationImagesDown[this.animIndex],this.pos.x,this.pos.y);
      this.animFrames++;
      if (this.animFrames % 4 === 0) {
        this.animIndex = (this.animIndex + 1) % 8;
      }
    } 
    this.frames++;
  }
}