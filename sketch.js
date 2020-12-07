
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(80,450,30);
ground = new Ground(650,680,1300,20)
bin1 = new Dustbin(1000,590,20,150);
bin2 = new Dustbin(1200,590,20,150)
bin3 = new Dustbin(1100,660,210,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
   paper.display();
   ground.display();
   bin1.display();
   bin2.display();
   bin3.display();
   keyPressed();
   drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		
    Matter.Body.applyForce(paper.body,paper.body.position,{ x: 50, y: -30 });
    
    
	}
}



