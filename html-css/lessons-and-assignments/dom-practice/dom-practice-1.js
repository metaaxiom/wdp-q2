/*
Goal: Average all numbers submitted through the textbox

1. Select the two relevant elements: input, and submit button
2. Add an onclick event to the button
3. Upon clicking the button, grab the input from the textbox
4. Run an operation to go through all the nums in the textbox
    * each num seperated by a comma and a space
    5. Sum them
    6. Divide sum by amount of numbers
*/

// select the two relevant elements
let avgNumInput = document.getElementById('avg-num-input');
let avgNumBtn = document.getElementById('avg-num-btn');

// create an event on the button
avgNumBtn.onclick = function(){
    // avgNumInput.value retrieves content of textbox
    let numArrToAvg = avgNumInput.value.split(', ');

    let numArrSum = 0;
    for(let nataIdx = 0; nataIdx < numArrToAvg.length; nataIdx++){
        // execute for every single element in the arr
        numArrSum += Number(numArrToAvg[nataIdx]);
    }

    let totalAvg = numArrSum / numArrToAvg.length;
    console.log('The average is:', totalAvg);
};















// example of a long method chain
// avgNumInput.value.split(', ').length.toString();