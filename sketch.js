// var box;


// function setup() {
  createCanvas(400,400);
//   box = createSprite(100,100,20,20);
// }



function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("yellow");
  }
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("blue")
  }

  drawSprites();

}




