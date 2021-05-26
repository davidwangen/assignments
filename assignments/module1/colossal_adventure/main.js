const readlineSync = require("readline-sync")
//intro
let user = readlineSync.question("Please enter your name : ")
console.log ("Hello there " + user + ". Welcome to this colossal adventure you face a hard road ahead but there are many treasures to be found, be ready for a fight at any moment...")
//player info

let player = {
    name : user ,
    health : 15 ,
    inventory : [] ,
    minDamage : 3 ,
    maxDamage : 5 ,
    isAlive : true
    
}
 
//Enemies
function Enemies (enemyName , enemyHealth , enemyMinDamage , enemyMaxDamage , enemyAlive) {
    this.enemyName = enemyName
    this.enemyHealth = enemyHealth
    this.enemyMinDamage = enemyMinDamage
    this.enemyMaxDamage = enemyMaxDamage
    this.enemyAlive = enemyAlive
}
let bandit = new Enemies("Bandit", 6  , 2 , 4 )
let spider = new Enemies("Giant Spider" , 4 , 3 , 6 )
let cyclops = new Enemies("Cyclops", 8 , 4 , 6 )
let listOfEnemies = [bandit, spider, cyclops]
function randomEnemySpawn (){
    let randomEnemy = listOfEnemies[Math.floor(Math.random() * listOfEnemies.length)]
    return randomEnemy
}
//Items 
const items = ["Gold Coins", "Ancient Scroll" , "Rare Gemstones" , "Mysterious Orb"]
//Game
while (player.isAlive === true){
    readlineSync.setDefaultOptions({limit: ["w", "p", "x"]})
    let rpgGame = readlineSync.question("Open raods ahead want to explore? w = walk , p = check player stats , x = exit game : "  )
    if (rpgGame === "x"){
        player.isAlive = false
        console.log("You have had enough, time to take your treasue :" +player.inventory+  " and retire while you can")
    } else if (rpgGame === "w"){
        walk()
    } else if (rpgGame === "p"){
        console.log("Player name : " +player.name+  " Player health : " + player.health + " Player inventory : "+ player.inventory)
    }
    
}
//walking function
function walk(){
    let number = Math.floor(Math.random() * 4)
    if(number === 3) {
         fight()   
    } else {
        console.log("After hours of walking you find nothing.")
    }
}
//fighting function
function fight(){
    let enemyToFight = randomEnemySpawn()
    bandit.enemyHealth = 6
    spider.enemyHealth = 4
    cyclops.enemyHealth = 8
    let enemyAttackDamage = Math.floor(Math.random() * (enemyToFight.enemyMaxDamage - enemyToFight.enemyMinDamage + 1 )) +enemyToFight.enemyMinDamage
    let playerAttackDamage =  Math.floor(Math.random() * (player.maxDamage - player.minDamage + 1)) + player.minDamage
    console.log("A " + enemyToFight.enemyName + " appears! ")
    while(player.isAlive === true && enemyToFight.enemyHealth > 0){
        readlineSync.setDefaultOptions({limit:["a" , "r" ]})
        let fightOption = readlineSync.question("What will you do? a = attack , r = run ")
           if (fightOption === "a"){ 
                enemyToFight.enemyHealth = enemyToFight.enemyHealth - playerAttackDamage 
            if (player.health <= 0){
                    console.log("You have died the adventure ends")
                    player.isAlive = false
                }   
            if(enemyToFight.enemyHealth <= 0){
                 player.health =player.health + 3
                 let randomItem = items[Math.floor(Math.random() * items.length)]
                 player.inventory.push(randomItem)
                 console.log(" You attack for " +playerAttackDamage+ " damage! The " + enemyToFight.enemyName + " has been defeted! You found a " +randomItem+ " and gain 3 health!")
                    
                 }else if (enemyToFight.enemyHealth > 0){
                    console.log(" You attack! The " + enemyToFight.enemyName + " took " +playerAttackDamage+ " damage they have " +enemyToFight.enemyHealth+ " health left" )
                    player.health = player.health - enemyAttackDamage
                    console.log("The" +enemyToFight.enemyName+ " attacks you! You take " + enemyAttackDamage + " dameage you have " +player.health+ " left.")
                 }
                 
                  
             }        
            
            if (fightOption === "r"){
            let runChance = Math.floor(Math.random() * 2)
            if(runChance === 1){
            enemyToFight.enemyHealth = 0
            console.log("You managed to escape!")
            }else{
                player.health = player.health - enemyAttackDamage
               console.log("You could not escape! The " + enemyToFight.enemyName + " attacks you! You take " +enemyAttackDamage+ " damage you have " +player.health+ " left")
                }if(player.health <= 0){
                console.log("You have died the adventure ends")
                player.isAlive = false           
           }
               
    
        }

    }

}

