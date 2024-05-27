class Ball {
    constructor(x, y, vx, vy, ax, ay, scale) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, -1 * vy);
        this.acc = createVector(ax, -1 * ay);
        this.scale = scale;
    }

    move() {
        this.vel.add(this.acc.x * (deltaTime/1000), this.acc.y * (deltaTime/1000));
        this.pos.add(this.vel.x * (deltaTime/1000) * scale, this.vel.y * (deltaTime/1000) * scale);
    }

    display() {
        circle(this.pos.x, this.pos.y, 250);
    }
    
}