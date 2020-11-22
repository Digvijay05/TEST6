var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12;
var car1,car2,car3;
var wall1,wall2,wall3;
var divider1,divider2,divider3;
var PLAY = 1;
var RESULT = 0;
var gameState = PLAY;
var speed1,speed2,speed3,weight1,weight2,weight3,deformation1,deformation2,deformation3;
function setup() {
createCanvas(800,400);

//Creating Table
line1 = createSprite(133, 200, 1, 200);
line2 = createSprite(266, 200, 1, 200);
line3 = createSprite(399, 200, 1, 200);
line4 = createSprite(532, 200, 1, 200);
line5 = createSprite(665, 200, 1, 200);
line6 = createSprite(798, 200, 1, 200);

line7 = createSprite(532, 100, 800, 1);
line8 = createSprite(532, 140, 800, 1);
line9 = createSprite(532, 180, 800, 1);
line10 = createSprite(532, 220, 800, 1);
line11 = createSprite(532, 260, 800, 1);
line12 = createSprite(532,300, 800, 1);

//Creating Cars
car1 = createSprite(50, 50,10,10);
car2 = createSprite(50, 150,10,10);
car3 = createSprite(50, 250,10,10);


//Giving Speed
speed1 = Math.round(random(55,90));
speed2 = Math.round(random(55,90));
speed3 = Math.round(random(55,90));

//Speed of Cars
car1.velocityX=speed1;
car2.velocityX=speed2;
car3.velocityX=speed3;


//Creating Dividers
divider1 = createSprite(400,100, 800, 1);
divider2 = createSprite(400,200, 800, 1);
divider3 = createSprite(400,300, 800, 1);

//Color of Dividers
divider1.shapeColor = "white";
divider2.shapeColor = "white";
divider3.shapeColor = "white";

//Creating Walls
wall1 = createSprite(750,50,10,30);
wall2 = createSprite(750,150,10,30);
wall3 = createSprite(750,250,10,30);


//Color of Walls
wall1.shapeColor = "80,80,80";
wall2.shapeColor = "80,80,80";
wall3.shapeColor = "80,80,80";


//Visibility of Table
line1.visible = false;
line2.visible = false;
line3.visible = false;
line4.visible = false;
line5.visible = false;
line6.visible = false;

line7.visible = false;
line8.visible = false;
line9.visible = false;
line10.visible = false;
line11.visible = false;
line12.visible = false;

deformation1 = 0;
deformation2 = 0;
deformation3 = 0;

deformation1 = 0.5*weight1*speed1*speed1/22509;
deformation2 = 0.5*weight2*speed2*speed2/22509;
deformation3 = 0.5*weight3*speed3*speed3/22509;


}

function draw() {
background(0);

if (gameState === PLAY) {

if(car1.collide(wall1)){
  if (deformation1 > 180) {

    car1.shapeColor =color(255,0,0);
    
  }
  if (deformation1 < 180 && deformation1 > 100 ) {
    car1.shapeColor = color(230,230,0);
  }
  if (deformation1 < 100) {
  car1.shapeColor = color(0,255,0);
}
}
if (car2.collide(wall2)) {
  

if (deformation2 > 180) {

  car2.shapeColor = color(255,0,0);
  
}
if (deformation2 < 180 && deformation1 > 100 ) {
  car2.shapeColor = color(230,230,0);
}
if (deformation2 < 100) {
car2.shapeColor = color(0,255,0);
}
}
if (car3.collide(wall3)) {
  


if (deformation3 > 180) {

  car3.shapeColor = "red";
  
} 
if (deformation3 < 180 && deformation1 > 100 ) {
  car3.shapeColor = "yellow";
}
if (deformation3 < 100) {
car3.shapeColor = "green";
}
}

}
drawSprites();
}