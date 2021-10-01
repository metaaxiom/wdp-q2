/*
This is a
multi-line comment
*/

// this is a single-line comment

// display text to user as a popup
// alert('Hello World!');


// prints text in the console (DevTools -> Console tab)
//console.log('Hello World!');

/* 
VARIABLES
    "Storage units"

    Variables can store not just numbers, but all kinds of "data types":

    1. number: stores integers or decimals

    In programming, it's crucial that variable names are DESCRIPTIVE
*/


/*
the "let" keyword tells JS that we're creating a variable

variable name is descriptive and written in "camel-case" (just a convention)
    first letter of first word is lower-case, 
    but first letters of all succeeding words are uppercase

variable names is JS are CASE-SENSITIVE
    "x" is different from "X"

the single equals ("=") is called the "assignment operator" b/c it
assigns a value to a variable
*/
let numOfApples = 8;
let priceOfSingleApple = 0.49;

console.log('The total of', numOfApples, 'apples is: $', priceOfSingleApple * numOfApples);