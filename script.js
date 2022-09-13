function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getComputerChoise () {
    let num =  Math.floor(Math.random() * 3);
    return num == 2 ? 'paper'
    : num == 1 ? 'rock' 
    : 'scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    //draw
    if (playerSelection === computerSelection) {
        writeResult(`Draw, Both choosed ${capitalizeFirstLetter(playerSelection)}`);
    } else { 
        //win lose
        if (    
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') 
        ) {
            writeResult(`You won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`);
            addScore('player');
            writeScore('player');
        } else {
            writeResult(`You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`);
            addScore('computer');
            writeScore('computer');
        }
    }

    if (isGameOver()) {
        endGameScreen();
    }
}

function isGameOver() {
    return scorePlayer === 5 || scoreComputer === 5;
}

let scorePlayer = 0;
let scoreComputer = 0;

function addScore(arg) {
    if (arg === 'player') scorePlayer += 1;
    if (arg === 'computer') scoreComputer += 1;
}

function getScore(arg) {
    if (arg === 'player') return scorePlayer;
    if (arg === 'computer') return scoreComputer;
}

/// DOM MANIP

function writeResult(string) {
    const result = document.getElementById('result');
    result.textContent = string;
}

function writeScore(arg) {
    const spanPlayerScore = document.getElementById('player-score');
    const spanComputerScore = document.getElementById('computer-score');

    if (arg == "player") spanPlayerScore.textContent = getScore('player');
    if (arg == "computer") spanComputerScore.textContent = getScore('computer');
}




function game() {
    //hide menu and show game.
    startContainer = document.querySelector('.start').style.display = 'none';
    gameContainer = document.querySelector('.game-container').style.display = 'block';
    scoreContainer = document.querySelector('.score-container').style.display = 'block';

    const rock = document.getElementById('btn-rock').addEventListener('click',e => playRound('rock', getComputerChoise()));
    const paper = document.getElementById('btn-paper').addEventListener('click',e => playRound('paper', getComputerChoise()));
    const scissors = document.getElementById('btn-scissors').addEventListener('click',e => playRound('scissors', getComputerChoise()));
}

function endGameScreen() {
    gameContainer = document.querySelector('.game-container').style.display = 'none';
    endContainer = document.querySelector('.end').style.display = 'block';
    result = document.querySelector('#result').textContent = ""
}

//to implement -- 
//button animation


// const buttons = document.querySelectorAll('.btn')

// buttons.forEach(btn => {
//     btn.addEventListener('mouseover', btn.classList.add('mouseover'));

//     // btn.addEventListener('mouseout', btn.classList.remove('mouseover'));
//     console.log(btn)
// })

// buttons.forEach(btn => btn.addEventListener('transitioned', removeTransition));








const startButton = document.querySelector('.btn-start').addEventListener('click', e => game());

