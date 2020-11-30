var readlineSync = require("readline-sync");
const player = readlineSync.question(" What is your name? ");
const welcome = " Welcome to your DOOM ${player}. Will you make it out alive?";
console.log(welcome);
let isAlive = true;
let foundKey = false;
while(isAlive == true) 
{
    const menuID = readlineSync.keyIn(" Press 1 to stick your hand in the hole \n Press 2 to discover the key \n Press 3 to escape you DOOM! ", {limit: "$<1-3>"});
    if (menuID == 1) {
        console.log(" You stuck your hand in the wall! You are DOOMED ${player}.");
        isAlive = false;
    }
    else if (menuID == 2 && foundKey == true) {
        console.log("${player} you have discovered the key! You may now unlock the door and escape! WINNER!");
    }
    else if(menuID == 7 && foundKey == false) {
        console.log("${player} Thats not the key keep looking!");
        foundKey = true;
    }
    else if(menuID == 3 && foundKey == false){
        console.log("${player} thats not the key you cant leave yet!");
    }
    else if(menuID == 3 && foundKey == true) {
        console.log("${player} You did it, you found the key GET OUT NOW YOUR FREE! WINNER!");
        isAlive = false;
    }
}
