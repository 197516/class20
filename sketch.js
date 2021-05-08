var rect , rectangle

function setup() {
  createCanvas(1200,800);
 rect = createSprite(400, 200, 50, 50);
 rect.shapeColor= "yellow";

 rectangle = createSprite(800,400,50,50);
 rectangle.shapeColor = "yellow";
}

function draw() {
  background(0);  
  rect.x = World.mouseX;
  rect.y = World.mouseY;

  if(rect.x-rectangle.x<rect.width/2+rectangle.width/2  && 
   rectangle.x-rect.x<rect.width/2+rectangle.width/2  &&
   rect.y-rectangle.y<rect.height/2+rectangle.height/2  && 
   rectangle.y-rect.y<rect.height/2+rectangle.height/2 ){
    rect.shapeColor="green";
    rectangle.shapeColor="green";
  } else{
    rect.shapeColor="yellow";
    rectangle.shapeColor="yellow";
  }
  drawSprites();
}