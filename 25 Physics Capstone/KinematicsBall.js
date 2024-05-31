class Ball {
    constructor(x, y, vx, vy, ax, ay) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, -1 * vy);
        this.acc = createVector(ax, -1 * ay);
    }

    move() {
        this.vel.add(this.acc.x * (deltaTime / 1000), this.acc.y * (deltaTime / 1000));
        this.pos.add(this.vel.x * (deltaTime / 1000) * scale, this.vel.y * (deltaTime / 1000) * scale);
    }

    onScreen1() {
        if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
            return false;
        }
    }

    onScreen2() {
        if (this.pos.x > 850) {
            this.pos.x = -50 + (this.pos.x-850);
        }
        if (this.pos.x < -50) {
            this.pos.x = 850 + (-50-this.pos.x);
        }
        if (this.pos.y > 850) {
            this.pos.y = -50 + (this.pos.y-850);
        } 
        if (this.pos.y < -50) {
            this.pos.y = 850 + (-50-this.pos.y);
        }
    }

    display() {
        circle(this.pos.x, this.pos.y, 100);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, scale * this.vel.x, 0);
        line(0, 0, 0, scale * this.vel.y);
        let arrowSize = 20;
        if (this.vel.x !== 0) {
            push();
            if (this.vel.x < 0) {
                translate(this.vel.x * scale + arrowSize, 0);
                rotate(PI);
            } else {
                translate(this.vel.x * scale - arrowSize, 0);
            }
            triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
            pop();
        }
        if (this.vel.y !== 0) {
            push();
            if (this.vel.y < 0) {
                translate(0,this.vel.y * scale + arrowSize);
                rotate(-0.5 * PI);
            } else {
                translate(0,this.vel.y * scale - arrowSize);
                rotate(0.5 * PI);
            }
            triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
            pop();
        }
        pop();
    }

}