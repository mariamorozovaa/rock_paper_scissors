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
            // computerScore += 1;
            // humanScore += 1;
            textOfResults.textContent = `It\'s a draw. Computer also choose ${computerChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            computerScore += 1;
            textOfResults.textContent = `You lose. ${computerChoice} beats ${humanChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            humanScore += 1;
            textOfResults.textContent = `You won. ${humanChoice} beats ${computerChoice}\nYour score: ${humanScore}. Computer\'s score: ${computerScore}`;
        }
    }
}

const score = document.querySelector("#score");
const headScore = document.createElement("h2");
const textOfScore = document.createElement("p");
textOfScore.setAttribute("style", "font-size: 25px;");
score.appendChild(headScore);
score.appendChild(textOfScore);
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.classList.add("refresh");
restartBtn.addEventListener("click", () => {
    window.location.reload();
});

function showResults() {
    headScore.textContent = "Score of Game:";
    if (humanScore > computerScore) {
        textOfScore.textContent = `Congratulatons! You won this game!!!`;
    } else if (humanScore < computerScore) {
        textOfScore.textContent = `Oh no! You lose this game :(`;
    } else {
        textOfScore.textContent = `It\'s a draw in this game. How is it possible?`;
    }

    score.appendChild(restartBtn);
}

//сделать например камень бьет ножницы и картинками маленькими
//сократить отступы
//изменить кнопку, добавить цветов
