const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var stone;
var ground;
var count=0;
var backgroundImg;
var bg;
var polygon
function preload(){
 polygon_img = loadImage("polygon.png")
 getBackgroundImage();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  stand1 = new Stand(390,300,250,10); 
  stand2 = new Stand(700,200,200,10); 
  
  
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  slingShot = new Slingshot(ball,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
  if(backgroundImg)
  background(backgroundImg);
 
  Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  stand1.display();
  fill("skyblue"); 
  block1.display(); 
  block2.display(); 
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple")
  block8.display();
  block9.display();
  block10.display(); 
  block11.display();
  fill("orange") 
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  image(polygon_img,ball.position.x,ball.position.y,40,40);
  imageMode (CENTER);
  slingShot.display ();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed (){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}  
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London")
  var responseJson = await response.json();
 // console.log(responseJson);
   
  var dateTime = await responseJson.datetime;
 // console.log(dateTime);
  var hour = dateTime.slice(11,13);
  //console.log(hour);

  if(hour>6 && hour<18){
    bg = "bg1.png";
    
  } else {
    bg = "bg2.jpg";
  }
  console.log(bg)
  backgroundImg = loadImage(bg);
}