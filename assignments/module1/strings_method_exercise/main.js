var helloString = "Hello"
var helloWorldString = "Hello World"

function capilizeAndLowercase (helloString){
    var helloUp = helloString.toUpperCase() 
    var helloLow = helloString.toLowerCase()
    var newHello = helloUp + helloLow

    return newHello
}

capilizeAndLowercase(helloString)
console.log(capilizeAndLowercase(helloString))

function findMiddleIndex (helloString){

    var helloStringLength = helloString.length / 2
    var roundedHello = Math.floor(helloStringLength)
    return roundedHello 
}

findMiddleIndex("hello")
console.log(findMiddleIndex("Hello"))

function findMiddleIndex2 (helloWorldString){
    var helloWorldStringLength = helloWorldString.length / 2
    var roundedHelloWorld = Math.floor(helloWorldStringLength)
    return roundedHelloWorld
}

findMiddleIndex2("Hello World")
console.log(findMiddleIndex2("Hello World"))

function returnFirstHalf(helloString){
    var helloHalf = helloString.slice(0,2)
    return helloHalf
}

returnFirstHalf("Hello")
console.log(returnFirstHalf("Hello"))

function returnFirstHalf2(helloWorldString){
    var helloWorldHalf = helloWorldString.slice(0, 5)
    return helloWorldHalf
}

returnFirstHalf2("Hello World")
console.log(returnFirstHalf2("Hello World"))

function capilizeAndLowercase2(helloString){
    var helloFirst = helloString.slice(0 ,2 ).toUpperCase()
    var helloLast = helloString.slice(2).toLowerCase()
    var helloTogether = helloFirst.concat(helloLast)
    return helloTogether
}

capilizeAndLowercase2("Hello")
console.log(capilizeAndLowercase2("Hello"))

function capilizeAndLowercase3(helloWorldString){
    var helloWorldFirst = helloWorldString.slice(0, 5).toUpperCase()
    var helloWorldLast =  helloWorldString.slice(5).toLowerCase()
    var helloWorldTogther = helloWorldFirst.concat(helloWorldLast)
    return helloWorldTogther
}

capilizeAndLowercase3("Hello World")
console.log(capilizeAndLowercase3("Hello World"))

