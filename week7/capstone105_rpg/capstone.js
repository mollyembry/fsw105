var readlineSync = require("readline-sync");
const player = readlineSync.question('What is your name? ');
readlineSync.question('Welcome ' + player + ' are you ready to risk it all? Press Enter to start.');


const enemies = ['Grim Reaper', "Evil Shadow", 'Wicked Witch'];
const inventory = ['Weapon', 'Magic potion', 'Invisible cloak'];
var prize = [];
let playerLife = 50;
const moves = ['jump over', 'fast run', 'walk' ];
let grabItem = inventory[Math.floor(Math.random()*inventory.length)];

function game() {
    const defense = Math.floor(Math.random()*(7 - 6 + 5) + 6);
    const enemy = enemies[Math.floor(Math.random()* enemies.length )];
    let enemyLife = 50;
    const enemyDefense = Math.floor(Math.random() *(6 - 5 + 4) + 6);

    const choices = readlineSync.keyInSelect(moves, "Choose your next move. ");

    if (moves[choices] == 'walk') {
        return playerLife = 0;
    } else if (moves[choices] == 'fast run') {
        console.log(player + " " + playerLife + '\ninventory' + grabItem);
    } else if (moves[choices] == 'jump over') {
        let key = Math.random();
        if (key <= .3) {
            console.log('Jumping over enemy');
        } else if (key >= .3) {
            console.log(enemy + ' is preparing for attack');
            while(enemyLife > 0 && playerLife > 0) {

                const nextMove = readlineSync.question('You are still alive, what will your next move be? press a to try to escape or b to FIGHT!!'  );

                switch(nextMove){
                    case 'a':
                    const escape = Math.random();
                    if(escape < .5) {
                        console.log('You thougt it would be that easy?' + enemy + 'wont let you escape and attakcs you with' + enemyDefense);
                    } else {
                        console.log(' YOUR ESCAPED!!');
                        break;
                    
                    }
                    case 'b':
                        enemyLife == defense;
                        console.log('You are fighting back, you used ' + defense + ' on ' + enemy);

                        playerLife == enemyDefense;
                        console.log('The ENEMY ' + enemy + ' IS ATTACKING YOU with ' + enemyDefense);

                        if (enemyLife <= 0) {
                            console.log(' You have defeated ' + enemy + 'you have recived a prixe ' +grabItem );
                            let power = Math.random();
                            if(power <= .3) {
                                prize.push(grabItem);
                            }
                        } else if(playerLife <= 0) {
                            console.log('You have been killed by .. ' + enemy);
                        }
                    }
            }
        }
    }
}
while(playerLife >0) {
    playerRestore = function(){
        userActive = true;
        playerLife = 50;
        };
        playerRestore();
        game();
}





