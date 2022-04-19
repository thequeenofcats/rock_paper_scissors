const roundElement = document.querySelector('.round');
const restartButton = document.querySelector('.restart');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const gameStatus = document.querySelector('.status');
const roundStatus = document.querySelector('.round');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const tiesElement = document.querySelector('.ties-score');
const gameOver = document.querySelector('.game-over');
const gameElements = document.querySelector('.game');
const gameOverText = document.querySelector('.end-text');
const playAgainButton = document.querySelector('.end-button');

let computerSelection;
let playerSelection;

let playerScore = 0;
let computerScore = 0;
let tiesCount = 0;
let round = 0;

function computerPlay() {
    
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerSelection = 'ROCK';
    } else if (random === 1) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS'
    }
    return computerSelection
}

function playRound() {

    if (playerSelection === computerSelection) {
        gameStatus.textContent = `It'a tie! You both chose ${playerSelection}.`;
        tiesCount++
        round++
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        gameStatus.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerScore++
        round++
    } else {
        gameStatus.textContent = `Computer won. ${computerSelection} beats ${playerSelection}`;
        computerScore++
        round++
    }

    if (playerScore === 10 ) {
        gameOverText.textContent = `Congratulations! You won!`;
        gameElements.style.display = 'none';
        gameOver.style.display = 'flex';
    } else if (computerScore === 10) {
        gameOverText.textContent = `Sorry! Computer won!`;
        gameElements.style.display = 'none';
        gameOver.style.display = 'flex';
    }

    roundStatus.textContent = `Round ${round}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    tiesElement.textContent = tiesCount;

}



rockButton.addEventListener('click', function() {
    playerSelection = 'ROCK';
    computerPlay()
    playRound()
})

paperButton.addEventListener('click', function() {
    playerSelection = 'PAPER';
    computerPlay()
    playRound()
})

scissorsButton.addEventListener('click', function() {
    playerSelection = 'SCISSORS';
    computerPlay()
    playRound()
})

restartButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    tiesCount = 0;
    round = 0;
    gameStatus.textContent = `Press a button to start the game!`;
    roundStatus.textContent = `Round ${round}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    tiesElement.textContent = tiesCount;
})

playAgainButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    tiesCount = 0;
    round = 0;
    gameStatus.textContent = `Press a button to start the game!`;
    roundStatus.textContent = `Round ${round}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    tiesElement.textContent = tiesCount;

    gameElements.style.display = 'flex';
        gameOver.style.display = 'none';
})