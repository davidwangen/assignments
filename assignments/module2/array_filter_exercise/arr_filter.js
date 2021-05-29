const arrOfNumbers = [3, 6, 8, 2]

const resultOf5AndOver = arrOfNumbers.filter(num => num >=5  )
console.log(resultOf5AndOver)

const resultOfEvenNum = arrOfNumbers.filter(num => num % 2 === 0)
console.log(resultOfEvenNum)

const arrOfStrings = ["dog", "wolf", "by", "family", "eaten", "camping"]

const resultOf5OrLess = arrOfStrings.filter(thing => thing.length <=5 )
console.log(resultOf5OrLess)

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const peopleWhoBelongResult = people.filter(person => person.member === true)
console.log(peopleWhoBelongResult)

const peopleAndAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const peopleOldEnoughResult = peopleAndAge.filter(person => person.age > 18)
console.log(peopleOldEnoughResult)