class Plinko{
    constructor(x,y){
        var options={
           isStatic : true 
        }
        this.x=x
        this.y=y
        this.body= Bodies.circle(x,y,10,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,10,10);
        pop()
    }
}