class Rope{

    constructor(bodyA, pointB){

        var options = {

            bodyA : bodyA,

            pointB : pointB,

            stiffness : 0.04,

            length : 1

        }

        this.rope = Matter.Constraint.create(options);
        
        this.pointB = pointB;

        World.add(world, this.rope);
    }

    fly(){

        this.rope.bodyA = null;

    }

    ballattach(body){

        this.rope.bodyA = body;

    }

    display(){

        if(this.rope.bodyA){

        var bodyA = this.rope.bodyA.position;

        var pointB = this.pointB;
        
        strokeWeight(4);

        stroke("turquoise");

        line(bodyA.x, bodyA.y, pointB.x, pointB.y);

        }

    }
    
}
