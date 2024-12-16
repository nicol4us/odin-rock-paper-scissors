
// () -> String
// Return string of "rock", "paper" and "sscissors" randomly
function getComputerChoice() {
    let getNumber = Math.random();    
    if (getNumber < 0.34) {
        return "rock";
    }
    else if (getNumber >= 0.34 && getNumber < 0.67) {
        return "paper";
    }
    else {
        return "scissors"
    }    
}

// () -> String
// Return string of "rock", "paper" and "sscissors" from input prompt
function getHumanChoice() {
    let input = prompt("Select Rock, Paper or Scissors?");
    if (input.toLowerCase()=== "rock") {
        return "rock";
    }
    else if (input.toLowerCase()=== "paper") {
        return "paper";
    }
    else if (input.toLowerCase() ==="scissors") {
        return "scissors";
    }
    else {
        return "You typed wrong selection";
    }
}

