function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);
    let compChoice;

    if (randomNum >= 0 && randomNum < 33) {
        compChoice = "rock";
    } else if (randomNum >= 33 && randomNum < 66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    return compChoice;
}

const buttons = document.querySelectorAll("button");
let choiceOfHuman;
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        choiceOfHuman = button.id;
        playRound(choiceOfHuman, getComputerChoice());
        if (humanScore === 5 || computerScore === 5) {
            showResults();
        }
    });
});

const result = document.querySelector("#result");
const textOfResults = document.createElement("p");
textOfResults.setAttribute("style", "font-size: 25px;");
result.appendChild(textOfResults);

function playRound(humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            computerScore += 1;
            humanScore += 1;
            textOfResults.textContent = `It\'s a draw. \nThe computer chose: ${computerChoice}. You chose: ${humanChoice}.\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            computerScore += 1;
            textOfResults.textContent = `You lose. \nThe computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            humanScore += 1;
            textOfResults.textContent = `You win. \nThe computer chose: ${computerChoice}. You chose: ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        }
    }
}

const score = document.querySelector("#score");
const textOfScore = document.createElement("p");
textOfScore.setAttribute("style", "font-size: 25px;");
score.appendChild(textOfScore);

function showResults() {
    if (humanScore > computerScore) {
        textOfScore.textContent = `Congratulatons! You win in this game!!!`;
    } else if (humanScore < computerScore) {
        textOfScore.textContent = `Oh no! You lose in this game :(`;
    } else {
        textOfScore.textContent = `It\'s a draw in this game. How is it possible?`;
    }
}

// const restart = document.createElement("button");
// restart.textContent("Restart");

// после нажатия кнопки рестарт сбросить счет и результат и сделать кнопки активными
// сделать в случае ничьи +0 +0
// переработать интерфейс
