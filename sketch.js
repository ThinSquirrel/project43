var player,playerimg,enemy,enemygroup;
var canvas;
var backgroundimg,bg;
var platform,platformimg;

function preload(){

  backgroundimg = loadImage("./assets/background.jpg");
  playerimg = loadImage("./assets/player.jpg");
  platformimg = loadImage("./assets/platform.png");

  
}

function setup(){

  canvas = createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundimg);

  if(keyDown("right")){

    platform
  }
  
  



}

function draw(){
  background(255)

  
  if(keyDown("right") || keyDown("left")){


    createPlatform();

   
  }

  
  

 

  drawSprites();
}

function createPlatform(){

  if(frameCount %200 === 0){

    platform = createSprite(0,0,20,20);
    platform.x = Math.round(random(100,500));
    platform.y = Math.round(random(100,700));
    platform.addImage(platformimg);
    platform.scale = 0.1;
    platform.velocity.x = -3;
  }


}