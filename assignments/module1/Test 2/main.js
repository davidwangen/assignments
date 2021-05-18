var readlineSync = require("readline-sync")
//Introduction/Fun Message.
var user = readlineSync.question("Please Enter Name:")
console.log("Hi " + user + "..." + " Welcome to Colossal Adventure: White Noise. As far as you know, you have no trace of your own past, no home to return to, and no answers to what has happened to you. With only the moon in sight, you stand in the midst of dark fog in the middle of a road in a dense forest. Barely visible, up north you notice a shelter and down south from where you stand you hear sound traces of river flow. With not a single trace of human contact, you stand in deafning silence with nothing but yourself. *A note is left*: 'You are not alone...run.'")
let isAlive = true;
let playersLife = 20;
let inventory = [];
let monsters = [];
//Enemies
function Enemies(enemyName, minDamage, maxDamage, HP, item, status) {
    this.enemyName = enemyName;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.HP = HP;
    this.status = status;
    this.item = item;
    this.isDefeated = false;
}
const grimReaper = new Enemies("Grim Reaper", 2, 5, 1, "Scythe", "A dark hooded enemy. More than a demon less than a spirit. Ready to cut down anything with its sharp scythe")
const asylumRunner = new Enemies("Asylum Runner", 1, 3, 1, "Shank", "Insane asylum escapees, ready to kill anything they come across with")
const whiteNoise = new Enemies("White Noise", 4, 7, 1, "White Orb:Instant Fatality", "Cover your ears, she'll give you an instant death...")
monsters.push(grimReaper, asylumRunner, whiteNoise)
console.log(monsters)
//Start Game
while (isAlive) {
    readlineSync.setDefaultOptions({ limit: ["w", "p", "q"] })
    let startGame = readlineSync.question(`Hey ${user}, [w]alk, [p]rint, [q]uit?`)
    if (startGame === "q") {
        console.log("Experiment has ended, Subject: 08107. Terminated...")
        isAlive = false
    } else if (startGame === "p") {
        console.log(`name:${user}: HP:${playersLife}, Inventory:${inventory}`)
    } else if (startGame === "w") {
        explore()
    }
}
function explore() {
    let number = Math.floor(Math.random() * 4)
    if (number === 3) {
        battle()
    } else {
        console.log("*Dark forest is silent* Walking...")
    }
}
function enemySelector(){
    let randomEnemy = monsters[Math.floor(Math.random() * monsters.length)]
    let randomNumber = monsters.splice(randomEnemy, 1)[0]
    return randomNumber
}
//Enemies show up 1/3.
function battle() {
    let currentEnemy = enemySelector()
    console.log("enemy appeared")
    readlineSync.setDefaultOptions({ limit: ["a", "r", "q"] })
    let choices = readlineSync.keyIn("Are you [a]ttacking, [r]unning?, or [q]uitting experiment?")
    if (choices === "q") {
        quit()
    } else if (choices === "a"){
        attack(monsters)
    } else if (choices === "r") {
        run()
    }
}
//Attack
function attack() {
    let currentEnemy = enemySelector()
  error  !-->let playerAttacks = Math.floor(Math.random() * (currentEnemy.maxDamage - currentEnemy.minDamage)) + currentEnemy.minDamage;<---!  error
    let enemyAttacks = Math.floor(Math.random() * (currentEnemy.maxDamage - currentEnemy.minDamage));
    while (playersLife > 0 && currentEnemy.HP > 0) {
        let battle = readlineSync.keyIn("You attack or you run, choose: [a]ttack or [r]un?", { limit: ["a", "r"] })
        if (battle === "a") {
            console.log("Attack...")
            currentEnemy.HP = currentEnemy.HP - playerAttacks
            console.log(`${user}!, ${currentEnemy.enemyName} is hurt! ${currentEnemy.enemyName} took ${playerAttacks} points of damage! ${currentEnemy.enemyName} currently has ${currentEnemy.HP} health points. `)
            playersLife = playersLife - enemyAttacks
            console.log(`${currentEnemy.enemyName} is attacking you! ${currentEnemy.enemyName} dealt ${enemyAttacks} points of damage to you. You have ${playersLife} health points left.`)
            if (currentEnemy.HP < 0) {
                inventory.push(currentEnemy.item)
                console.log(`${user}, you defeated ${currentEnemy.enemyName}. You have a received an item. Check inventory...`)
                console.log(inventory)
                console.log("Continue walking...")
                enemySelector()
                console.log(monsters)
            }
            if (playersLife <= 0) {
                console.log("You are dead.")
                isAlive = false
            }
            if (currentEnemy.length < 0) {
                isAlive = false
                console.log(`${user}, following the end of the road, you have reached the outskirts of the forest. *a sign hangs, tilted. as if someone ran it over. "St. Joachim, House of the Saved: Asylum, Established 1930 by Dr. Govel Mengele. *a note is left on the sign*. "Subject: 08107, Expirement: Classified, Status: Alive, Mental Cognitive: Stable. Notes: 'One hope's to never for see the nightmares that live in our minds. To fear the conquest of a reality that only you create based on fear. Our own will power will reach limits in such conquest. As human beings, we are an incredible specimen. Only we can encounter and defeat our own fears.'`)
                console.log("Colossal RPG presents: ")
                console.log("White Noise")
            }
        } else if (battle === "r") {
            playersLife = 0
            isAlive = false
            console.log("Subject ran. Experiment over. *torture screams coming from the woods*...")
        }
    }
}
//Running
function run() {
    let escape = Math.floor(Math.random() * 2)
    const currentEnemy = enemySelector()
    if (escape === 1) {
        console.log(`${user}, you have escaped!`)
    } else {
        console.log(`${user}! ${currentEnemy.enemyName} negated your ESCAPE!. Now, ${currentEnemy.enemyName} is going to attack! Will you defend yourself?!`)
        attack(currentEnemy)
    }
}
function quit() {
    console.log("Subject has been NEUTRALIZED...")
    isAlive = false
}