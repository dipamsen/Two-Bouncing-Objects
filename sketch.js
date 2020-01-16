var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 30, 30);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = Math.random(2,4);
  movingRect = createSprite(700,200,30,30);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -(Math.random(2,4));
}

function draw() {
  background("black");  
  
  if((movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2) && (fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 && fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2) ){
    movingRect.velocityX = -(movingRect.velocityX);
    fixedRect.velocityX = -(fixedRect.velocityX);
  } 
  drawSprites();
}