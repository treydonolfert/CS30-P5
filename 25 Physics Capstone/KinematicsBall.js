class Ball {
    constructor(x, y, vx, vy, ax, ay) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, vy);
        this.acc = createVector(ax, ay);
    }

    move() {
        this.vel.add(acc);
        this.pos.add(vel);
    }

    display(){

    }
    
}