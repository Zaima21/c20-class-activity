var movingrect, fixedrect;
var rect1,rect2;

function setup() {


  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(600,200,50,50);
   rect1 = createSprite(400,400,50,50);
   rect2 = createSprite(600,400,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  rect1.shapeColor = "pink";
  rect2.shapeColor = "blue";
  rect1.velocityX = 3
  rect2.velocityX = -3
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  
  //if the distance between the centers is equal to diff in the xpos and sum of half the widths

 /* if( movingrect.x - fixedrect .x < movingrect.width/2 + fixedrect.width/2 &&
     fixedrect .x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y - fixedrect .y < movingrect.height/2 + fixedrect.height/2 &&
      fixedrect .y - movingrect.y < movingrect.height/2 + fixedrect.height/2 
    ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";

  }

  else{

    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
*/
  //bounce off when two objects hit each other
 if ( rect1.x - rect2 .x < rect1.width/2 + rect2.width/2 &&
     rect2.x - rect1.x < rect1.width/2 + rect2.width/2 ){
    //reverse the velocities when they collide

    rect1.velocityX =  rect1.velocityX *(-1); // -3
    rect2.velocityX = rect2.velocityX *(-1); // 3
  }



  

  drawSprites();
}


//algortihms - solution to some problem

//if two objects are colliding