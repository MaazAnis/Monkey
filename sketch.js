var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  monkey = createSprite(50,340,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x);

}


function draw() {
  background(255)
  
  if(ground.x<0) {
    ground.x = ground.width/2
  }
  
  if(keyDown("space")) {
    monkey.velocityY=-12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ survivalTime, 100,50)

  
  banana();
  obstacles();
  
drawSprites();  
}

function banana() {
  if(frameCount%80 === 0) {
    var banana = createSprite(500,120,40,10)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -3
    
    banana.lifetime = 300;
  }
}

function obstacles() {
  if(frameCount%300 === 0) {
    var obstacle = createSprite(500,317,40,10)
    obstacle.velocityX = -6
    obstacle.addImage(obstacleImage)
    
    
    var rand = Math.round(random(120,200));
    obstacle.scale = 0.2
    obstacle.lifetime = 300;
  }
}







