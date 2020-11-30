let employees = [];

function Employee(name, jobTitle, salary, status= "Full time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    printEmployeeForm = function() {
        console.log("${name} ${jobTitle} ${salary}" + this.status);
    };
}
let employee1 = new Employee("Sarah Parker", "Manager", "$100,000");
let employee2 = new Employee("Susan Larry", "Assistant Manager", "$70,000");
employee2.status = "Contractor";
let employee3 = new Employee("Mark Whalberg", "Receptionist", "$50,000");
employees.push(employee1, employee2, employee3);
console.log(employees);