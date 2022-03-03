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

    (Primitive)

    1. number: stores integers or decimals
    
    2. strings: text, strings of characters
        either single quote, or double-quote
    
    3. boolean: either true or false
    
    4. undefined: when you don't assign a value to something, or JS fails to understand a particular operation
    
    5. null: means nothing, placeholder value, which you only get when you specifically assign it yourself (you won't get this value organically)

    6. NaN: short for "Not a Number"
        You get this value when you perform a math operation that doesn't make sense

    7: Infinity: can positive or negative

    (Collections)

    8. Arrays (index-value pairs, order matters)
        0 "Adam"
        1 "Adrien"
        2 "John"
        3 "Arthur"
        .
        .
        .
        n "Tom"
    
    9. Objects (key-value pairs, order doesn't matter)
        'make': 'Ford'
        'model': 'Fiesta'
        'year': '2012'


    In programming, it's crucial that variable names are DESCRIPTIVE
*/


/*
the "let" keyword tells JS that we're creating a variable

variable names should be descriptive (but also brief)
they're usually written in "camel-case" (just a convention)
    first letter of first word is lower-case, 
    but first letters of all succeeding words are uppercase

variable names is JS are CASE-SENSITIVE
    "x" is different from "X"

the single equals ("=") is called the "assignment operator" b/c it
assigns a value to a variable

There are statement and there are blocks of code:
    Statement: single operation, usually single line
        Typically need a semi-colon at the end
    
    Block: set of operations, usually multi-line
        Typically do not need a semi-colon at the end
*/

// declaring: specifying that some variable exists, without giving it a value
let myVar;
console.log(myVar); // value: undefined

// defining: setting a value to a variable
myVar = 10;
console.log(myVar);

// initialization: declaring and defining a variable at the same time
let numOfApples = 8;
let priceOfSingleApple = 0.49;
let theTotalCostOfClothesThatIBoughtLastThursday = 29.99;

console.log('The total of', numOfApples, 'apples is: $', priceOfSingleApple * numOfApples);

let myName = 'Julian';
let myName2 = "Julian";

let someText = 'skdghgsh JGFHG 65756....,,,@^%$#&%^$*&(   ';
let someText2 = '  ';

// escape quotes using forward-slash
// (when using the same type of quotes)
let textWithQuote = 'She said, \'Run Forrest, Run!\'';
// mix quotes 
// (single on the outside, double on the inside)
// (double on the outside, single on the inside)
let textWithQuote2 = 'She said, "Run Forrest, Run!"';
let textWithQuote3 = "She said, 'Run Forrest, Run!'";

console.log(textWithQuote);
console.log(textWithQuote2);
console.log(textWithQuote3);

// the number 5, as a number
let numAsNum = 5;
// the number 5, as a string
let numAsStr = '5';

console.log('Number Type:', numAsNum);
console.log('String Type:', numAsStr);

let ofVotingAge = true;
let ofVotingAge2 = false;
console.log('Is Sam of voting age?', ofVotingAge);
console.log('Is Adam of voting age?', ofVotingAge2);

let placeholderVal = null;
console.log(placeholderVal);

console.log(100 / 0); // Infinity
console.log(0 / 0); // NaN


/*
Skim 1.1 - 1.4
Read 2.1, 2.2, 2.3, 2.5
*/

console.log('Infinity divided by Infinity', Infinity / Infinity);

let willChangeValue = 1;
console.log('original willChangeValue:', willChangeValue);
// no need to use let keyword when using variable that has already been declared
willChangeValue = 2;
console.log('final willChangeValue:', willChangeValue);

const wontChange = 3;
console.log('wontChange:', wontChange);
// can't change the value of a constant
// wontChange = 4;

// JS stores common mathematical values, constants, functions, etc. in the Math object
console.log(Math.PI);

// whatever value the user writes will be stored in answer variable
let answer = prompt('What is your name?');
alert('The name of the user is ' + answer);

/*
Constants declared using "const" as opposed to "let"
cannot be changed, as normal variables can.

Constant are often used to store mathematical constant (such as PI), but
they're useful for any values which will not change through the duration
of the program

Constant are often written with all uppercase letters
to differentiate them from normal variables
*/
const SPEED_OF_LIGHT = 299792458;
// the below line will throw an error, since you can't change the value of a constant
// speedOfLight = 100000;
console.log(SPEED_OF_LIGHT);