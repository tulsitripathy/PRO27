class rope
{
  constructor(bodyA,bodyB)
  {
    var options = {
        length : 10,
        stiffness:0.04,
        bodyA :bodyA,
        bodyB :bodyB
}

this.rope = Constraint.create(options);
World.add(world,this.rope);



  }
    
  display()
  {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);


  }  
}