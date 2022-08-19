const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  const choice = choices[Math.floor(Math.random() * 2) + 1];
  return choice;
};

const playRound = (playerChoice, computerChoice) => {
  playerChoiceCaseInsensitive = playerChoice.toLowerCase();

  if (
    (computerChoice === "rock" && playerChoiceCaseInsensitive === "scissors") ||
    (computerChoice === "paper" && playerChoiceCaseInsensitive === "rock") ||
    (computerChoice === "scissors" && playerChoiceCaseInsensitive === "paper")
  ) {
    compScore += 1;
    return `You lose ${computerChoice} beats ${playerChoiceCaseInsensitive}`;
  } else if (playerChoiceCaseInsensitive === computerChoice) {
    compScore += 1;
    playerScore += 1;
    return "Tie.";
  } else if (
    (playerChoiceCaseInsensitive === "rock" && computerChoice === "scissors") ||
    (playerChoiceCaseInsensitive === "paper" && computerChoice === "rock") ||
    (playerChoiceCaseInsensitive === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 1;
    return `You win. ${playerChoiceCaseInsensitive} beats ${computerChoice}`;
  } else {
    return "enter correct shit";
  }
};

const game = () => {
  compScore = 0;
  playerScore = 0;
  let message = "";
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt();
    alert(playRound(playerChoice, getComputerChoice()));
  }
  if (compScore > playerScore) {
    message = `Computer wins ${compScore} to ${playerScore}`;
  } else if (compScore === playerScore) {
    message = `Tie ${compScore} to ${playerScore}`;
  } else if (compScore < playerScore) {
    message = `Player wins ${playerScore} to ${compScore}`;
  }
  alert(message);
};

game();
