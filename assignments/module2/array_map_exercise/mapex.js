const arrNum = [2, 5, 100 ]
const arrResult = arrNum.map(num => num * 2)
console.log(arrResult)

const stringArr = [5, 15, 25]
const strArrResult = stringArr.map(num => num +"")
console.log(strArrResult)

const nameCapArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const nameCapResult = nameCapArr.map(name => name.charAt(0).toLocaleUpperCase()+name.slice(1))
console.log(nameCapResult)

const nameOnlyArr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const nameOnlyResult = nameOnlyArr.map(names => names.name )
console.log(nameOnlyResult)

const canGoToMatrix = nameOnlyArr.map(function(names){
    if(names.age > 18){
        return names.name + " can go see the Matrix"
    }if(names.age < 18){
        return names.name + " is under age"
    }
})
console.log(canGoToMatrix)



const readyToGoToDOM = nameOnlyArr.map(function(people){
    //const h1Names = document.createElement('h1')
    //const h2Age = document.createElement('h2')
    //h1Names.textContent = people.name
    //h2Age.textContent = people.age
    return "<h1>" +people.name+ "</h1>" + "<h2>" + people.age + "</h2>"
})
console.log(readyToGoToDOM)
