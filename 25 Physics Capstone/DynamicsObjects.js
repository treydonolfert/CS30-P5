class Box extends Ball {
    constructor(x,y,vy,vx,accForces,mass) {
        this.pos = createVector(x,y);
        this.vel = createVector(vx, -1 * vy);
        this.mass = mass;
        this.accForces = accForces; //acceleration from forces
    }

    move() {
        for (i of accForces) {
            this.vel.add(this.i.x * (deltaTime / 1000), -1 * this.i.y * (deltaTime / 1000));
        }
        this.pos.add(this.vel.x * (deltaTime / 1000) * scale, this.vel.y * (deltaTime / 1000) * scale);
    }

    display() {

    }
}