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
        return 'error';
    }
}

function displayRoundResult(winner, playerSelection, computerSelection) {
    const displaySection = document.querySelector('#results');
    displaySection.textContent = '';

    const playerSection = document.createElement('p');
    playerSection.id = 'player-choice';
    playerSection.textContent = `Player has selected ${playerSelection}!`;
    displaySection.append(playerSection);

    const computerSection = document.createElement('p');
    computerSection.id = 'computer-choice';
    computerSection.textContent = `Computer has selected ${computerSelection}!`;
    displaySection.append(computerSection);

    const roundResult = document.createElement('p');
    roundResult.id = 'round-result';
    switch (winner) {
        case 'player':
            roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            break;
        
        case 'computer':
            roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            break;

        case 'tie':
            roundResult.textContent = `It's a tie! Both of you select ${playerSelection}`;
            break;

        case 'error':
            roundResult.textContent = "I don't know what happened, it's not working!";
            break;
    }
    displaySection.append(roundResult);
}

function displayScore(playerScore, computerScore) {
    const scoreboard = document.querySelector('#scoreboard');
    scoreboard.style['white-space'] = 'pre';
    scoreboard.textContent = `Scoreboard:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
}

function displayWinner(winner) {
    const scoreboard = document.querySelector('#scoreboard');
    const winnerSection = document.createElement('p');
    winnerSection.textContent = `Game over! The winner is ${winner}!`;
    scoreboard.append(winnerSection);
}

function game() {
    let playerScore = 0, computerScore = 0;
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

        const roundWinner = playRound(playerSelection, computerSelection);
        switch (roundWinner) {
            case 'player':
                playerScore++;
                break;
            
            case 'computer':
                computerScore++;
                break;
        }
        displayRoundResult(roundWinner, playerSelection, computerSelection);
        displayScore(playerScore, computerScore);
        
        if (playerScore === 5 || computerScore === 5) {
            displayWinner(roundWinner);
            playerScore = 0;
            computerScore = 0;
        }
    });
}

game();