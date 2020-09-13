//Fighter Game.....
//VERSION 1.0.....

//Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//characters
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var player;
var bullet;
var points;
var text;
//image
let img;
let img1;
let img2;
//state
var state = 1;
var col1;
//button and extras
var nameInput;
var strtButton;
var retry;
var home;
var HSCORE;
var NAME;

function preload(){
}

function setup() {
//canvas
createCanvas(1000, 1000);
//engine
engine = Engine.create();
world = engine.world;
//image
img = loadImage('images/nasa.jpg');
img1 = loadImage('images/died.png');
img2 = loadImage('images/fight.jpg');
//enemy
enemy1 = createSprite(100, 100,50, 20);
enemy2 = createSprite(200, 150,50, 20);
enemy3 = createSprite(300, 200,50, 20);
enemy4 = createSprite(400, 250,50, 20);
enemy5 = createSprite(500, 300,50, 20);
enemy6 = createSprite(600, 350,50, 20);
enemy7 = createSprite(700, 400,50, 20);
enemy8 = createSprite(800, 450,50, 20);
enemy9 = createSprite(900, 500,50, 20);
//player assets
bullet = createSprite(500, 900, 10, 20);
player = createSprite(500, 900, 60, 20);
points = 0;
Hscore = 0;
HSCORE = 0;
//button
nameInput = createInput("NAME");
nameInput.position(460, 420);
strtButton = createButton("START");
strtButton.position(460, 500);
retry = createButton("RETRY");
retry.position(450, 900);
home = createButton("HOME");
home.position(550, 900);
//random
col1 = createSprite(500,980,10000,1);
}

function enemySprite(){
//bounceoff
enemy1.bounceOff(enemy2);
enemy1.bounceOff(enemy3);
enemy1.bounceOff(enemy4);
enemy1.bounceOff(enemy5);
enemy1.bounceOff(enemy6);
enemy1.bounceOff(enemy7);
enemy1.bounceOff(enemy8);
enemy1.bounceOff(enemy9);
enemy2.bounceOff(enemy3);
enemy2.bounceOff(enemy4);
enemy2.bounceOff(enemy5);
enemy2.bounceOff(enemy6);
enemy2.bounceOff(enemy7);
enemy2.bounceOff(enemy8);
enemy2.bounceOff(enemy9); 
enemy3.bounceOff(enemy4);
enemy3.bounceOff(enemy5);
enemy3.bounceOff(enemy6);
enemy3.bounceOff(enemy7);
enemy3.bounceOff(enemy8);
enemy3.bounceOff(enemy9); 
enemy4.bounceOff(enemy5);
enemy4.bounceOff(enemy6);
enemy4.bounceOff(enemy7);
enemy4.bounceOff(enemy8);
enemy4.bounceOff(enemy9);  
enemy5.bounceOff(enemy6);
enemy5.bounceOff(enemy7);
enemy5.bounceOff(enemy8);
enemy5.bounceOff(enemy9);
enemy6.bounceOff(enemy7);
enemy6.bounceOff(enemy8);
enemy6.bounceOff(enemy9);  
enemy7.bounceOff(enemy8);
enemy7.bounceOff(enemy9);
enemy8.bounceOff(enemy9);
//color
enemy1.shapeColor = color("red");
enemy4.shapeColor = color("blue");
enemy7.shapeColor = color("green");
enemy2.shapeColor = color("orange");
enemy5.shapeColor = color("yellow");
enemy8.shapeColor = color("hue");
enemy3.shapeColor = color("pink");
enemy6.shapeColor = color("brown");
enemy9.shapeColor = color("purple");
//velocity
enemy1.velocityY = random(10, 15);
enemy2.velocityY = random(10, 15);
enemy3.velocityY = random(10, 15);
enemy4.velocityY = random(10, 15);
enemy5.velocityY = random(10, 15);
enemy6.velocityY = random(10, 15);
enemy7.velocityY = random(10, 15);
enemy8.velocityY = random(10, 15);
enemy9.velocityY = random(10, 15);
//repeat level
if (enemy1.x > 1000){
enemy1.x = 0;
enemy1.velocityX = random(-15, 15);
}
if (enemy1.y > 1000){
enemy1.y = 0;
}
if (enemy2.x > 1000){
enemy2.x = 0;
enemy2.velocityX = random(-15, 15);
}
if (enemy2.y > 1000){
enemy2.y = 0;
}
if (enemy3.x > 1000){
enemy3.x = 0;
enemy3.velocityX = random(-15, 15);
}
if (enemy3.y > 1000){
enemy3.y = 0;
}
if (enemy4.x > 1000){
enemy4.x = 0;
enemy4.velocityX = random(-15, 15);
}
if (enemy4.y > 1000){
enemy4.y = 0;
}
if (enemy5.x > 1000){
enemy5.x = 0;
enemy5.velocityX = random(-15, 15);
}
if (enemy5.y > 1000){
enemy5.y = 0;
}
if (enemy6.x > 1000){
enemy6.x = 0;
enemy6.velocityX = random(-15, 15);
}
if (enemy6.y > 1000){
enemy6.y = 0;
}  
if (enemy7.x > 1000){
enemy7.x = 0;
enemy7.velocityX = random(-15, 15);
}
if (enemy6.y > 1000){
enemy6.y = 0;
}
if (enemy8.x > 1000){
enemy8.x = 0;
enemy8.velocityX = random(-15, 15);
}
if (enemy8.y > 1000){
enemy8.y = 0;
}
if (enemy9.x > 1000){
enemy9.x = 0;
enemy9.velocityX = random(-15, 15);
}
if (enemy9.y > 1000){
enemy9.y = 0;
}
}
  
function playerSprite(){
//control
player.x = mouseX;
//color
player.shapeColor = color("black");
//destruction
if (player.isTouching(enemy1)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy2)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy3)){
player.visible = false
state = 23;
}
if (player.isTouching(enemy4)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy5)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy6)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy7)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy8)){
player.visible = false
state = 3;
}
if (player.isTouching(enemy9)){
player.visible = false
state = 3;
}
}

function bulletSprite(){
//colour
bullet.shapeColor = color("black");
//control
if (bullet.y === 0){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
}
//destruction
if (bullet.isTouching(enemy1)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy1.y = 0;
points++
Hscore++
enemy1.x = random(100,200);
enemy1.y = random(100,150);
enemy1.width = random(50,70);
enemy1.height = random(10,20);
} 
if (bullet.isTouching(enemy2)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy2.y = 0;
points++
Hscore++
enemy2.x = random(200,300);
enemy2.y = random(100,150);
enemy2.width = random(50,70);
enemy2.height = random(10,20);
}
if (bullet.isTouching(enemy3)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy3.y = 0;
points++
Hscore++
enemy3.x = random(300,400);
enemy3.y = random(100,150);
enemy3.width = random(50,70);
enemy3.height = random(10,20);
} 
if (bullet.isTouching(enemy4)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy4.y = 0;
points++
Hscore++
enemy4.x = random(400,500);
enemy4.y = random(100,150);
enemy4.width = random(50,70);
enemy4.height = random(10,20);
}
if (bullet.isTouching(enemy5)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy5.y = 0;
points++
Hscore++
enemy5.x = random(500,600);
enemy5.y = random(100,150);
enemy5.width = random(50,70);
enemy5.height = random(10,20);
}  
if (bullet.isTouching(enemy6)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy6.y = 0;
points++
Hscore++
enemy6.x = random(600,700);
enemy6.y = random(100,150);
enemy6.width = random(50,70);
enemy6.height = random(10,20);
} 
if (bullet.isTouching(enemy7)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy7.y = 0;
points++
Hscore++
enemy7.x = random(700,800);
enemy7.y = random(100,150);
enemy7.width = random(50,70);
enemy7.height = random(10,20);
} 
if (bullet.isTouching(enemy8)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy8.y = 0;
points++
Hscore++
enemy8.x = random(800,900);
enemy8.y = random(100,150);
enemy8.width = random(50,70);
enemy8.height = random(10,20);
}  
if (bullet.isTouching(enemy9)){
bullet.x = mouseX;
bullet.y = 900;
bullet.velocityY = 0;
enemy9.y = 0;
points++
Hscore++
enemy9.x = random(900,1000);
enemy9.y = random(100,150);
enemy9.width = random(50,70);
enemy9.height = random(10,20);
}
}

function draw(){
console.log(points)
//engine
Engine.update(engine);
//state 1
if (state === 1){
//background
background("black");
//button
retry.hide();
home.hide();
//button
strtButton.mousePressed(()=>{
//entry in state 2
state = 2;
//random
col1.visible = false;
//button
name = nameInput.value();
strtButton.hide();
nameInput.hide();
})
}
//state 2
if (state === 2){
//background
background(img);
//controll
player.x = mouseX;
bullet.x = mouseX;
if (keyWentDown("space")){
bullet.x = player.x;
bullet.y = player.y;
bullet.velocityY = -25
}
//visible
enemy1.visible = true;
enemy2.visible = true;
enemy3.visible = true;
enemy4.visible = true;
enemy5.visible = true;
enemy6.visible = true;
enemy7.visible = true;
enemy8.visible = true;
enemy9.visible = true;
player.visible = true;
bullet.visible = true;
points.visible = true;
//random
if(enemy1.isTouching(col1)){
enemy1.x = random(100,200);
enemy1.y = random(100,150);
enemy1.width = random(50,70);
enemy1.height = random(10,20);
}
if(enemy2.isTouching(col1)){
enemy2.x = random(200,300);
enemy2.y = random(100,150);
enemy2.width = random(50,70);
enemy2.height = random(10,20);
}
if(enemy3.isTouching(col1)){
enemy3.x = random(300,400);
enemy3.y = random(100,150);
enemy3.width = random(50,70);
enemy3.height = random(10,20);
}
if(enemy4.isTouching(col1)){
enemy4.x = random(400,500);
enemy4.y = random(100,150);
enemy4.width = random(50,70);
enemy4.height = random(10,20);
} 
if(enemy5.isTouching(col1)){
enemy5.x = random(500,600);
enemy5.y = random(100,150);
enemy5.width = random(50,70);
enemy5.height = random(10,20);
} 
if(enemy6.isTouching(col1)){
enemy6.x = random(600,700);
enemy6.y = random(100,150);
enemy6.width = random(50,70);
enemy6.height = random(10,20);
} 
if(enemy7.isTouching(col1)){
enemy7.x = random(700,800);
enemy7.y = random(100,150);
enemy7.width = random(50,70);
enemy7.height = random(10,20);
}      
if(enemy8.isTouching(col1)){
enemy8.x = random(800,900);
enemy8.y = random(100,150);
enemy8.width = random(50,70);
enemy8.height = random(10,20);
}
if(enemy9.isTouching(col1)){
enemy9.x = random(900,1000);
enemy9.y = random(100,150);
enemy9.width = random(50,70);
enemy9.height = random(10,20);
}
//health
if(player.isTouching(enemy1)){
state = 3;
}
if(player.isTouching(enemy2)){
state = 3;
}
if(player.isTouching(enemy3)){
state = 3;
}
if(player.isTouching(enemy4)){
state = 3;
}
if(player.isTouching(enemy5)){
state = 3;
}
if(player.isTouching(enemy6)){
state = 3;
}
if(player.isTouching(enemy7)){
state = 3;
}
if(player.isTouching(enemy8)){
state = 3;
}
if(player.isTouching(enemy9)){
state = 3;
}
//state 3
if (state === 3){
//background
background("black");
//Score
if(HSCORE<points){
HSCORE = points;
}
//text and image
image(img1,250,200,500,500);
textSize(30);
fill("blue");
text("YOUR SCORE IS "+points,360,300);
fill("yellow");
text("YOUR HIGHEST SCORE IS "+HSCORE,300,250);
//visible
enemy1.visible = false;
enemy2.visible = false;
enemy3.visible = false;
enemy4.visible = false;
enemy5.visible = false;
enemy6.visible = false;
enemy7.visible = false;
enemy8.visible = false;
enemy9.visible = false;
player.visible = false;
bullet.visible = false;
//button
retry.show();
home.show();
retry.mousePressed(()=>{
retry.hide();
home.hide();
points = 0;
//entry in state 2
state = 2;
//random
col1.visible = false;
})
home.mousePressed(()=>{
//background
background("black");
//button
retry.hide();
home.hide();
strtButton.show();
nameInput.show();
points = 0;
strtButton.mousePressed(()=>{
//score
HSCORE = 0;
//entry in state 2
state = 2;
//random
col1.visible = false;
//button
name = nameInput.value();
strtButton.hide();
nameInput.hide();
})
})
}
//function
enemySprite();
playerSprite();
bulletSprite();
}
//drawSprite
drawSprites();
}

//~By Soumya Das.....