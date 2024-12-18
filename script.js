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
            console.log(`It\'s a draw. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
            alert(`It\'s a draw. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        }
        else if (((humanChoice === 'rock') && (computerChoice === 'paper')) || ((humanChoice === 'paper') && (computerChoice === 'scissors')) || ((humanChoice === 'scissors') && (computerChoice === 'rock'))) {
            computerScore += 1;
            console.log(`You lose. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
            alert(`You lose. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        }
        else if (((humanChoice === 'paper') && (computerChoice === 'rock')) || ((humanChoice === 'scissors') && (computerChoice === 'paper')) || ((humanChoice === 'rock') && (computerChoice === 'scissors'))) {
            humanScore += 1;
            console.log(`You win. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
            alert(`You win. The computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        }
        else {
            alert('Please chose correct word. \nChoose and write one thing: Rock or Paper or Scissors');
            console.log('Please chose correct word. \nChoose and write one thing: Rock or Paper or Scissors');
        }
        
    }

    if (humanScore > computerScore) {
        alert(`Congratulatons! You win in this game!!!\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        console.log(`Congratulatons! You win in this game!!!\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
    
    else if (humanScore < computerScore) {
        alert(`Oh no! You lose in this game :( \nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        console.log(`Oh no! You lose in this game :( \nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
    
    else {
        alert(`It\'s a draw in this game. How is it possible? \nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
        console.log(`It\'s a draw in this game. How is it possible? \nYour score: ${humanScore}. Computer\'s score: ${computerScore}`);
    }
}

playGame();