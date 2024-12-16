
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
