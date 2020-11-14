var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

//Number 1
function isOldEnough(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
            console.log("old enough");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("not old enough")
        }
    }
}
isOldEnough();
console.log("============");

//Number 2
function isOldEnoughName(){
    for ( i= 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
            }
            else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18){
                 console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enought to see Mad Max.")
            }
    }
}
isOldEnoughName();
console.log("============");

//Number 3
function isOldEnoughNameAndGender(){
    for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, dont let HIM in.");
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, SHE'S good to see Mad Max Fury Road.")
        }
    }
}
isOldEnoughNameAndGender();
console.log("============")

//Number 4
var evenAndOdd = 0
for ( var i = 0; i <101; i++){
if (evenAndOdd%2 === 0){
    console.log( evenAndOdd + " even");
    evenAndOdd++;
    } else if (evenAndOdd%2 !==0){
        console.log( evenAndOdd + " odd");
        evenAndOdd++;
    }
}
