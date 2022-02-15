

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return "paper";
        case 1:
        return 'rock';
        case 2:
        return 'scissors';
    }
    return randomNumber;
};


function result(playerSelection, computerSelection) {   
    if (playerSelection === computerSelection) {
      return "It's a tie";
    };
    
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return "Sorry, computer won!"
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        return "Sorry, computer won!"
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        return "Sorry, computer won!"
      }
    };

    if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        return "You won!"
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        return "You won!"
      }
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        return "You won!"
      }
    };

  };

  function keepScore() {
    let score = x; 
    if (result() === 'You won!') {
      let win = x++;
      return win
    }

    return score;
    
  }

  function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Rock, paper or scissors?");
    console.log("You threw " + playerSelection + ".");
    console.log("Computer threw " + computerSelection + ".");
    console.log(result(playerSelection, computerSelection));
    console.log(score);
  };

  function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
  };

  playGame();