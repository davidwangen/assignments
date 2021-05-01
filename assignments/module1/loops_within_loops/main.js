var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){

var newArray = []

var newAlphabet = alphabet.toUpperCase().split("").join('","')

for(var i = 0; i < people.length ; i++){
    for ( var j =0 ; j < newAlphabet[i].length ; j++){
        newArray.push(people[i]+ ": ".concat(newAlphabet))
        }
    }
    
    return newArray
}

forception(people, alphabet)


    
