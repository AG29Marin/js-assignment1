// Keeping the score
let playerWins = 0;
let computerWins = 0;

// Options into an array
const options = ["rock", "paper", "scissors"];

// Function for the computer to randomly choose an option.
function computerPlay() {
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// Function for running the game for 5 rounds
function game() {
    for(i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Out of 5 rounds you won: ${playerWins}`);
}

function playRound(playerSelection, computerSelection) {
    // Prompting the user for selecting an option
    playerSelection = prompt("Type Rock/Paper/Scissors: ").toLowerCase();
    computerSelection = computerPlay();

    // Checking if the input is rock, paper or scissors
    if(!options.includes(playerSelection)) {
        alert("Please enter the valid input!");
        return playRound();
    }

    // Conditionals for keeping the score
    if (playerSelection === options[0] && computerSelection === options[2]) {
        console.log(`The computer selected ${computerSelection}. You win!`);
        playerWins += 1;
    }
    else if (playerSelection === options[1] && computerSelection === options[0]) {
        console.log(`The computer selected ${computerSelection}. You win!`);
        playerWins += 1;
    }
    else if (playerSelection === options[2] && computerSelection === options[1]) {
        console.log(`The computer selected ${computerSelection}. You win!`);
        playerWins += 1;
    }
    else if (playerSelection === computerSelection) {
        console.log(`The computer selected ${computerSelection}. It's a tie!`);
    }
    else {
        console.log(`The computer selected ${computerSelection}. You lose!`);
        computerWins += 1;
    }
}

//Prompting the user for his choice of playing the game or not 
let question = prompt("Do you want to play a game?(yes/no): ");
let userAnswer = question?.toLowerCase();

// Running the program if the user wants to
if (userAnswer === 'yes') {
     game();
}

else {
    alert("Goodbye!");
}

