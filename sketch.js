var bullet, speed, weight ;
var wall, thinkness ; 

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thinkness= random (22,83);
  bullet=createSprite(50,200,60,50);
  wall=createSprite(1200,200,thinkness,height/2);
  bullet.shapeColor=("white");
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed; 
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
function draw() {
  background(0,0,0);  

if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
var damage=(0.5* weight* speed*speed)/(thinkness*thinkness*thinkness);

if (damage>10){
  wall.shapeColor=color("red");
}

if (damage<10){
  wall.shapeColor=color("green");
}
}
  drawSprites();
}
