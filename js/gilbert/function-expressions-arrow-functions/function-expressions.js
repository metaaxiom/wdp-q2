/*
This syntax is called a "function definition / declaration"
*/
function myFunc(){
    // some code
}

/*
There's an alternative syntax for functions, called
"function expression":
*/
let myFuncExp = function(){
    // some code
};

/*
Hoisting refers to JavaScript's ability to grab all the
function declarations at runtime and pulling them up (hoisting) to the very top of the program, so that, they're always accessible, even if they're called before they're
declared in the code.

An example of hoisting:
*/
printHello(); // calling a function "before" it's declared
function printHello(){
    console.log('Hello');
}

/*
JS does NOT perform hoisting with function expressions:
*/
// printGoodbye();
// let printGoodbye = function(){
//     console.log('Goodbye');
// };

/*
Function expressions differ from function declaration also
in terms of how they implement scope.

In terms of accessing local variables within function declarations and expressions, they are the same.
*/
function scopedDeclaration(){
    var x = 1;
    console.log('scopedDeclaration: ', x);
}
scopedDeclaration();
// console.log(x); // throws error

let scopedExpression = function(){
    var y = 2;
    console.log('scopedExpression: ', y);
}
scopedExpression();
// console.log(y); // throws error

/*
For a full explanation of the differences between function expressions and function declarations, visit javascript.info:
https://javascript.info/function-expressions
*/

/*
ARROW FUNCTIONS:


We can make comparisons like this:

<= Less than or equal to
>= Greater than or equal to

=> This has nothing to do with comparison; it's part of the syntax for an arrow function:

Sum is the name of the arrow function.
(a, b) are the parameters.
What come after the arrow is the function body.
*/
let sum = (a, b) => a + b;
// you can call arrow functions like any functions
console.log( 'Arrow function sum:', sum(2, 2) );

/*
Full syntax for above arrow function:
    Shorthand allows us to skip curly brackets when
    we're working with just one operation. Also, if
    we're returning the result of just one operation,
    we can skip the return statement too (it will be
    implicit).
*/
let sumFull = (a, b) => { return a + b;};

/* printSup will console log what's up */
let printSup = () => console.log('What\'s Up?');

/*
repeat10Times will call whatever function
10 times (in JS, an arrow function can be passed
as an argument to another function).
*/
function repeat10Times(repeatingFunc){
    for(let rp = 0; rp < 10; rp++){
        repeatingFunc();
    }
}

/*
call repeat10Times passing in the printSup()
function expression as an argument. Notice that
we left off the parentheses for printSup when
passing it in as an argument.
*/ 
repeat10Times(printSup);