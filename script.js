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

    while (playerScore < 5 || computerScore < 5) {
        console.log(`Round ${round}! START!`);

        let playerSelection = prompt("Enter your selection: ").toLowerCase();
        console.log("Player selection: " + playerSelection);

        let computerSelection = getComputerChoice();
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

        round++;
    } ;

    

    console.log("Game over!");
    let winner = getWinner(playerScore, computerScore);
    
    if (winner === 'player') {
        console.log("You win!");
    } else if (winner === 'computer') {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
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

let askForGame = confirm("Do you want to play a game?");

while(askForGame) {
    game();
    askForGame = confirm("Another game?");
}

console.log("Thanks for playing!");
