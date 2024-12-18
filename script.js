function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 100);
    let compChoice;

    if ((randomNum >= 0) && (randomNum < 33)) {
        compChoice = 'rock';
    }
    else if ((randomNum >= 33) && (randomNum < 66)) {
        compChoice = 'paper';
    }
    else {
        compChoice = 'scissors';
    }

    return compChoice;
}

function getHumanChoice () {
    let sign = prompt("Choose and write one thing: Rock or Paper or Scissors");

    return sign;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    let countOfRounds = 0;

    while (countOfRounds < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        countOfRounds += 1;
        console.log(`${countOfRounds} round behind`);
    }

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log(`It\'s a draw. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
        }
        else if ((humanChoice === 'rock') && (computerChoice === 'paper')) {
            console.log(`You lose. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            computerScore += 1;
        }
        else if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
            console.log(`You win. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            humanScore += 1;
        }
        else if ((humanChoice === 'paper') && (computerChoice === 'scissors')) {
            console.log(`You lose. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            computerScore += 1;
        }
        else if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
            console.log(`You win. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            humanScore += 1;
        }
        else if ((humanChoice === 'scissors') && (computerChoice === 'rock')) {
            console.log(`You lose. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            computerScore += 1;
        }
        else if ((humanChoice === 'rock') && (computerChoice === 'scissors')) {
            console.log(`You win. The computer chose: ${computerChoice}. You chose: ${humanChoice}`);
            humanScore += 1;
        }
        else {
            console.log('Please chose correct word');
        }
        console.log(`Your score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log('Congratulatons! You win in this game!!!', `Your score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
    
    else if (humanScore < computerScore) {
        console.log('Oh no! You lose in this game :(', `Your score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
    
    else {
        console.log('It\'s a draw in this game. How is it possible?', `Your score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
}

playGame();