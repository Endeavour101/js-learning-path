const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  return options[Math.floor(Math.random() * 3)];
}

//console.log(getRandomComputerResult(options));

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  /*   if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    return true;
  } else return false; */

  /*   return (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
    ? true
    : false; */
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  }
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");

const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");

const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");

const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.innerText = `Player has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = `Computer has won the game!`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "flex";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorsBtn.addEventListener("click", () => showResults("Scissors"));
