const choices = ["rock", "paper", "scissors"];

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
    return `You lose ${computerChoice} beats ${playerChoiceCaseInsensitive}`;
  } else if (playerChoiceCaseInsensitive === computerChoice) {
    return "Tie.";
  } else if (
    (playerChoiceCaseInsensitive === "rock" && computerChoice === "scissors") ||
    (playerChoiceCaseInsensitive === "paper" && computerChoice === "rock") ||
    (playerChoiceCaseInsensitive === "scissors" && computerChoice === "paper")
  ) {
    return `You win. ${playerChoiceCaseInsensitive} beats ${computerChoice}`;
  } else {
    return "enter correct shit";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt();
    console.log(playRound(playerChoice, getComputerChoice()));
    alert(playRound(playerChoice, getComputerChoice()));
  }
};

game();
