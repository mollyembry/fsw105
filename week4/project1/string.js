//Number 1
function capitlizeAndLowercase(string) {
    console.log(string.toUpperCase()+ " " + string.toLowerCase());
}
var capAndLow = capitlizeAndLowercase("hello");

console.log("============")
//Number 2
function findMiddleIndex(string) {
    console.log(Math.floor(string.length / 2));
    }
    var roundedDown = findMiddleIndex("HELLO WORLD");

console.log("============")
//Number 3
function returnFirstHalf(str) {
    console.log(str.slice(0, str.length / 2));
}
var newHalf = returnFirstHalf("Hello World");

console.log("============")
//Number 4
function newCapAndLower(str) {
    var firstOne = (str.length / 2);
    var secondOne = str.slice(0, firstOne);
    var thirdOne = str.slice(firstOne);
    var final = secondOne.toUpperCase() + thirdOne.toLowerCase();
    console.log(final);
}
var halfAndHalf = newCapAndLower("Howdy")
