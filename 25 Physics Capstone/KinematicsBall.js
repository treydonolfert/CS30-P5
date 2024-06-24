class Ball {
    constructor(x, y, vx, vy, ax, ay) {
        this.pos = createVector(x, y);
        this.vel = createVector(vx, -1 * vy); //adjusts with -1 so the inputs are more intuitive with - being downward
        this.acc = createVector(ax, -1 * ay);
        this.size = 100;
    }

    move() { //adds acceleration to velocity, then velocity to acceleration. uses deltaTime for more accurate simulation.
        this.vel.add(this.acc.x * (deltaTime / 1000), this.acc.y * (deltaTime / 1000));
        this.pos.add(this.vel.x * (deltaTime / 1000) * scale, this.vel.y * (deltaTime / 1000) * scale);
    }

    onScreen1() { //used for only the interactive kinematics section, where the balls get deleted when they leave the screen
        if (this.pos.x < -0.5 * this.size || this.pos.x > 800 + 0.5 * this.size || this.pos.y < -0.5 * this.size || this.pos.y > 800 + 0.5 * this.size) {
            return false;
        }
    }

    onScreen2() { //used for almost the entire program, where the balls wrap around when they leave the screen
        if (this.pos.x > 800 + 0.5 * this.size) {
            this.pos.x = -0.5 * this.size + (this.pos.x-(800 + 0.5 * this.size));
        }
        if (this.pos.x < -0.5 * this.size) {
            this.pos.x = 800 + 0.5 * this.size + (-0.5 * this.size - this.pos.x);
        }
        if (this.pos.y > 800 + 0.5 * this.size) {
            this.pos.y = -0.5 * this.size + (this.pos.y-(800 + 0.5 * this.size));
        } 
        if (this.pos.y < -0.5 * this.size) {
            this.pos.y = 800 + 0.5 * this.size + (-0.5 * this.size -this.pos.y);
        }
    }

    display() { //displays the ball and draws velocity vector component arrows
        circle(this.pos.x, this.pos.y, this.size);
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