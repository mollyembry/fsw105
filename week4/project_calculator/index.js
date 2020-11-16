var readlineSync = require("readline-sync");
var numOne = readlineSync.questionInt("First Number:");
var numTwo = readlineSync.questionInt("Second Number:");
var operator = readlineSync.question("Please enter the operation to perform: add, sub, mul, div:");
function add(a, b) {
    let addNum = a + a;
    console.log("The result is: " + numOne + "plus " + numTwo + "equals " + addNum)
}
function mul(a, b) {
    let multiNum = a * b;
    console.log("The result is:" +numOne + " multiplies " + numTwo + "equals " + multiNum)
}

function div(a, b) {
    let divNum = a / b;
    console.log("The result is: " + numOne + " divided " + numTwo + "equals " + divNum)

}
function sub( a,b) {
    let subNum = a - b;
    console.log("The result is: " + numOne + " subtracted "  + numTwo + "equals " + subNum)
}
if (operator =="add"){
    add(numOne, numTwo);
} else if (operation == "sub"){
    sub(numOne, numTwo);
}else if (operation == "mul"){
    mul(numOne, numTwo);
}else if (operation =="div"){
    div(numOne, numTwo);
}else {
console.log("please enter valid operator: ");
}

