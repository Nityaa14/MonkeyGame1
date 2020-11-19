var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  //create sprite for monkey
  monkey = createSprite(50, 180, 20, 60);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  //create sprite for ground
  ground = createSprite(200,180,1200,20);
  ground.velocityX = -2;
  
  
}


function draw() {
  
  background("White");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score "+score, 500, 50);
  
  stroke("black");
  textSize(10);
  fill("Black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time "+survivalTime, 500, 50);
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 139){
    monkey.velocityY = -4;
  }
  
  monkey.velocityY = monkey.velocityY + 0.08;
  //console.log(monkey.y);
  //reset ground
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  drawSprites();
}

function Obstacles() {
  //create sprite for obstacles
  obstacle = createSprite(600,165,10,40);
  if(frameCount%300==0) {
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.02;
    obstacle.velocityX = -3;
    // obstacles appear randomly
    obstacle.y = Math.round(random(120,200));
    //set lifetime for obstacles
    obstacle.lifetime = 400;
    // adjust the depth of obstacle and monkey
    obstacle.depth = monkey.depth;
    monkey. depth = monkey.depth + 1;
    //add group
    obstacleGroup.add(obstacle);
  }
}

function Bananas() {
  //create sprite for banana
  banana = createSprite(600,120,30,10);
  if(frameCount%80==0){
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -4;
    // banana to appear randomly
    banana.y = Math.round(random(120,200));
    //set lifetime for banana 
    banana.lifetime = 400;
    // adjust the depth of monkey and banana
    banana.depth = monkey.depth;
    //add group
    bananaGroup.add(banana);
  }
}

