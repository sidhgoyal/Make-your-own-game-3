

var mon;
var mon_img;

var son;
var son_img;
var back
var mother, mother_img;
var flag = false

var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14

function preload(){
  mother_img = loadImage("mother.png");
  mon_img = loadAnimation("1_mon.png","2_mon.png","3_mon.png");
  son_img = loadAnimation("boy two.png","boy one.png");
  back = loadImage("fig_01.png")
}

function setup() {
  createCanvas(1000,600);
  mother = createSprite(498,255, 50, 50);
  mother.addImage("mother",mother_img);
  mother.scale = 0.17
  mon = createSprite(960,520, 50, 50);
  mon.addAnimation("mon",mon_img);
  mon.scale = 0.6
  frameRate(10)
  son = createSprite(30,150, 20, 20);
  son.addAnimation("son",son_img);
  son.scale = 0.7

  
  a1 = createSprite(10,-90, 10, 370)
  a2 = createSprite(130,210, 350,10 )
  a3 = createSprite(296,155, 10, 130)
  a4 = createSprite(225, 100, 160, 10)
  a5 = createSprite(480, 588,1050, 10)
  a6 = createSprite(992,230, 10, 460)
  a7 = createSprite(530,10, 1050, 10)
  a8 = createSprite(10, 400, 10, 390)
  a9 = createSprite(570,40, 10,370)
  a10 = createSprite(500,215, 150,10)
  a11 = createSprite(430,155, 10, 140)
  //a12 = createSprite(650, 260, 370, 20)
  a13 = createSprite(708,300, 10, 400)
  //a14 = createSprite(282,280, 20, 230)
   //son.debug = true
   //mon.debug = true
   //mother.debug = true
   son.setCollider("circle",0,0,40)
   mon.setCollider("rectangle",0,20,50,100)
   mother.setCollider("circle",0,0,200)
  }
function draw() {
  background(back);  //187,63,63
  textSize(20)
  fill("black");
  text(mouseX +","+ mouseY,100,50)
  textSize(30)
  fill("darkblue");
  /*strokeWeight(10)
  stroke("red")
  text("GHOST RUNNER",380,40)*/
  
  a1.shapeColor="black"
  a2.shapeColor="black"
  a3.shapeColor="black"
  a4.shapeColor="black"
  a5.shapeColor="black"
  a6.shapeColor="black"
  a7.shapeColor="black"
  a8.shapeColor="black"
  a8.shapeColor="black"
  a9.shapeColor="black"
  a10.shapeColor="black"
  a11.shapeColor="black"
  //a12.shapeColor="black"
  a13.shapeColor="black"
  if(keyDown(UP_ARROW)){
      son.y = son.y - 10
  }
  if(keyDown(DOWN_ARROW)){
    son.y = son.y + 10
}
if(keyDown(LEFT_ARROW)){
  son.x = son.x - 10
}
if(keyDown(RIGHT_ARROW)){
  son.x = son.x + 10
}

if(son.isTouching(mother)){
  flag = true

 
}
if(flag===true){
  mother.scale = 0.1
mother.y  =son.y-50
mother.x = son.x
text("😐",son.x+15,son.y-7)
}
son.collide(a1)
son.collide(a2)
son.collide(a3)
son.collide(a4)
son.collide(a5)
son.collide(a6)
son.collide(a7)
son.collide(a8)
son.collide(a9)
son.collide(a10)
  drawSprites();
}


  



