function getComputerChoise () {
    let num =  Math.floor(Math.random() * 3);
    return num == 2 ? 'paper'
    : num == 1 ? 'rock' 
    : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return ("Draw, Both choosed Paper");
        } else if (computerSelection == 'rock'){
            scorePlayer++;
            return ("You won! Paper beats Rock");
        } else {
            scoreComputer++;
            return ("You lose! Scissors beats Paper");
        }
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            scoreComputer++;
            return ("You lose! Paper beats Rock");
        } else if (computerSelection == 'rock'){
            return ("Draw, Both choosed Rock");
        } else {
            scorePlayer++;
            return ("You won! Rock beats Scissors");
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            scorePlayer++;
            return ("You won! Scissors beats Paper");
        } else if (computerSelection == 'rock'){
            scoreComputer++;
            return ("You lose! Rock beats Scissors");
        } else {
            return ("Draw, Both choosed Scissors");
        }
    }
}


function game() {
    alert("Lets play Rock Paper Scissors, a five round game!")
    for (let i = 0; i < 5; i++) {
        alert("Round " + (i + 1) + "!\nPlayer Score:" + scorePlayer + "\nComputer Score: " + scoreComputer);
        let playerSelection = prompt("Choose Paper, Rock or Scissors");
        let computerSelection = getComputerChoise();
        alert(playRound(playerSelection, computerSelection));
    }
    alert("Game Over\nFinal Score:\nPlayer:" + scorePlayer + "  Computer: " + scoreComputer );
}

let scorePlayer = 0;
let scoreComputer = 0;

game(); 