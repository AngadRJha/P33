class Divisions{
    constructor(x,y){
        var options={
            isStatic:true
        }
        
        this.width=200;
        this.height=10;
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(this.x,this.y,10,200,options);
        World.add(world,this.body);
        
    }

    display(){
        
        rectMode(CENTER);
        fill("white")
        var pos=this.body.position;
        rect(pos.x,pos.y,10,200)
        
    }
}