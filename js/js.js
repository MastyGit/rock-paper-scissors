const body = document.querySelector("body");
body.style.backgroundColor = "#444444";

const setupElements = document.createElement("div");

const setScoreLimit = document.createElement("input");
setScoreLimit.addEventListener("keypress", event => {
    if (event.key === "Enter") startGameEvent();
});

const startGame = document.createElement("button");
startGame.textContent = "Start game";
startGame.addEventListener("click", () => {
    startGameEvent();
});

const instructions = document.createElement("div");
instructions.style.color = "white";
instructions.textContent = "Choose score limit from 1 to 10";

const gameElements = document.createElement("div");

const choices = document.createElement("div");
choices.addEventListener("click", e => {
    const choice = e.target.id;
    playRound(choice, getComputerChoice(), scoreLimit);
});

const rock = document.createElement("button");
rock.textContent = "Choose rock";
rock.id = "rock";

const paper = document.createElement("button");
paper.textContent = "Choose paper";
paper.id = "paper";

const scissors = document.createElement("button");
scissors.textContent = "Choose scissors";
scissors.id = "scissors";

const scoreTracker = document.createElement("div");
scoreTracker.style.color = "white";

const showComputerChoice = document.createElement("div")
showComputerChoice.style.color = "white";

const roundResult = document.createElement("div")
roundResult.style.color = "white";

const resetGame = document.createElement("button");
resetGame.textContent = "Play again";
resetGame.addEventListener("click", () => {
    resetGame.remove();
    scoreTracker.textContent = "";
    showComputerChoice.textContent = "";
    roundResult.textContent = "";
    humanScore = 0;
    computerScore = 0;
    displaySetupElements();
});

displaySetupElements()

let scoreLimit;
let humanScore = 0;
let computerScore = 0;

function displaySetupElements() {
    if (gameElements) gameElements.remove();

    body.appendChild(setupElements);
    setupElements.appendChild(setScoreLimit);
    setupElements.appendChild(startGame);
    setupElements.appendChild(instructions);
}

function displayGameElements() {
    setupElements.remove();

    body.appendChild(gameElements);
    gameElements.appendChild(choices);
    gameElements.appendChild(scoreTracker);
    gameElements.appendChild(showComputerChoice);
    gameElements.appendChild(roundResult);
    choices.appendChild(rock);
    choices.appendChild(paper);
    choices.appendChild(scissors);
}


function startGameEvent() {
    scoreLimit = parseInt(setScoreLimit.value);

    if (scoreLimit < 1 ||
	scoreLimit > 10 ||
    isNaN(scoreLimit) === true
    ) {
	return;
    }
    displayGameElements();
}

function getComputerChoice() {
    const randomInt = Math.floor((Math.random() * 3) + 1);
    return randomInt === 1 ? "rock"
	: randomInt === 2 ? "paper"
	: "scissors";
}

function playRound(humanChoice, computerChoice, scoreLimit) {
    const winner = getRoundWinner(humanChoice, computerChoice);
    let message;
    if (winner === "human") {
	humanScore++;
	message = "You win the round";
    } else if (winner === "computer") {
	computerScore++;
	message = "Computer wins the round";
    } else {
	message = "Tie!";
    }
    scoreTracker.textContent = `You ${humanScore} - ${computerScore} Computer`;
    showComputerChoice.textContent = `Computer chose ${computerChoice}`
    roundResult.textContent = message;
    if (humanScore == scoreLimit ||
	computerScore == scoreLimit) {
	humanScore > computerScore
	    ? roundResult.textContent = "You won the game!"
	    : roundResult.textContent = "Computer won the game!";
	choices.remove();
	body.appendChild(resetGame);
    }
}

function getRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "tie";
    switch (humanChoice) {
	case "rock":
	    if (computerChoice !== "paper") return "human";
	    break;
	case "paper":
	    if (computerChoice !== "scissors") return "human";
	    break;
	case "scissors":
	    if (computerChoice !== "rock") return "human";
	    break;
    } 
    return "computer";
}
