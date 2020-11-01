//Preliminaries
//1
if (5 > 3) {
    console.log("is greater than")
}
//2
var animal = {
    type: "cat",
    size: 3,
};
if (animal.size === 3) {
    console.log("is the length")
}
//3
if ("cat" === "dog") {
    console.log("is the same");
} else if ("cat" !== "dog") {
    console.log("not the same")
}

//Bronze medal
//1
var person = {
    name: "Bobby",
    age: 12,
};
if (person.age === 18) {
    console.log(person.name + " " + "is allowed");
} else if (person.age !== 18) {
    console.log(person.name + " " + "is underage");
    }
//2
if (person.name.charAt(0) === "B") {
    console.log("allowed");
} else console.log("not allowed");
//3
if (person.name.charAt(0) === "B" && person.age === 18) {
    console.log("allowed");
} else console.log("not allowed");

//Silver medal
//1
if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else console.log("not equal at all");
//2
if (1 <= 2 && 2 === 4) {
    console.log("yes");
} else console.log("no");
