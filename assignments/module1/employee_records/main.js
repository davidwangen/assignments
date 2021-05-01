var employees = []

function Employee(name , jobtitle , salary, status = "Full Time" ){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = status

    Employee.prototype.printEmployeeForm = function(){
        console.log("Name: " + this.name , "Job Title:" +this.jobtitle, "Salary: " + this.salary, "Status: " +this.status )
    }

}


var Bob = new Employee("Bob", "The Main Guy", "$1,000,000" )
employees.push(Bob)
Bob.printEmployeeForm()


var Billy = new Employee("Billy", "The Second Guy", "$500,000" ,"Part Time")
employees.push(Billy)
Billy.printEmployeeForm()

var Butch = new Employee("Butch", "The Third Guy", "$250,000" , "Contract")
employees.push(Butch)
Butch.printEmployeeForm()






