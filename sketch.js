
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100);

	bobObject1 = new Bob(240, 300, 80);
	bobObject2 = new Bob(320, 300, 80);
	bobObject3 = new Bob(400, 300, 80);
	bobObject4 = new Bob(480, 300, 80);
	bobObject5 = new Bob(560, 300, 80);

	rope1 = new Rope(bobObject1.body, roof.body, -160, -20);
	rope2 = new Rope(bobObject2.body, roof.body, -80, -20);
	rope3 = new Rope(bobObject3.body, roof.body, 0, -20);
	rope4 = new Rope(bobObject4.body, roof.body, 80, -20);
	rope5 = new Rope(bobObject5.body, roof.body, 160, -20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-100, y:-100});
	}
}