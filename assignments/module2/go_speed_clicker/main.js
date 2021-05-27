const countButton = document.getElementById("countButton")
const displayCount = document.getElementById("displayCount")
let count = 0
countButton.onclick= function(){
    count ++ 
    localStorage.setItem("clicks" , count )
    displayCount.textContent = count
}    
const storedClicks =localStorage.getItem("clicks")
    displayCount.textContent = storedClicks  