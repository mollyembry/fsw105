function fiveAndGreaterOnly (arr) {
    const result = arr.filter(function(num){
        if (num >= 5) {
            return true;
        }
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
//2
function evensOnly(arr) {
    const result = arr.filter(function(num) {
        if(num % 2 === 0) {
            return true;
        }
    });
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));
// Extra Credit

function ofAge(arr) {
    const resultAge = arr.filter(function(person){
        if (person.age >= 17) {
            return true;
        }
    });
    return resultAge;
}
console.log(ofAge([
    { name: "Angeline Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));
//sectionB 1
function doubleNumbers(arr) {
    const resultDoub = arr.map(function(num) {
        return num * 2;
     });
     return resultDoub;
}
console.log(doubleNumbers([2, 5, 100]));
//2
function stringItUp(arr) {
    const stringResult = arr.map(function(num) {
        return num.toString();
    });
    return stringResult;
}
console.log(doubleNumbers([2, 5, 100]));
//section c 1
function total(arr) {
    const arrayTot = arr.reduce(function(final, num) {
        return final + num;
    });
    return arrayTot;
}
console.log(total([1, 2, 3]));
//2
function stringConcat(arr) {
    const resultString = arr.reduce(function(final, num) {
        return final.toString() + num.toString();
    });
    return resultString
}
console.log(stringConcat([1, 2, 3]));
//3
function totalVotes(arr) {
    const votes = arr.reduce(function(final, voter) {
        if (voter.votes) {
            final++;
        }
        return final;
    }, 0);
    return votes;
}
var voters = [
    { name: "Bob", age: 30,voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted:true },
    { name: "Ed", age: 55, voted: true },
    { name: "tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false }, 
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters));
//section d 1
function leastToGreatest(arr) {
    const resultLtoG = arr.sort(function(a,b){

    });
    return resultLtoG;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
//2
function greatestToLeast(arr) {
    const greatNumArr = arr.sort(function(a, b) {
        return b = a;
    });
    return greatNumArr;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
//3
function lengthSort(arr) {
    const lengthArr = arr.sort(function(a, b) {
        return a.length = b.length;
    });
    return lengthArr;
}
console.log(lengthSort(["Dog", "Wolf", "By", "Family", "Eaten"]));
