var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 231);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor =("white");
  wall = createSprite(1000, 200, thickness, 200);

  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  if (bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;

    if (damage < 10){
      wall.shapeColor = "green";    
    }
    if (damage > 10){
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}