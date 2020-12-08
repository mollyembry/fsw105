// Number 1
const person = "John";
const age = 101;
function runForLoop(pets) {
    const petObjects = [];
    for ( let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] };
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name = ", name);
        pet.name =  name ;
        petObjects.push(pet);
    }
    console.log("man name: ", person);
    return petObjects
}
runForLoop(["cat", "dog"]);
//Number 2
const carrots =["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot};
    });
};
console.log(carrots);
//Number 3
const people = [{
    name: "Princess Peach",
    friendly: false
},
{
    name: "Luigi",
    friendly: true
},
{   name: "Mario",
    friendly: true

},
{
    name: "Bowser",
    friendly: false
}
];
filterForFriendly = arr => {
    return arr.filter(function(person) {
        return person.friendly
    });
};
console.log(filterForFriendly(people));
//Number 4
doMathSum = (a, b) => a + b;
console.log(doMathSum(5, 2));
 
produceProduct = (a,b) => a* b;
console.log(produceProduct(5, 2));
//Number5
function printString(firstName, lastName, age) {
    firstName = "Jane";
    lastName = "Doe";
    age = 100;
    return("Hi " + firstName + " " + lastName + " , how does it feel to be " + age + "?");
}
    console.log(printString());
//Number 6
function printString(firstName, lastName, age) {
    firstName = "Jane";
    lastName = "Doe";
    age = 100;
    return(` Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
}
console.log(printString());
//Number 7
const animals = [
    {type: "dog", name: "theodore" },
    {type: "cat", name: "whiskers"},
    { type: "pig", name: "piglette" },
    { type: "dog", name: "sparky"}
];
filterForDogs = arr => arr.filter ( animal => (animal.type === "dog") ? true :false);
  console.log(filterForDogs([
    {type: "dog", name: "theodore" },
    {type: "cat", name: "whiskers"},
    { type: "pig", name: "piglette" },
    { type: "dog", name: "sparky"}

]));
//Number 8
function whereWhoString(location, name) {
    return (`Hello ${name}! \n Welcome to ${location}. \n I hope you enjoy your stay, please ask the President of ${location} if you need anything.`);
}
console.log(whereWhoString("Hawaii", "Janice"));




    