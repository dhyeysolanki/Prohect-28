class Stone {

    constructor (x, y, r) {

        var options = {

            isStatic: false,
            restitiution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle (x, y, r, options);
        World.add (world, this.body);
        this.img = loadImage ("Images/stone.png");
        this.r = r;
    }

    display() {

       push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r*2, this.r*2);
       pop();
    }
}