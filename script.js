const rockButton = document.querySelector('[data-choice="rock"]');
const paperButton = document.querySelector('[data-choice="paper"]');
const scissorsButton = document.querySelector('[data-choice="scissors"]');
const resetButton = document.querySelector('[data-choice="reset"]');
const startButton = document.querySelector('.start');
const playerScoreTxt = document.querySelector('.player-score');
const computerScoreTxt = document.querySelector('.computer-score');
const playerChoiceDiv = document.querySelector('.player-choice-div');
const computerChoiceDiv = document.querySelector('.computer-choice-div');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const gameStatus = document.querySelector('.game-status');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return "Paper";
        case 1:
        return 'Rock';
        case 2:
        return 'Scissors';
    }
    return randomNumber;
};

function result(playerSelection, computerSelection) {
       if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      playerScore++;
      playerScoreTxt.textContent = playerScore;
      gameStatus.textContent = 'You win this round!';
      
      } else if ( (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
      ) {
      computerScore++;
      computerScoreTxt.textContent = computerScore;
      gameStatus.textContent = 'Computer wins this round!';
    } else {
      gameStatus.textContent = "It's a tie!";
    }
};

function playRound() {
    let computerSelection = computerPlay();
    computerChoice.textContent = computerSelection;
    console.log("You threw " + playerSelection + ".");
    console.log("Computer threw " + computerSelection + ".");
    console.log(result(playerSelection, computerSelection));

    if (playerScore === 5) {

      gameStatus.textContent = 'Congratulations, you won!';
      rockButton.classList.add('start-first');
      paperButton.classList.add('start-first');
      scissorsButton.classList.add('start-first');
      resetButton.classList.add('start-first');
      playerChoiceDiv.classList.add('start-first');
      computerChoiceDiv.classList.add('start-first');
      startButton.classList.remove('start-first');
      
    } else if (computerScore === 5) {
      gameStatus.textContent = 'Sorry, computer won.';
      rockButton.classList.add('start-first');
      paperButton.classList.add('start-first');
      scissorsButton.classList.add('start-first');
      resetButton.classList.add('start-first');
      playerChoiceDiv.classList.add('start-first');
      computerChoiceDiv.classList.add('start-first');
      startButton.classList.remove('start-first');
    }


};


rockButton.addEventListener("click", function () {
    computerPlay();
    playerSelection = 'Rock';
    playRound();
    playerChoice.textContent = 'Rock';
})

paperButton.addEventListener("click", function () {
  computerPlay();
  playerSelection = 'Paper';
  playRound();
  playerChoice.textContent = 'Paper';
})

scissorsButton.addEventListener("click", function () {
  computerPlay();
  playerSelection = 'Scissors';
  playRound();
  playerChoice.textContent = 'Scissors';
})

resetButton.addEventListener("click", function() {
  playerScore = 0;
  playerScoreTxt.textContent = playerScore;
  computerScore = 0;
  computerScoreTxt.textContent = computerScore;
})

startButton.addEventListener("click", function() {
  playerScore = 0;
  playerScoreTxt.textContent = playerScore;
  computerScore = 0;
  computerScoreTxt.textContent = computerScore;
  rockButton.classList.remove('start-first');
  paperButton.classList.remove('start-first');
  scissorsButton.classList.remove('start-first');
  resetButton.classList.remove('start-first');
  playerChoiceDiv.classList.remove('start-first');
  computerChoiceDiv.classList.remove('start-first');
  startButton.classList.add('start-first');
  playerChoice.textContent = '';
  computerChoice.textContent = '';
  gameStatus.textContent = '';
})
