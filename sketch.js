const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1;
var iron1, rubber1, stone1;


function setup() {
  var canvas = createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;

  plane = new Plane(400, 400, 1200, 20);
  hammer1 = new Hammer(10, 100, 10);

  iron1 = new Iron(200, 100, 20);
  rubber1 = new Rubber(300, 100, 20);
  stone1 = new Stone(100, 100, 20);
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  plane.display();
  hammer1.display();

  iron1.display();
  rubber1.display();
  stone1.display();
}
