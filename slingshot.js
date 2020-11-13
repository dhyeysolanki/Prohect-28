class slingshot {

    constructor (bodyA, pointB){

        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }

        this.sling = Constraint.create (options);
        World.add (world, this.sling);
     }

     fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;

    }

     display() {
        if (this.sling.bodyA){
            strokeWeight (4);
            line (this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
        }
    }
}