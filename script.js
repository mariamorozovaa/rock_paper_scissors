function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 100);
    let compChoice;

    if ((randomNum >= 0) && (randomNum < 33)) {
        compChoice = 'Rock';
    } 
    else if ((randomNum >= 33) && (randomNum < 66)) {
        compChoice = 'Paper';
    } 
    else {
        compChoice = 'Scissors';
    }

    return compChoice;
}
console.log('Computer\'s choice: ' + getComputerChoice());

