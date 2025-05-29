//Rock paper scrissors
//
//Pseudocode for computer's choice function
//
//GET computer's choice
//	GET random integer between 1 and 3	
//	IF random integer is 1 return rock
//	IF random integer is 2 return paper
//	IF random integer is 3 return scrissor
//END

function getComputerChoice() {
    const randomInt = Math.floor((Math.random() * 3) + 1);
    return randomInt === 1 ? "rock"
    : randomInt === 2 ? "paper"
    : "scissors";
}
