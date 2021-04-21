const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var engine, world;

var ground;

var log1, log2, log3, log4, log5, log6, log7, log8, log9;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;

var block11, block12, block13, block14, block15, block16, block17, block18, block19;

var circle;

var crane;

var rope;

function setup(){

  createCanvas(1530, 750);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(760, 740, 1550, 20);

  block1 = new Blocks(1050, 700, 50, 50);

  block2 = new Blocks(960, 700, 50, 50);

  block3 = new Blocks(1140, 700, 50, 50);

  block4 = new Blocks(870, 700, 50, 50);

  block5 = new Blocks(915, 640, 50, 50);

  block6 = new Blocks(1090, 640, 50, 50);

  block7 = new Blocks(1004, 640, 50, 50);

  block8 = new Blocks(870, 580, 50, 50);

  block9 = new Blocks(960, 580, 50, 50);

  block10 = new Blocks(1045, 580, 50, 50);

  block11 = new Blocks(1140, 580, 50, 50);

  block12 = new Blocks(915, 520, 50, 50);

  block13 = new Blocks(1090, 520, 50, 50);

  block14 = new Blocks(1000, 460, 50, 50);

  block15 = new Blocks(870, 460, 50, 50);

  block16 = new Blocks(1140, 460, 50, 50);

  block17 = new Blocks(1070, 400, 50, 50);

  block18 = new Blocks(930, 400, 50, 50);

  block19 = new Blocks(995, 340, 50, 50);

  log1 = new Log(1005, 670, 320, 5);

  log2 = new Log(1005, 610, 320, 5);

  log3 = new Log(1005, 550, 320, 5);

  log4 = new Log(1005, 490, 320, 5);

  log5 = new Log(1005, 430, 320, 5);

  log6 = new Log(1005, 370, 320, 5);

  log7 = new Log(1005, 310, 320, 5);

  log8 = new Log(840, 520, 5, 410);

  log9 = new Log(1170, 520, 5, 410);

  circle = new Circle(230, 280, 60, 60);

  crane = new Crane(300, 430, 300, 600);

  rope = new Rope(this.circle, { x : 500, y : 50 });

}

function draw(){

  background(0);  

  ground.display();

  block1.display();

  block2.display();

  block3.display();

  block4.display();

  block5.display();

  block6.display();

  block7.display();

  block8.display();

  block9.display();

  block10.display();

  block11.display();

  block12.display();

  block13.display();

  block14.display();

  block15.display();

  block16.display();

  block17.display();

  block18.display();

  block19.display();

  log1.display();

  log2.display();

  log3.display();

  log4.display();

  log5.display();

  log6.display();

  log7.display();

  log8.display();

  log9.display();

  circle.display();

  crane.display();
  
}

function mouseDragged(){

  Matter.Body.setPosition(this.circle, {x : mouseX, y : mouseY});

}

function mouseReleased(){

  rope.fly();

}
