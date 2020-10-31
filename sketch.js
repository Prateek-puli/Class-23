const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var eng, world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  eng = Engine.create();
  console.log(eng);

  world = eng.world;

  var ground_options = {
    isStatic: true 
  }
  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(world, ground); 
  console.log(ground);

  var ball_options = {
    restitution:1
  }
  ball = Bodies.circle(200, 100, 40, ball_options);
  World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(eng);
  var pos = ground.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
}