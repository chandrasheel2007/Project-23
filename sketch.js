var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box_side1, box_side2, box_side3;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true, friction:1});
	World.add(world, packageBody);

	
	box2 = createSprite(width/2,650, 200, 20);
	box1 = createSprite(310, 600, 20, 100);
	box3 = createSprite(490, 600, 20, 100);

	
	box_side1 = Bodies.rectangle(box1.x, box1.y, box1.width, box1.height, {isStatic:true});
	box_side2 = Bodies.rectangle(width/2,650-18, 200, 20, {isStatic:true});
	box_side3 = Bodies.rectangle(box3.x, box3.y, box3.width, box3.height, {isStatic:true});

	World.add(world, box_side1);
	World.add(world, box_side2);
	World.add(world, box_side3);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  box1.x=box_side1.position.x;
  box1.y=box_side1.position.y;

 

  box3.x=box_side3.position.x;
  box3.y=box_side3.position.y;

  
  box2.shapeColor='blue';
  box3.shapeColor='blue';
  box1.shapeColor='blue';

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



