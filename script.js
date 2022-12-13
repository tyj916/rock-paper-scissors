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
    let playerScore = 0, computerScore = 0, round = 1;

    const gameTitle = document.querySelector("#title");
    gameTitle.textContent = "SHOW ME YOUR POWER! KIDS! NOW MAKE YOUR DECISION:";
    console.log("SHOW ME YOUR POWER! KIDS! NOW MAKE YOUR CHOICE:");
    
    const selections = document.querySelectorAll(".rpsSelection");
    selections.forEach((selection) => {
        selection.addEventListener('click', () => {
            const gameDescription = document.querySelector("#description");
            let textContent = `Round ${round}!!`;

            const playerSelection = selection.id;
            textContent += "\nPlayer selection: " + playerSelection;

            const computerSelection = getComputerChoice();
            textContent += "\nComputer selection: " + computerSelection;

            let result = playRound(playerSelection, computerSelection);
            textContent += "\n" + result;

            if (result.includes('Win')) {
                playerScore += 1;
            } else if (result.includes('Lose')) {
                computerScore += 1;
            } else {
                textContent += ("\nNobody gets score");
            }

            textContent += (`\nScoreboard: 
                    Player: ${playerScore}
                    Computer: ${computerScore}`);

            if (playerScore >= 5 || computerScore >= 5) {
                textContent += ("\nGame over!");
                let winner = getWinner(playerScore, computerScore);
                
                if (winner === 'player') {
                    textContent += ("You win!");
                } else if (winner === 'computer') {
                    textContent += ("You lose!");
                } else {
                    textContent += ("Draw!");
                }

                playerScore = 0, computerScore = 0, round = 0;
            }

            round++;

            gameDescription.innerText = textContent;
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

const gameContainer = document.querySelector("#game");
const startGame = document.querySelector("#start-game");
startGame.addEventListener('click', () => {
    const gameTitle = document.querySelector("#title");
    gameTitle.textContent = "LET'S GET STARTED!!!";
    gameContainer.textContent = '';
    createGameButtons();
    game();
});