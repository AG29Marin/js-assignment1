let player_wins = 0;
let computer_wins = 0;

let options = ["rock", "paper", "scissors"];

function computerPlay() {
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}


function playRound(playerSelection, computerSelection) {
    playerSelection =  prompt("Type Rock/Paper/Scissors: ").toLowerCase();;
    computerSelection = computerPlay();
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win!");
        player_wins += 1;
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win!");
        player_wins += 1;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win!");
        player_wins += 1;
    }

    else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    // write a tie
    else {
        console.log("You lose!");
        computer_wins += 1;
    }
    
}

function game() {
    for(i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Out of 5 rounds you won: ${player_wins}`);
}

game();
