// Number 1

function sum( num1, num2) {
    return num1 + num2
}
console.log(sum (45, 23))

//Number 2
function largest(num1, num2, num3) {
    return Math.max (num2, num2, num3) 
} console.log ( largest(4, 5, 7))

//Number 3 
function evenOddNum(num1) {
    var oddEven = num1 % 2
    if ( oddEven ===0 ) {
        return "even"
    } else {
        return "odd"
    }
    }
    console.log( evenOddNum(75))

//Number 4
function bigStringSmallString (string) {
    if ( string.length < 20) {
        return string + " " + string
    } else {
        return string.slice( 0, string.length / 2)
    }
}
console.log (bigStringSmallString("small string"))
console.log (bigStringSmallString("this is a big string over 20 characters"))

//EXTRA CREDIT