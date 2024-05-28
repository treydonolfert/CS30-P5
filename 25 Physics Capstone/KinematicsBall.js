class Ball {
    constructor(x, y, vx, vy, ax, ay) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, -1 * vy);
        this.acc = createVector(ax, -1 * ay);
    }

    move() {
        this.vel.add(this.acc.x * (deltaTime/1000), this.acc.y * (deltaTime/1000));
        this.pos.add(this.vel.x * (deltaTime/1000) * scale, this.vel.y * (deltaTime/1000) * scale);
    }

    onScreen() {
        if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
            return false;
        }
    }

    display() {
        circle(this.pos.x, this.pos.y, 250);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, scale * this.vel.x, 0);
        line(0, 0, 0, scale * this.vel.y);
        let arrowSize = 20;
        push();
        translate(this.vel.x * scale - arrowSize, 0);
        triangle(0, arrowSize/2, 0, -arrowSize/2, arrowSize, 0);
        pop();
        pop();
    }
    
}