// Constant Declaration
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startButton = document.querySelector("#start")
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors")
const humanScoreLink = document.querySelector("#humanScore");
const computerScoreLink = document.querySelector("#computerScore");
const messageLink = document.querySelector("#message");
const maxPlay = 5;


// Global Variable Declarations
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



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

function playRound(humanChoice, computerChoice) {
    switch(true) {
        case humanChoice === "rock" && computerChoice === "rock": 
            console.log("You are draw against computer");
            drawScore = drawScore +1;
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            console.log("You loose, paper win again rock");
            computerScore = computerScore + 1;
            break;
        case humanChoice === "rock" && computerChoice === "scissors":
            console.log("Congratulations, rock wins agains scissors");
            humanScore = humanScore + 1 ;
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            console.log("Congratulations, paper wins agains rock");
            humanScore = humanScore + 1;
            break;
        case humanChoice === "paper" && computerChoice === "paper":
            console.log("You are draw against computer");
            drawScore = drawScore + 1;            
            break;
        case humanChoice === "paper" && computerChoice === "scissor":
            console.log("You loose, scissor wins against paper");
            computerScore = computerScore +1;
            break;
        case humanChoice === "scissors" && computerChoice === "rock":
            console.log("You loose, rock wins agains scissors");
            computerScore = computerScore + 1;
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            console.log("Congratulations, scissors wins agains paper");
            humanScore = humanScore + 1;
            break;
        case humanChoice === "scissors" && computerChoice === "scissors":
            console.log("You are draw against computer");
            drawScore = drawScore + 1;
            break;   
    }        
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    while(humanScore < maxPlay && computerScore < maxPlay ) {
        rockButton.addEventListener("click", function (e) {
            playRound("rock", getComputerChoice());
            humanScoreLink.textContent = humanScore;
            computerScoreLink.textContent = computerScore;
        
        })
        paperButton.addEventListener("click", function (e) {
            playRound("paper", getComputerChoice());
            humanScoreLink.textContent = humanScore;
            computerScoreLink.textContent = computerScore;
        
        })
        scissorsButton.addEventListener("click", function (e) {
            playRound("scissors", getComputerChoice());
            humanScoreLink.textContent = humanScore;
            computerScoreLink.textContent = computerScore;
        
        })
    }
    if (humanScore === maxPlay) {
        console.log("You are the winner")
    }
    else if (computerScore === maxPlay) {
        console.log("You are loose")
    }
    else {
        console.log("No winner")
    }
}

startButton.addEventListener("click", playGame);








