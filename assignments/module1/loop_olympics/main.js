for (var i =0 ; i <=9; i++ ){
    console.log(i)
}

for (var i =09; i >=0 ; i--){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i =0; i < fruit.length ; i++){
    console.log(fruit[i])
}

const numbers = []
for(var i = 0;i <= 9;i++){
    numbers.push(i)
}
console.log(numbers)

for (var i = 0 ; i<= 100 ; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

const fruitB = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const fruitC = []

for (var i =0 ; i < fruitB.length ; i ++){
    if([i] % 2 === 0){        
    fruitC.push(fruitB[i]) 
    console.log(fruitC)
    }
}

