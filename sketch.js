
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left, right, topW;


	


function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600, 570, 1200, 15);
	left = new Ground(1000, 520, 10, 100);
	right = new Ground(800, 520, 10, 100 );
	
    var opt = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
	};

	ball = Bodies.circle(200,100,20,opt);
	World.add(world, ball);
 
	
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
}




function draw() 
{
  background(15);
  rectMode(CENTER);

  fill("white");
  circle(ball.position.x, ball.position.y, 15);
  
  ground.show();
  left.show();
  right.show();
   
  

  Engine.update(engine);
  drawSprites();
 
}





function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:30, y:50})
	};
}
