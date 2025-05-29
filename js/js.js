//Rock paper scissors
//
//Pseudocode for computer's choice function
//
//GET computer's choice
//	GET random integer between 1 and 3	
//	IF random integer is 1 return rock
//	IF random integer is 2 return paper
//	IF random integer is 3 return scissor
//END

function getComputerChoice() {
    const randomInt = Math.floor((Math.random() * 3) + 1);
    return randomInt === 1 ? "rock"
    : randomInt === 2 ? "paper"
    : "scissors";
}

//Human choice
//
//GET human choice
//	GET choice with prompt and normalize it to lower case
//	IF choice is valid
//		RETURN prompt input
//	ELSE inform user of invalid choice
//END

function getHumanChoice() {
    const choice = prompt("Rock, paper or scissors. What is your choice?").toLowerCase();
    if (choice === "rock" ||
	choice === "paper" ||
	choice === "scissors") {
    return choice;
    }
    return console.log("Invalid choice. Try again with rock, paper or scissors");
}
