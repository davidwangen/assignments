const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
    console.log('Welcome '+(playerName),'you must escape this room. Before you is a door and a hole in the wall.')
    var player ={
       name: playerName,
       isAlive : true ,
       hasKey: false
    }
    function playerHasDied(){
       return player.isAlive=false
    }
    function playerHasKey(){
       return player.hasKey=true
    }
     const options=['Put hand in hole', 'Find the key' , 'Open door']
while(player.isAlive===true){
    console.log('What will you do?')
   var choice =readline.keyInSelect(options)

   if(choice===0){
      playerHasDied()
        console.log('You have died') 
   }
    if(choice===1){
      playerHasKey()
        console.log('You found a key')
   }
    if(choice===2 && player.hasKey===true){
        console.log('The door Opens! You have escaped')

    }else if(choice===2){
         console.log('The door will not open')
      }
    
      
}
