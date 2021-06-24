function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus","tiger")); 



let combineFruit=(fruit, sweets, vegetables) => ({fruit:fruit, sweets:sweets, vegetables:vegetables})
    


console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))


const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location , duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence(vacation))





  function returnFirst(items){
    const [firstItem] = items
    return firstItem
}







const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

console.log(returnFavorites(favoriteActivities))






function combineAnimals(...animals) {  
    animals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    return animals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 



function product(... numbers) {  
    return numbers.reduce((acc, number) => acc * number , 1)
}




const unshift = (... array) => [... array ]


function populatePeople(names) {
  return names.map(name => {
      let [firstName, lastName] = name.split(" ");
      return {
          firstName,lastName
      }
  })
}



console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))