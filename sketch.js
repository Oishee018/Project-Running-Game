var runner, running, pathImg

function preload(){
  //pre-load images
pathImg = loadImage("path.png")
running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){

  createCanvas(400,400);
  //create sprites here
  runner = createSprite(mouseX,200)
  runner.addAnimation(running)
  runner.scale = 0.5

  path= createSprite(200,200);
  path.addImage=(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  invisiblePath1 = createSprite(10, 200, 10, 400);
  invisiblePath1.visible = false;
  invisiblePath2 = createSprite(390, 200,10, 400);
  invisiblePath2.visible = false;
}

function draw() {

  background("white");

  if(path.y > 400){
   path.y = height/2
  }
  
  runner.x = mouseX
  runner.collide(invisiblePath1);
  runner.collide(invisiblePath2);
  drawSprites()
}
