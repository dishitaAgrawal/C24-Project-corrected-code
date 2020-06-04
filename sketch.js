
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dpart1,dpart2,dpart3;
var package,ground;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world  = engine.world;

	package = new Ball(200,450,20);
	// Bodies.circle(200 , 450 , 5 , { restitution:0.3,
	// 	friction:0,
	// 	density:1.2,isStatic:false});
	// World.add(world, package);
	

	//Create a Ground
	ground = new Ground(width/2,495,width,10);
	//  Bodies.rectangle(width/2, 495, width, 10 , {isStatic:true} );
 	// World.add(world, ground);

	dpart1 = new bucket(1235,465,8,70);
	dpart3 = new bucket(1165,465,8,70);
	dpart2 = new bucket(1200,495,70,8);

	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(0);

//    rectMode(CENTER);
//    fill("red");
//    rect(ground.position.x,ground.position.y,width,10);
   ground.display();
//    fill("tan")
//    ellipse(package.position.x,package.position.y,30,30);
	package.display();

//    console.log(package.position.x);
  
    
  dpart1.display();
  dpart3.display();
  dpart2.display();
 

//   if(package.x<430){
// 	  World.remove(package.body);
//   }
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		console.log("Hi");
		// Body.applyForce(package.body,package.body.position,{x:0.5,y:-1});
		Matter.Body.applyForce(package.body,package.body.position,{x:25,y:-15});
		// Body.applyForce( package, {x: package.position.x, y: package.position.y}, {x: 0.6, y: -0.6});
	}
}




