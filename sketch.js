var gameState=0;
var playerCount;
var database;
var form,game,player;
var allPlayers;
var car1,car2,car3,car4,cars;

function preload(){
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    car3img=loadImage("images/car3.png")
    car4img=loadImage("images/car4.png")
    Trackimg=loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    //database create 
    database=firebase.database();

    //game object
    game=new Game();
    game.getState(); //return 0 
    game.start();    // calling start() method to start the game 
    
}
function draw(){
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
        clear();      
        game.play();
    }
    if(gameState==2){
        game.end();
    }

}