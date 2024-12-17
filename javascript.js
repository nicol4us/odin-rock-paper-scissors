// Global Variable Declarations
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let humanScore    = 0;
let computerScore = 0;


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



// () -> ()
// To run playAround function for 5 times and declare the winner between human and computer
function playGame() {
    let humanScore      = 0;
    let computerScore   = 0;
    let initialPlay     = 1;
    let drawScore       = 0;
    const maxPlay       = 5;

    // (String, String) -> ()
    // To adjust computerScore and humanScore variable and print message of the winnger
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
            case humanChoice === null:
                console.log("You loose, you type wrong option");
                computerScore =  computerScore + 1;
                break;
    }
    }

    for (initialPlay; initialPlay <= maxPlay; initialPlay++) {
        playRound(getHumanChoice(), getComputerChoice());   
        
        console.log(`You have played ${initialPlay} of ${maxPlay}`);
    }

    if(humanScore > computerScore) {
        console.log("Congratulations you win the game!!!!");
    }
    else if (humanScore < computerScore) {
        console.log("Unfortunately you are loose against computer");
    }
    else {
        console.log(" You are both draw");
    }
}

playGame();



