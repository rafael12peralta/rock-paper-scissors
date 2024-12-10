function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    console.log("Computer choice: rock");
    return "rock";
  } else if (computerChoice === 1) {
    console.log("Computer choice: paper");
    return "paper";
  } else {
    console.log("Computer choice: scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice;

  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("Type your choice:");
  }

  return humanChoice;
}

function playGame() {
  let humanScore = 0,
    computerScore = 0,
    humanSelection,
    computerSelection;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else {
      console.log("Draw!!");
    }
  }

  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You won!!");
  } else if (humanScore < computerScore) {
    console.log("You lost!!");
  } else {
    console.log("Tie!!");
  }
}

playGame();
