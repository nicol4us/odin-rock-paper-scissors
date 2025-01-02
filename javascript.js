// Constant Declaration
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const humanScoreLink = document.querySelector("#humanScore");
const computerScoreLink = document.querySelector("#computerScore");
const messageLink = document.querySelector("#message");
const maxPlay = 5;
const initialMessage = "Select between Rock, Paper or Scissors to play the game!!";


// Global Variable Declarations
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;


// Function Declarations
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
        return null;
    }
}
// String String -> void
// To check who is the winner between human and computer and then update the score
function playRound(humanChoice, computerChoice) {
    switch(true) {
        case humanChoice === "rock" && computerChoice === "rock": 
            messageLink.textContent ="You are draw against computer";                    
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            messageLink.textContent ="You loose, paper win again rock";             
            computerScore = computerScore + 1;
            break;
        case humanChoice === "rock" && computerChoice === "scissors":
            messageLink.textContent = "Congratulations, rock wins agains scissors";            
            humanScore = humanScore + 1 ;
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            messageLink.textContent = "Congratulations, paper wins agains rock";            
            humanScore = humanScore + 1;
            break;
        case humanChoice === "paper" && computerChoice === "paper":
            messageLink.textContent ="You are draw against computer";                      
            break;
        case humanChoice === "paper" && computerChoice === "scissor":
            messageLink.textContent = "You loose, scissor wins against paper";            
            computerScore = computerScore +1;
            break;
        case humanChoice === "scissors" && computerChoice === "rock":            
            messageLink.textContent = "You loose, rock wins agains scissors";           
            computerScore = computerScore + 1;
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            messageLink.textContent = "Congratulations, scissors wins agains paper";            
            humanScore = humanScore + 1;
            break;
        case humanChoice === "scissors" && computerChoice === "scissors":
            messageLink.textContent ="You are draw against computer";             
            break;   
    }        
}

// String -> void
// To update the result of the game and display it
function playGame(humanSelection) {
    playRound(humanSelection, getComputerChoice());
    humanScoreLink.textContent = humanScore;
    computerScoreLink.textContent = computerScore;
    if(humanScore === maxPlay) {
        messageLink.textContent = "You are the winner!!";
    }
    else if (computerScore === maxPlay) {
        messageLink.textContent = "Computer is the winner!!"
    }
    }


// Setting up first display
humanScoreLink.textContent = humanScore;
computerScoreLink.textContent = computerScore;
messageLink.textContent = initialMessage;

// Setting up Event listener

rockButton.addEventListener("click", function () {
    playGame("rock");
})

paperButton.addEventListener("click", function() {
    playGame("paper");
})
scissorsButton.addEventListener("click", function() {
    playGame("scissors");
})

resetButton.addEventListener("click", function(){
    humanScore = 0;
    humanScoreLink.textContent = humanScore;
    computerScore=0;
    computerScoreLink.textContent = computerScore;
    messageLink.textContent = initialMessage;
})













