class Log{

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

        var L = this.body.position;

        push();

        rectMode(CENTER);

        fill(230, 20, 70);

        strokeWeight(1);

        stroke("gold");

        rect(L.x, L.y, this.width, this.height);
        
        pop();
        
    }
}
