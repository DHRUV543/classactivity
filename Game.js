 class Game{
    constructor(){

    }

    // get gameState from database 
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val(); 
        });
    }
      
       
      

    // to update gameState in database 
    update(state){
        database.ref('/').update({
            gameState:state
    });
    }

    // game start
    start(){
        if(gameState==0){
            player=new Player(); // creating player classs object
            player.getCount();  // calling getCount of player class  
            form=new Form();  // creating form class object 
            form.display();  // calling form class display function
        }
        car1=createSprite(100,200);
        car1.addImage('k',car1img)

       car2=createSprite(300,200);
       car2.addImage('k',car2img)

       car3=createSprite(500,200);
       car3.addImage('k',car3img)

       car4=createSprite(700,200);
       car4.addImage('k',car4img) 

        cars=[car1,car2,car3,car4];   //cars[0]=car1, cars[1]=car2 .......
    }
    // creating play() when playerCount==4
   play()
   {
       form.hide(); // will hide form and its details 
       player.getrank();
       textSize(30);
       text("Game Start",120,100); // to print message in play stage 
       // call player class get playerinfo () to get all players info
       Player.getPlayerInfo();
       if(allPlayers != undefined )
       {
           //to set background
           background("yellow");
           // to apply track
           image(Trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0;  //cars index
        var x=170;   // car x and y position
        var y;
        for(var i in allPlayers)
        {   
            index=index+1;
            
              x=x+250;
              y=displayHeight-allPlayers[i].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;

              if(index==player.index){
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y= cars[index-1].y
              }
             
   }
   

    }

        if(keyIsDown(UP_ARROW) && player.index !=null){
            player.distance +=50;
            player.update();
        }

        if(player.distance>4000){
            gameState=2;
            player.rank+=1
            Player.updaterank(player.rank);
        }
    drawSprites();
   }//end of play
   
   end(){
       console.log("gameend");
       console.log("Gamerank="+player.rank);
   }
}//end of class    