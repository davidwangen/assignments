const form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form["travel-location"].value;
    const diet = []
    for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
                diet.push(form.diet[i].value)
            }
        }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet );
}
submit.addEventListener("click", formAlert) 