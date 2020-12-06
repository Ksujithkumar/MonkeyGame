var FoodGroup, obstacleGroup
var banana ,bananaImage, obstacle, obstacleImage
var ground
var monkey , monkey_running
var score

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   obstaceImage = loadImage("obstacle.png");
   bananaImage = loadImage("banana.png");
}

function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(60,500,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.2
  
   ground = createSprite(200,565,2000,10);
  ground.width = ground.width/2
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  score = 0
}

function draw() {
  background(200)
  
  stroke("black")
  fill("black")
  textSize(20)
  text("Score : " + score, 200,50)
  
   if(keyDown("space")){
     monkey.velocityY = -12
   }
  monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground)
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    score = score+1
  }
  
  if(monkey.isTouching(obstaclesGroup)){
    monkey.scale = 0.2
    obstaclesGroup.destroyEach()
    score = 0
  }
  
  switch(score){
    case 20:monkey.scale = 0.3;
            break;
    case 40:monkey.scale = 0.4;
            break;
    case 60:monkey.scale = 0.5;
            break;
    case 70:monkey.scale = 0.6;
            break;
   
  }
  
  Food();
  obstacles();
   drawSprites();
}

function obstacles(){
  if(World.frameCount%400 === 0){

 obstacle = createSprite(600,530)
 obstacle.addImage( obstaceImage)
 obstacle.lifetime = 400
 obstacle.scale = 0.2
 obstacle.velocityX = -7
 obstaclesGroup.add(obstacle)
    
  }
}

function Food(){
  if(World.frameCount%200 === 0){
  
   banana = createSprite(600,200,20,20);
   banana.addImage(bananaImage)
   banana.scale = 0.1
   banana.velocityX = -4
   banana.y = Math.round(random(100,300))
     banana.lifetime = 400
     FoodGroup.add(banana)
    
  }
}







 
 
 
 
 
 
 
 
  
  