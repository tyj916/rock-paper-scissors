function getComputerChoice() {
    const randomChoice = Math.ceil(Math.random() * 3);
    return (randomChoice == 1) ? 'Rock' :
            (randomChoice == 2) ? 'Paper' : 'Scissors';
}

function capitalizeSelection(playerSelection) {
    const firstLetter = playerSelection[0];
    return firstLetter.toUpperCase() + playerSelection.slice(1).toLowerCase();
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

function game() {
    const rpsButtons = document.querySelector('#rps-buttons');
    console.log(rpsButtons);
    rpsButtons.addEventListener('click', event => {
        let target = event.target;

        switch (target.id) {
            case 'rock':
                console.log('User selects Rock');
                break;
            
            case 'paper':
                console.log('User selects Paper');
                break;

            case 'scissors':
                console.log('User selects Scissors');
                break;
        }
    })

    // const playerSelection = getPlayerChoice();
    // const computerSelection = getComputerChoice();
    // const roundResult = playRound(playerSelection, computerSelection);
    // console.log(roundResult);
}

game();