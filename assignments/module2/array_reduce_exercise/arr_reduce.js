const arr1 = [1,2,3]
const result1 =arr1.reduce((final, num) => final += num )
console.log(result1)

const arr2 = [1,2,3]
const result2 = arr2.reduce((final, num)=> final += num + "")
console.log(result2)

const arr3 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result3 = arr3.reduce(function(final, voter){
    if(voter.voted){
        final ++
    }
    return final
},0)
console.log(result3)

const arr4 = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const result4 = arr4.reduce(function(final, items){
    return final += items.price
},0)

console.log(result4)

const arr5 = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const result5 = arr5.reduce(function(final, randomArray){
    return final.concat(randomArray)
    
},)
console.log(result5)

const arr6 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const result6 = arr6.reduce(function(final, voter){
    if(voter.age <= 25){
        final.numYoungPeople ++
    }if(voter.age <= 25 && voter.voted){
        final.numYoungVotes ++
    }if(voter.age >=26 && voter.age < 36){
        final.numMidsPeople ++
    }if(voter.age >=26 && voter.age < 36 && voter.voted){
        final.numMidVotes ++
    }if(voter.age>=36){
        final.numOldPeople++
    }if(voter.age>=36 && voter.voted){
        final.numOldVotesPeople ++
    }
    return final
},{numYoungVotes:0,numYoungPeople:0,numMidVotes:0,numMidsPeople:0,numOldVotesPeople:0,numOldPeople:0})
console.log(result6)



