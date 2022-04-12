// alert("welcome to the rock paper scissors game");
// let userName = prompt("enter  your name to play");

// console.log(userName);

// alert("proceed");

let scoreboardUl = document.querySelector('#scoreboard ul');

let choiceBtnsArr = [
  document.getElementById('rock-choice-btn'),
  document.getElementById('paper-choice-btn'),
  document.getElementById('scissors-choice-btn')
];

let choices = ["rock", "paper", "scissors"];

// only displays comparisons in terms of the winners
// the first choice in each string is always the winner
let comparisons = [
  "rock>scissors",
  "paper>rock",
  "scissors>paper"
];

// forEach is just like a for loop
// it iterates through every element in an array
choiceBtnsArr.forEach(choiceBtn => {
  // apply event listener for every choiceBtn
  choiceBtn.addEventListener('click', (e) => {
    let userChoice = choiceBtn.value;

    // have computer randomly generate choice
    // generate a random number between 0-2
    let compChoiceIdx = Math.floor(Math.random() * 3);
    let compChoice = choices[compChoiceIdx];

    // create empty li
    let newScoreboardLi = document.createElement('li');
    // set the new li's text
    newScoreboardLi.innerText = `User chose ${userChoice}, computer chose ${compChoice}.`;

    // determine win, loss, or tie
    if(userChoice == compChoice){
      // TIE
      newScoreboardLi.innerText += " TIE!";
    }else{
      // NOT A TIE: SO EITHER USER OR COMPUTER WON
      let comparison = `${userChoice}>${compChoice}`;
      // see if the comparions array contains the comparison string
        // it may contain it (if the user won), or it may not (if the user lost)
        // if it doesn't contain it, it's going to return undefined
      let comparisonMatch = comparisons.find(c => c == comparison);
      if(comparisonMatch != undefined){
        newScoreboardLi.innerText += " USER WON!";
      }else{
        newScoreboardLi.innerText += " COMPUTER WON!";
      }
    }

    // add the new li element to the scoreboard's ul
    scoreboardUl.appendChild(newScoreboardLi);
  });
});


// the addEventListener method requires two arguments
// 1. the action type = click (there are other action types)
// 2. the actual action to perform (a function)
// e stands for event

// rockChoiceBtn.addEventListener('click', (e) => {
//   // do this whenever rockChoiceBtn is clicked
//   alert(rockChoiceBtn.value);
// });

// paperChoiceBtn.addEventListener('click', (e) => {
//   alert(paperChoiceBtn.value);
// });

// scissorsChoiceBtn.addEventListener('click', (e) => {
//   alert(scissorsChoiceBtn.value);
// });















// event path an array of html elements
// that have observed a particular event take place
// checks if the ID of an element exists in an event path
// returns true if it find it
// returns false if it doesn't
// function isOnId(pathArr, elementId){
//   return pathArr.some(element => element.id === elementId);
// }