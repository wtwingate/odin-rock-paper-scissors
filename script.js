/*
Rock, Paper, Scissors
This program allows the user to play a simple game of 
rock, paper, scissors against a computer opponent.
*/

// Set global variables
let playerSelection;
let computerSelection;
let winRecord = 0;
let lossRecord = 0;
let tieRecord = 0;

// Score tracker
const wins = document.querySelector("#win");
const losses = document.querySelector("#loss");
const ties = document.querySelector("#tie");

// Round results
const roundResults = document.querySelector("#round-results");
const resultMessage = document.querySelector("#result-text");

// Click button to play a round
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  playRound("rock");
  checkScore();
});
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  playRound("paper");
  checkScore();
});
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  playRound("scissors");
  checkScore();
});

// Various and sundry functions
function playRound(choice) {
  playerSelection = choice;
  computerSelection = getComputerChoice();
  recordResult(getResult(playerSelection, computerSelection));
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return (result = "tie");
      case "paper":
        return (result = "loss");
      case "scissors":
        return (result = "win");
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return (result = "win");
      case "paper":
        return (result = "tie");
      case "scissors":
        return (result = "loss");
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        return (result = "loss");
      case "paper":
        return (result = "win");
      case "scissors":
        return (result = "tie");
    }
  }
}

function recordResult(result) {
  if (result === "win") {
    resultMessage.textContent = `You won! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}.`;
    wins.textContent = `Wins = ${(winRecord += 1)}`;
  } else if (result === "loss") {
    resultMessage.textContent = `You lost... ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}.`;
    losses.textContent = `Losses = ${(lossRecord += 1)}`;
  } else if (result === "tie") {
    resultMessage.textContent = `That's a tie. You both chose ${playerSelection}.`;
    ties.textContent = `Ties = ${(tieRecord += 1)}`;
  }
}

function checkScore() {
  if (winRecord === 5 || lossRecord === 5) {
    if (winRecord === 5) {
      resultMessage.textContent =
        "Hooray! You beat the computer! Humanity is saved!";
    } else {
      resultMessage.textContent =
        "Aw shucks... you lost. Now everyone you love is doomed!";
    }
    resetGame();
  }
}

function resetGame() {
  resetButton = document.createElement("button");
  resetButton.textContent = "RESET";
  roundResults.appendChild(resetButton);
  resetButton.addEventListener("click", () => {
    winRecord = lossRecord = tieRecord = 0;
    wins.textContent = `Wins = ${winRecord}`;
    losses.textContent = `Losses = ${lossRecord}`;
    ties.textContent = `Ties = ${tieRecord}`;
    resultMessage.textContent =
      "The fate of the world depends on you... again!";
    roundResults.removeChild(resetButton);
  });
}
