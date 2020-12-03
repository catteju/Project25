
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1;
var ground;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,380,1200,20);
	paper = new Paper(100, 100, 20);
	dustbin1 = new Bin();

	Engine.run(engine);
}

function draw() {
  background("yellow");
  Engine.update(engine);
  if(keyDown("up")){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:22, y:-20});
  }
  ground.display();
  paper.display();
  dustbin1.display();
}



