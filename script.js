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
                return tie(playerSelection);
            case 'Paper':
                return playerLose(playerSelection, computerSelection);
            case 'Scissors':
                return playerWin(playerSelection, computerSelection);
            default:
                return 'Something is wrong';
        }
    } else if (playerSelection == 'Paper') {
        switch (computerSelection) {
            case 'Paper':
                return tie(playerSelection);
            case 'Scissors':
                return playerLose(playerSelection, computerSelection);
            case 'Rock':
                return playerWin(playerSelection, computerSelection);
            default:
                return 'Something is wrong';
        }
    } else if (playerSelection == 'Scissors') {
        switch (computerSelection) {
            case 'Scissors':
                return tie(playerSelection);
            case 'Rock':
                return playerLose(playerSelection, computerSelection);
            case 'Paper':
                return playerWin(playerSelection, computerSelection);
            default:
                return 'Something is wrong';
        }
    } else {
        return 'Something is wrong';
    }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));