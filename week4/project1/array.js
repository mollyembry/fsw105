var fruit = [ "banana", "apple", "orange", "watermelon"];
var vegetables = [ "carrot", "tomato", "pepper", "lettuce"]
//Number 1
vegetables.pop();
console.log("vegetables:", vegetables);
console.log("===========")
//Number 2
fruit.shift();
console.log("fruit: "+ fruit);
console.log("===========")
//Number3
var indexOrange = fruit.findIndex(function(element) {
    return element == "orange";
})
console.log("Index of Orange", indexOrange);
console.log("===========")
//Number 4
fruit.push(indexOrange);
console.log("Fruits: " + fruit);
console.log("===========")
//Number 5 
var veggies = vegetables.length;
console.log("vegetables:" + vegetables);
console.log("============")
//Number 6
vegetables.push(veggies);
console.log("vegetables: " + vegetables);
console.log("============")
//Number 7
var food =fruit.concat(vegetables);
console.log("New:" + food);
console.log("===========")
//Number 8 
food.splice(4, 2);
console.log("Food:" + food);
console.log("==========")
//Number 9
food.reverse();
console.log("Reverse: " + food);
console.log("===========")
//Number 10
food.toString();
console.log("final foods: " + food);