class mangoes {

    constructor (x, y, r){

        var options = {

         isStatic : true

        }


    this.body = Bodies.circle (x, y, r, options);
    World.add (world, this.body);
    this.img = loadImage ("Images/mango.png");
    this.r = r;
    }

 display(){
  
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r*2, this.r*2);
        pop();
 }


}