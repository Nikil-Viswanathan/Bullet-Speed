var wall,thickness;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  speed = random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  if(bullet.collide(wall)){
    damage = (0.5*weight*speed*speed/(thickness*thickness*thickness));
  }
  console.log(damage);
  if(damage>10){
    wall.shapeColor = "red";
  }
  if(damage<10){
    wall.shapeColor = "green";
  }
  
  
  drawSprites();
}
