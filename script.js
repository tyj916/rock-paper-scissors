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
                return tie(playerSelection);
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

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = 'Rock';
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        switch (result) {
            case 'tie':
                console.log(tie(playerSelection));
                break;

            case 'player win':
                console.log(playerWin(playerSelection, computerSelection));
                break;

            case 'player lose':
                console.log(playerLose(playerSelection, computerSelection));
                break;

            default:
                console.log("Something is wrong with the result");
        }
    }
}

game();
