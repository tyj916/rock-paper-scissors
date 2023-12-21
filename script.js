function getComputerChoice() {
    const randomChoice = Math.ceil(Math.random() * 3);
    return (randomChoice == 1) ? 'Rock' :
            (randomChoice == 2) ? 'Paper' : 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            if (computerSelection == 'Scissors') {
                return 'You Win! Rock beats Scissors';
            } else if (computerSelection == 'Paper') {
                return 'You Lose! Paper beats Rock';
            } else {
                return 'No one wins! Both of you select Rock';
            }
            break;

        case 'Paper':
            if (computerSelection == 'Rock') {
                return 'You Win! Paper beats Rock';
            } else if (computerSelection == 'Scissors') {
                return 'You Lose! Scissors beats Paper';
            } else {
                return 'No one wins! Both of you select Paper';
            }
            break;

        case 'Scissors':
            if (computerSelection == 'Paper') {
                return 'You Win! Scissors beats Paper';
            } else if (computerSelection == 'Rock') {
                return 'You Lose! Rock beats Scissors';
            } else {
                return 'No one wins! Both of you select Scissors';
            }
            break;
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

function displayPlayerSelection(selection) {
    console.log(`Player selects ${selection}`)
}

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

        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    });



    // const playerSelection = getPlayerChoice();
    // const computerSelection = getComputerChoice();
    // const roundResult = playRound(playerSelection, computerSelection);
    // console.log(roundResult);
}

game();