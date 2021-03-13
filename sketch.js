var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var chances=0;
var particles = [];
var plinkos = [];
var divisions=[]
var gameState ="Play"
var Score =0;
var divisionHeight=300;
var ground
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Groun(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  }
    

    
 


function draw() {
  background("black");
  textSize(20)
  
  Engine.update(engine);
  
  ground.display()
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();

     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(chances>4){
     gameState="end";
   }
   
    score()
    
     
    
  
   console.log(Score)
   
   text("X: "+mouseX +" Y: "+ mouseY,mouseX,mouseY)
   text("Score : "+Score,20,30);
   
}
function mousePressed(){
  if(gameState!=="end"){
    particles.push(new Particle(mouseX,10,10))
    chances=chances+1;
    
  }
}

function score(){
  console.log(particles.x)
  if(particles.y>500 && particles.x>0 && particles.x>90 ){
    Score=Score+1
    
  }
}