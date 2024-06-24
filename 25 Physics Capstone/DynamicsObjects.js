class Box {
    constructor(x,y,vy,vx,accForces,mass) { //decided not to use inheritance as it would've made it a bit more complex
        this.pos = createVector(x,y);
        this.vel = createVector(vx, -1 * vy);
        this.mass = mass;
        for (let i of accForces) {
            i.mult(1,-1); //adjusts so that - is downwards
        }
        this.accForces = accForces; //acceleration from forces, not the forces themselves
        this.size = 100;
    }

    
    onScreen1() { //same as kinematics objects, never ended up getting used in the final product though.
        if (this.pos.x < -0.5 * this.size || this.pos.x > 800 + 0.5 * this.size || this.pos.y < -0.5 * this.size || this.pos.y > 800 + 0.5 * this.size) {
            return false;
        }
    }

    onScreen2() { //same as kinematics objects, boxes wrap around
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



    move() { //adds all of the accelerations to the velocity then adds that to the position
        for (let i of this.accForces) {
            this.vel.add(i.x * (deltaTime / 1000), i.y * (deltaTime / 1000));
        }
        this.pos.add(this.vel.x * (deltaTime / 1000) * scale, this.vel.y * (deltaTime / 1000) * scale);
    }

    display() { //draws the box, draws a circle at the center if there's forces, then draws all the acceleration vector arrows
        square(this.pos.x,this.pos.y,this.size);
        if (this.accForces.length !== 0) {
            push();
            fill(0);
            circle(this.pos.x,this.pos.y,10);
            pop();
        }
        push();
        translate(this.pos.x, this.pos.y);
        for (let i of this.accForces) {
            line(0,0,i.x * scale,i.y * scale);
            push();
            rotate(i.heading());
            let arrowSize = 20;
            if (i.mag() !== 0) {
                translate(i.mag() * scale - arrowSize, 0);
                triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
            }
            pop();
        }
        pop();
    }
}