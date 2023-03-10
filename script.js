// Program starts
// Get user choice
// When user enters anything other than rock/paper/scissor, ask them to re-enter
// Get computer choice
// Compare user choice with computer choice
// Show winner and add a score to the scoreboard of the winner
// After 5 rounds of game, display winner and loser

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return (computerChoice == 0 ? "Rock":
           computerChoice == 1 ? "Paper":
           "Scissors");
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (Rock, Paper or Scissors):").toLowerCase();
    while (!(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors')) {
        playerChoice = prompt("Invalid choice, please try again (Rock, Paper or Scissors):").toLowerCase();
    }
    let firstChar = playerChoice.charAt(0);
    return firstChar.toUpperCase() + playerChoice.slice(1);
}

function tie(choice) {
    return `No winner! Both of you choose ${choice}`;
}

function playerWin(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function playerLose(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        switch (computerSelection) {
            case 'Rock':
                return 'tie';
            case 'Paper':
                return 'player lose';
            case 'Scissors':
                return 'player win';
            default:
                return 'Something is wrong';
        }
    } else if (playerSelection == 'Paper') {
        switch (computerSelection) {
            case 'Paper':
                return 'tie';
            case 'Scissors':
                return 'player lose';
            case 'Rock':
                return 'player win';
            default:
                return 'Something is wrong';
        }
    } else if (playerSelection == 'Scissors') {
        switch (computerSelection) {
            case 'Scissors':
                return 'tie';
            case 'Rock':
                return 'player lose';
            case 'Paper':
                return 'player win';
            default:
                return 'Something is wrong';
        }
    } else {
        return 'Something is wrong in play round';
    }
}

function showWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("Player WIN! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("Player LOSE! You weak!");
    } else {
        console.log("It's a tie! Phew!");
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i}, fight!`);

        switch (result) {
            case 'tie':
                console.log(tie(playerSelection));
                break;

            case 'player win':
                console.log(playerWin(playerSelection, computerSelection));
                playerScore++;
                break;

            case 'player lose':
                console.log(playerLose(playerSelection, computerSelection));
                computerScore++;
                break;

            default:
                console.log("Something is wrong with the result");
        }

        console.log(`**Scoreboard**`);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    showWinner(playerScore, computerScore);
}

game();