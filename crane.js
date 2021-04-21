class Crane{

    constructor(x, y, width, height){

        var options = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;

        this.height = height;

        this.image = loadImage("crane.png");

        World.add(world, this.body);

    }

    display(){

        var c = this.body.position;

        push();

        imageMode(CENTER);

        fill(230, 20, 70);

        strokeWeight(1);

        stroke("blue");

        image(this.image, c.x, c.y, this.width, this.height);
        
        pop();
        
    }
}
