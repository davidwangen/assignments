const name = "John"
const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//Task 1

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))  
}

//Task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly )    
}

//Task 3

let doMathSum =(a, b) => a + b
   
var produceProduct = (a, b) => a * b 

//Task4



function printString(firstName = "Jane", lastName = "Doe", age =100){
    
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}? `
}
console.log(printString("Kat", "Stark", 40))

//Task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => (animal.type ==="dog") ? true : false )}

     console.log(filterForDogs(animals))
 
     
         



let templateLiteralFunction = (location , name)=> `Hi ${name}!\nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(templateLiteralFunction("Hawaii", "Janice"))