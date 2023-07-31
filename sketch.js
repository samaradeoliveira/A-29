const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine, world;
//variáveis
var ground;
var fruit, rope;
var fruit_con;

function setup() {
  createCanvas(500, 700);

  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 680, 600, 20);

  //aluno
  rope = new Rope(7, { x: 245, y: 30 });
  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body, fruit);

  //aluno
  fruit_con = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(152, 251, 152);

  Engine.update(engine);

  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 30, 30);
  ground.show();
}
