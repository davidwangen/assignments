const form = document.theForm
console.log(form)

form.addEventListener("submit" , function(event){
    event.preventDefault()
    const goombaAmount = form.goombaNumber.value
    const bobOmbsAmount = form.bobOmbsNumber.value
    const cheepCheepsAmount = form.cheepCheepsNumber.value
    form.goombaNumber.value = ""
    form.bobOmbsNumber.value = ""
    form.cheepCheepsNumber.value = ""
    function goombaCost(num1 , num2){
        return (Number(goombaAmount) * (Number(5)))
    }
    function bobOmbsCost (num1, num2){
        return (Number(bobOmbsAmount) * (Number(7)))
    }
    function cheepCheepsCost (num1 , num2){
        return (Number(cheepCheepsAmount) * (Number(11)))
    }

    const goombaTotal = goombaCost()
    const bobOmbsTotal = bobOmbsCost()
    const cheepCheepsTotal = cheepCheepsCost()
    const finalTotal = (Number(goombaTotal) + (Number(bobOmbsTotal) + (Number(cheepCheepsTotal))))
    //const totalToAppend = document.createElement("h1")
    //totalToAppend.textContent = (Number(finalTotal)) 
    document.getElementById("cost").append(finalTotal + " coins")
    


})