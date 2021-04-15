var theSquare =document.getElementById("square")


function changeToBlue(){
theSquare.style.backgroundColor= "blue"
}

function changeToRed(){
    theSquare.style.backgroundColor="red"
}
function changeToYellow(){
    theSquare.style.backgroundColor="yellow"
}
function changeToGreen(){
    theSquare.style.backgroundColor="green"
}
function changeToOrange(){
    theSquare.style.backgroundColor="orange"
}

theSquare.addEventListener("mouseover",changeToBlue )
theSquare.addEventListener("mousedown",changeToRed)
theSquare.addEventListener("mouseup", changeToYellow)
theSquare.addEventListener("dblclick" , changeToGreen)
theSquare.addEventListener("mouseout", changeToOrange)
document.addEventListener("keydown", function(event){
    if(event.key === 'r'){
        changeToRed();
    }if(event.key === 'b'){
        changeToBlue();
    }if(event.key === "y"){
        changeToYellow();
    }if(event.key === 'g'){
        changeToGreen();
    }if(event.key === 'o'){
        changeToOrange();
    }
})
