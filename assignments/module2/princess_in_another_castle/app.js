class Player{
    constructor(name, totalCoins, status, hasStar, gameActive ){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }
    setName(namePicked){
        if (namePicked === "Mario"){
            player.name = "Mario"
        } if (namePicked === "Luigi"){
            player.name = "Luigi"
        }
    }
    gotHit(){
        if(player.status === "Small"){
            player.status = "Dead"
        } if(player.status === "Big"){
            player.status = "Small"
        } if(player.status === "Powered Up")
            player.status = "Big"
        
    }
    gotPowerUp(){
        if(player.status === "Powered Up" && player.hasStar === false){
            player.hasStar = true
            console.log(`Congratulations you got a star`)
        }if (player.status === "Big"){
            player.status = "Powered Up"
        }if(player.status === "Small")
            player.status = "Big"
    }    

    addCoin(){
        player.totalCoins++
    }
    print(){
        console.log(`Name: ${player.name}\nStatus: ${player.status}\nTotal Coins: ${player.totalCoins}`)
    }


}

let player = new Player( "Mario", 0 , "Small" , false , true)

let intervalId

intervalId=setInterval(getRandomInt,1000);
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(2);
        let = randomNum= Math.floor(Math.random() * (max - min + 1)) + min
        if(randomNum === 0 && player.hasStar === false){
            player.gotHit()
        }if(randomNum === 0 && player.hasStar=== true){
            player.hasStar = false
            console.log(`Your star protected you!`)
        }if(randomNum === 1){
            player.gotPowerUp()
        }if(randomNum === 2){
           player.addCoin()
        }if (player.status === "Dead"){
            player.gameActive = false
        }if(player.gameActive === false){
            console.log(`You lost the game! You have died!`)
            clearInterval(intervalId)

        }
        player.print()
    }
