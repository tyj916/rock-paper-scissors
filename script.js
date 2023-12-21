function getComputerChoice() {
    const randomChoice = Math.ceil(Math.random() * 3);
    return (randomChoice == 1) ? 'Rock' :
            (randomChoice == 2) ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'player';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
               playerSelection == 'Paper' && computerSelection == 'Scissors' ||
               playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'computer';
    } else if (playerSelection === computerSelection) {
        return 'tie';
    } else {
        return 'Error! Result not expected';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your selection (Rock/Paper/Scissors", '').toLowerCase();
    while (!(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors')) {
        playerChoice = prompt("Please enter Rock, Paper and Scissors only", '').toLowerCase();
    }
    return capitalizeSelection(playerChoice);
}

/*
listen for user selection
user clicks one of the rps buttons
button get user selection
display user selection
get computer selection
display computer selection
compare user and computer selection
display winner of the round
add score to winner

*/

function game() {
    const rpsButtons = document.querySelector('#rps-buttons');
    rpsButtons.addEventListener('click', event => {
        const target = event.target;
        const computerSelection = getComputerChoice();
        let playerSelection = null;

        switch (target.id) {
            case 'rock':
                playerSelection = 'Rock';
                break;
            
            case 'paper':
                playerSelection = 'Paper';
                break;

            case 'scissors':
                playerSelection = 'Scissors';
                break;
        }

        const winner = playRound(playerSelection, computerSelection);
        console.log(winner);
    });
}

game();