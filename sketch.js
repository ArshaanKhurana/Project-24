
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground1 = Bodies.rectangle(width/2 , 400 , width , 10,
		{
          isStatic: true
		});
	paper1 = new Paper(100,300,10);

	dustbin1= new Dustbin(720,390,100,10);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display();
  ground1.display();
  paper1.display();
  drawSprites();
 
}



