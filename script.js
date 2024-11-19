function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
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
