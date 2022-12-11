function getComputerChoice() {
    const selections = ['rock', 'paper', 'scissor'];
    return selections[Math.floor(Math.random()*selections.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            return 'You Win! Scissor beats rock!';
        }
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats rock!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissor') {
            return 'You Lose! Scissor beats paper!';
        }
        if (computerSelection === 'rock') {
            return 'You Win! Scissor beats rock!';
        }
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats scissor!';
        }
        if (computerSelection === 'paper') {
            return 'You Win! Scissor beats paper!';
        }
    } else {
        return 'What?! Try again.';
    }
}

function game() {
    console.log("SHOW ME YOUR POWER! KIDS!");
    const selections = document.querySelectorAll(".rpsSelection");
    selections.forEach((selection) => {
        selection.addEventListener('click', () => {
            let playerScore = 0, computerScore = 0, round = 1;

            console.log(`Round ${round}!!`)

            const playerSelection = selection.id;
            console.log("Player selection: " + playerSelection);
            const computerSelection = getComputerChoice();
            console.log("Computer selection: " + computerSelection);

            let result = playRound(playerSelection, computerSelection);
            console.log(result);

            if (result.includes('Win')) {
                playerScore += 1;
            } else if (result.includes('Lose')) {
                computerScore += 1;
            } else {
                console.log("Nobody gets score");
            }

            console.log(`Scoreboard: 
                    Player: ${playerScore}
                    Computer: ${computerScore}`);

            if (playerScore >= 5 || computerScore >= 5) {
                console.log("Game over!");
                let winner = getWinner(playerScore, computerScore);
                
                if (winner === 'player') {
                    console.log("You win!");
                } else if (winner === 'computer') {
                    console.log("You lose!");
                } else {
                    console.log("Draw!");
                }

                const oneMore = askForGame();
                if (oneMore) {
                    game();
                }
            }

            round++;
        });
    });
}

function getWinner(playerScore, computerScore) {
    let winner;

    if (playerScore > computerScore) {
        winner = 'player';
    } else if (playerScore < computerScore) {
        winner = 'computer';
    } else {
        winner = 'draw';
    }

    return ((playerScore > computerScore) ? 'player' :
            (computerScore > playerScore) ? 'computer':
            'draw');
}

function askForGame() {
    return confirm("Do you want to play again?");
}

function createGameButtons() {
    gameContainer.textContent = '';

    const rockButton = document.createElement("button");
    rockButton.setAttribute('id', 'rock');
    rockButton.classList.add('rpsSelection');
    rockButton.textContent = 'rock';

    const paperButton = document.createElement("button");
    paperButton.setAttribute('id', 'paper');
    paperButton.classList.add('rpsSelection');
    paperButton.textContent = 'paper';

    const scissorButton = document.createElement("button");
    scissorButton.setAttribute('id', 'scissor');
    scissorButton.classList.add('rpsSelection');
    scissorButton.textContent = 'scissor';

    gameContainer.appendChild(rockButton);
    gameContainer.appendChild(paperButton);
    gameContainer.appendChild(scissorButton);
}

game();

// const gameContainer = document.querySelector("#game");
// const startGame = document.querySelector("#start-game");
// startGame.addEventListener('click', () => {
//     const gameTitle = document.querySelector("#title");
//     gameTitle.textContent = "LET'S GET STARTED!!!"
//     createGameButtons();
// });

