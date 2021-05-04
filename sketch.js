var violet,demon1,demon2,demon3;
var element,element2,element3,element4;
var potion;
var wall,wall2,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall13,wall14,wall15;

function preload(){

}

function setup(){
var canvas = createCanvas(displayWidth-20,displayHeight-20);
//creating the witch
var violet = createSprite(displayWidth/2,displayHeight/2,20,40);

//creating the demons
//var demon1 = createSprite();
//var demon2 = createSprite();
//var demon3 = createSprite();

//creating the elements
//var element = createSprite();
//var element2 = createSprite();
//var element3 = createSprite();
//var element4 = createSprite();

//creating the potion
var potion = createSprite(displayWidth-100,displayHeight/2,10,10);

//creating the walls 
var wall = createSprite(displayWidth-200,displayHeight/2,15,displayHeight-50);
var wall2 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall3 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall4 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall5 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall6 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall7 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall8 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall9 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall10 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall11 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall12 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall13 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall14 = createSprite(displayWidth-200,displayHeight/2,15,23);
var wall15 = createSprite(displayWidth-200,displayHeight/2,15,23);

}

function draw(){
background("blue");

drawSprites();
}