
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage ("Images/boy.png");
	TreeImg = loadImage ("Images/tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground1 = new Ground (650, 580, 1300, 20);
	mango1 = new mangoes (1100, 100, 30);
	mango2=new mangoes (1170,130,30); 
	mango3=new mangoes (1010,140,30); 
	mango4=new mangoes (1000,70,30); 
	mango5=new mangoes (1100,70,30); 
	mango6=new mangoes (1000,230,30); 
	mango7=new mangoes (900,230,40); 
	mango8=new mangoes (1140,150,40); 
	mango9=new mangoes (1100,230,40); 
	mango10=new mangoes (1200,200,40); 
	mango11=new mangoes (1120,50,40); 
	mango12=new mangoes (900,160,40);
	stone = new Stone (280, 460, 30);
	sling = new slingshot (stone.body,{x:185, y:420});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
imageMode (CENTER);

  image (boyImg, 270, 500, 300, 300);
image (TreeImg, 1000, 300, 700, 700);
  
	ground1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stone.display();
	sling.display();
	detectCollision (stone, mango1);
	detectCollision (stone, mango2);
	detectCollision (stone, mango3);
	detectCollision (stone, mango4);
	detectCollision (stone, mango5);
	detectCollision (stone, mango6);
	detectCollision (stone, mango7);
	detectCollision (stone, mango8);
	detectCollision (stone, mango9);
	detectCollision (stone, mango10);
	detectCollision (stone, mango11);
	detectCollision (stone, mango12);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased (){

	sling.fly();

}

function keyPressed (){

	if (keyCode == 32){

	sling.attach(stone.body);
	}
}
 
function detectCollision (Lstone, Lmango){

mangoBodyPosition = Lmango.body.position
stoneBodyPosition = Lstone.body.position

var distance  = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if (distance<=Lmango.r + Lstone.r){

	Matter.Body.setStatic (Lmango.body, false);
}
}