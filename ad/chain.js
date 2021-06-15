class chain{
    constructor(bodyA,bodyB){
        var Option={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
            

        }
        this.chain=Constraint.create(Option);
        World.add(world,this.chain)
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        push();
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        
    }
}
