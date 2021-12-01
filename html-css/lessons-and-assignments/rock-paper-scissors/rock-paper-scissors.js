/*
2 players: player vs computer

3 Possible Selections: rock, paper, or scissors

Combinations:
    Rock > Scissors
    Scissors < Rock

    Paper > Rock
    Rock < Paper

    Scissors > Paper
    Paper < Scissors

    TIE:
    Rock == Rock
    Paper == Paper
    Scissors == Scissors

3 Results:
    WIN for the player
    LOSS for the player
    TIE for the player
*/

let choices = [
    'rock',
    'paper',
    'scissors'
];
let combinations = [
    ['rock', 'paper'],
    ['paper', 'rock'],
    ['scissors', 'paper']
];

let playerChoice;
let compChoice;

window.onload = function(){
    /*
    this will only execute once the whole page loads
        which help us avoid an issue where the JS code runs
        before the DOM is contructed
    */

    // select all 3 buttons together
    let choiceBtns = document.getElementsByClassName('choice-btns');
    // loop through all 3 buttons
    for(let cbIdx = 0; cbIdx < choiceBtns.length; cbIdx++){
        // assign an EVENT to each button INDIVIDUALLY
        choiceBtns[cbIdx].onclick = function(){
            let gameOutcome = '';
            /*
            In here, the "this" keyword refers to an
            individual btn (which one? it depends on which
            one was clicked - which one the event ran on)
            */
            playerChoice = this.value;
            compChoice = choices[Math.floor( Math.random() * 3)];

            // CHOICES
            displayResult(`Player Choice: ${playerChoice}`);
            displayResult(`Computer Choice: ${compChoice}`);

            // COMPARISON
            if(playerChoice == compChoice){
                gameOutcome = 'TIE!';
                displayResult(gameOutcome, true);
                return;
            }

            let resultArr = [playerChoice, compChoice];
            combinations.forEach(winComb => {
                if(resultArr[0] == winComb[0] && resultArr[1] == winComb[1]){
                    gameOutcome = 'PLAYER WINS!'
                    return;
                }
            });

            if(gameOutcome == ''){
                gameOutcome = 'PLAYER LOSES!'
            }
            displayResult(gameOutcome, true);
        };
    }
};

function displayResult(message, highlight){
    let resultsBoard = document.getElementById('results-board');

    if(highlight){
        message = `<span class="result-highlight">${message}</span>`;
    }
    message += '<br>';

    resultsBoard.innerHTML += message;
}