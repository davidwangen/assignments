// Addition 
const addForm = document["addForm"]
addForm.addEventListener("submit", function(event){
    event.preventDefault()

    const addNum1 = addForm.fistNumAdd.value
    const addNum2 = addForm.secondNumAdd.value
    addForm.fistNumAdd.value = ""
    addForm.secondNumAdd.value = ""
    function add (num1 , Num2){
        return (Number(addNum1) + (Number(addNum2)))
    }
    console.log(add())
    const additionResult = add(addNum1,addNum2)
    const addh1 = document.createElement("h1")
    addh1.textContent = addNum1 + " + " + addNum2 + " = " + additionResult
    console.log(addh1.textContent)
    document.getElementById("addDiv").append(addh1)
})
// Subtraction
const subForm = document["subForm"]
subForm.addEventListener("submit", function(event){
    event.preventDefault()

    const subNum1 = subForm.firstNumSub.value
    const subNum2 = subForm.secondNumSub.value
    subForm.firstNumSub.value = ""
    subForm.secondNumSub.value = ""
    function subtract (num1 , Num2){
        return (Number(subNum1) - (Number(subNum2)))
    }
    console.log(subtract())
    const subtractionResult = subtract(subNum1,subNum2)
    const subh1 = document.createElement("h1")
    subh1.textContent = subNum1 + " - " + subNum2 + " = " + subtractionResult
    console.log(subh1.textContent)
    document.getElementById("subDiv").append(subh1)
})
// Multiplication
const mulForm = document["mulForm"]
mulForm.addEventListener("submit", function(event){
    event.preventDefault()

    const mulNum1 = mulForm.firstNumMul.value
    const mulNum2 = mulForm.secondNumMul.value
    mulForm.firstNumMul.value = ""
    mulForm.secondNumMul.value = ""
    function multiply (num1 , Num2){
        return (Number(mulNum1) * (Number(mulNum2)))
    }
    console.log(multiply())
    const mulResult = multiply(mulNum1,mulNum2)
    const mulh1 = document.createElement("h1")
    mulh1.textContent = mulNum1 + " x " + mulNum2 + " = " + mulResult
    console.log(mulh1.textContent)
    document.getElementById("multDiv").append(mulh1)
})