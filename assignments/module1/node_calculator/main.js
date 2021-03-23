const readlineSync = require("readline-sync")


function addition(num1, num2){
    return num1 + num2
}

function multiplication(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    return num1/num2
}

function subtraction(num1, num2){
    return num1 - num2
}


var num1 = readlineSync.question('Please enter your first number ');
    
var num2 = readlineSync.question('Please enter your second number ');



var oper = readlineSync.question('Please enter you operation to perform : add,sub,mul,div ')

  if (oper==='add'){
    console.log('The result is ' + addition(Number(num1),(Number(num2)))) 
  }else if (oper==='sub'){
    console.log('The result is ' + subtraction(Number(num1),(Number(num2)))) 
  }else if(oper==='div'){
    console.log('The result is ' + division(Number(num1),(Number(num2))))
  }else if (oper==='mul'){
    console.log('The result is '+(multiplication(Number(num1),(Number(num2)))))
  }

