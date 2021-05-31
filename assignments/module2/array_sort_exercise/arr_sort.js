const arr =[1, 3, 5, 2, 90, 20]

arr.sort((a , b) => a - b )
console.log(arr)

const arr2 = [1, 3, 5, 2, 90, 20]

arr2.sort((a , b) => b - a)
console.log(arr2)

const arr3 = ["dog", "wolf", "by", "family", "eaten"]
arr3.sort((a , b) => a.length - b.length)
console.log(arr3)


const arr4 = ["dog", "wolf", "by", "family", "eaten"]
arr4.sort()
console.log(arr4)

const arr5 =[
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

arr5.sort((a, b) => a.age - b.age )
console.log(arr5)