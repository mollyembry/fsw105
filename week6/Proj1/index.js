let employees = [];

function Employee(name, jobTitle, salary, status= "Full time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log("${name} ${jobTitle} ${salary}" + this.status);
    };
    employees.push(this)
    
}
Employee.prototype.changeJobTitle = function(){
    this.jobTitle = "Contractor";
    };
let employee1 = new Employee("Sarah Parker", "Manager", "$100,000");
let employee2 = new Employee("Susan Larry", "Assistant Manager", "$70,000");
employee2.changeJobTitle();
let employee3 = new Employee("Mark Whalberg", "Receptionist", "$50,000");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();