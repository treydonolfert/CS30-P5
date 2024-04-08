// Classes and Objects
// Treydon Olfert
// April 8, 2024
// A first look at making our own classes

let walkers = []; //objects cant be created before setup()
const NUM_WALKERS = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_WALKERS; i++) {
    let c = color(random(255),random(255),random(255))
    walkers.push(new Walker(width/2,height/2,c));
  }
  noStroke();
  background(0);
}

function draw() {
  for(let w of walkers) {
    w.move();
    w.display();
  }
}

class Walker {

  // Constructor
  constructor(x,y,c) {
    this.x = x; this.y = y; this.c = c;
    this.speed = 1;
    this.size = 5;
  }

  //Class Methods
  display() {
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);
  }

  move() {
    //equally likely chance of up, down, left, right
    let choice = Math.floor(random(4));
    if(choice === 0) this.x -= this.speed;
    else if (choice === 1) this.x += this.speed;
    else if (choice === 2) this.y -= this.speed;
    else if (choice === 3) this.y += this.speed;
  }
}
