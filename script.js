// Keeping the score
let playerWins = 0;
let computerWins = 0;

// Options into an array
let options = ["rock", "paper", "scissors"];

// Function for the computer to randomly choose an option.
function computerPlay() {
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// Making a loop for playing the game as many times as the user wants
while (true) {

    //Prompting the user for his choice of playing the game or not 
    let question = prompt("Do you want to play a game?(yes/no): ");
    let userAnswer = question?.toLowerCase();

    if (userAnswer === "yes") {
        function playRound(playerSelection, computerSelection) {
            // Prompting the user for selecting an option
            playerSelection =  prompt("Type Rock/Paper/Scissors: ").toLowerCase();;
            computerSelection = computerPlay();
            
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

        // Function for playing the game five times in a row
        function game() {
            for(i = 0; i < 5; i++) {
                playRound();
            }

            console.log(`Out of 5 rounds you won: ${playerWins}`);

        }

        // Running the program
        game();
    }

    // Exiting the program if the user says no
    else {
        console.log("Goodbye!");
        break;
        
    }
}