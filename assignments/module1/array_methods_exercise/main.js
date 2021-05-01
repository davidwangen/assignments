var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function doTheThing(){


    vegetables.pop()
    //console.log("vegetables:" , vegetables)

    fruit.shift()
    //console.log("fruit:" , fruit)

    var orangeIndex = fruit.indexOf("orange")
    //console.log (orangeIndex)

    fruit.push(1)
    //console.log("fruit:", fruit)

    var veglength = vegetables.length
    //console.log(veglength)

    vegetables.push(3)
    //console.log("vegetables:" , vegetables)

    var food = fruit.concat(vegetables)
    //console.log(food)

    food.splice(4 , 2)
    //console.log(food)

    var reversedFood = food.reverse()
    //console.log(reversedFood)

    var stringFood = food.join(",")
    console.log(stringFood)

}

doTheThing()