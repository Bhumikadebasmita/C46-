var indianPlane;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background('skyblue'); 
  
  
  if (keyDown("left"))  
  { 
    indianPlane.moveLeft();
  }
  if (keyDown("right")) 
  { 
    indianPlane.moveRight();
  }
  if (keyDown("up"))
  {
    indianPlane.moveUp();
  }

  drawSprites();
}