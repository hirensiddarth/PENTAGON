const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,box1,box2,box3,box4,box5,box6,polygon,slingShot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,700,700,50);
box1=new Box(700,605,70,70);
box2=new Box(600,605,70,70);
box3=new Box(500,605,70,70);
box4=new Box(650,505,70,70);
box5=new Box(550,505,70,70);
box6=new Box(600,405,70,70);
polygon=new Polygon(200,200);
slingShot=new Slingshot(this.polygon,{x:200,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  polygon.display();
  slingShot.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.bpdy,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}
