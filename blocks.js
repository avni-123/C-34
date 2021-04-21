class Blocks{

    constructor(x, y, width, height){

        var options = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;

        this.height = height;

        World.add(world, this.body);

    }

    display(){

        var A = this.body.position;

        push();

        rectMode(CENTER);

        fill(20, 230, 50);

        strokeWeight(3);

        stroke("red");

        rect(A.x, A.y, this.width, this.height);
        
        pop();
        
    }
}
