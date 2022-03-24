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


// forEach is just like a for loop
// it iterates through every element in an array
choiceBtnsArr.forEach(choiceBtn => {
  // apply event listener for every choiceBtn
  choiceBtn.addEventListener('click', (e) => {

    // create empty li
    let newScoreboardLi = document.createElement('li');
    // set the new li's text
    newScoreboardLi.innerText = choiceBtn.value;
    // add the new li element to the scoreboard's ul
    scoreboardUl.appendChild(newScoreboardLi);

    // old, less ideal way
    //scoreboardUl.innerHTML = scoreboardUl.innerHTML + '<li>' + choiceBtn.value + '</li>';
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