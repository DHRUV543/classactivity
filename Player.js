class Player{
constructor(){
  this.name=null;
  this.distance=0
  this.index=null;
    
      
}
//to get player count from database 
getCount(){
var p=database.ref('playerCount')
p.on("value",function(data){
    playerCount=data.val();
});
}

// to update playerCount in database
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}


// to update name in the database 
update(){
  // players...player1...player2 
    var playerIndex = "players/player" + this.index ;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  getrank(){
    var rankp=database.ref('ranks')
    rankp.on("value",(data)=>
      {
    this.rank=data.val();
      }
    )
      }
    
      static updaterank(data){
    database.ref('/').update({
      ranks:data
    })}

  //static method to get all the players info in allPlayers variable
  //ststic method will be calledx using class name 
  static getPlayerInfo(){
    var d=database.ref('players')
    d.on("value",function(data){
        allPlayers=data.val();
    });
    }
}