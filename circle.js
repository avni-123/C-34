class Circle{

    constructor(x, y, radius, maxSides){

        var options = {

            isStatic : true

        }

        this.body = Bodies.circle(x, y, radius, options, maxSides);

        this.radius = radius;

        this.maxSides = maxSides;

        this.image = loadImage("stone.png");

        World.add(world, this.body);

    }

    display(){

        var C = this.body.position;

        push();

        imageMode(RADIUS);

        fill(250, 50, 200);

        strokeWeight(4);

        stroke("orange");

        image(this.image, C.x, C.y, this.radius, this.maxSides);

        pop();

    }

}
