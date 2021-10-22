let condition1 = true;
let condition2 = false;

/*
IF STATEMENT STRUCTURE
    The if statement checks whether the condition it has been provided
    (between the parentheses) is true or false. If true, the code
    between the curly brackets will execute; if false, the code
    between the curly brackets will NOT execute.
*/
if(condition1){
    console.log('condition1 is true');
}

if(condition2){
    // this will not execute since condition2 is false
    console.log('condition2 is true');
}

/*
The above examples are silly because their conditions don't
evaluate anything since they're hard-coded booleans
    We've effectively just written if(true){...}, and if(false){...}

Here's a more practical example. The console.log below will only execute if
the value of myAge variable is GREATER than 17. Notice that we're not just
passing in the value of a variable as we did with the previous examples;
we're comparing the value of a variable to a number with the greater than
sign (>). The end result of that statement will either be true or false, since
a number can only be:
    1. Greater than another number (TRUE), or
    2. NOT greater than another number (FALSE)
        So, either less than, or equal to
*/

let myAge = 18;
if(myAge > 17){
    console.log('I can vote');
}

/*
To check for equality we use the DOUBLE EQUALS (==), since the singular
equals (=) is used for assignment.
*/
let myGrade = 100;
if(myGrade == 100){
    console.log('I have a perfect score!');
}

/*
Besides greater-than and less-than, we also have
greater-than-or-equal-to, and less-than-or-equal-to. Knowing this,
we can now formulate the age example more neatly
*/
let friendsAge = 18;
if(friendsAge >= 18){
    // will only print if friendsAge is greater than or equal to
    console.log('My friend can vote');
}


/*
Whatever is put between the parentheses must be formulated
in such a way that it can be evaluated to a boolean value
(true or false). This is a simple procedure when we're working
with mathematical comparisons (>, <, ==), but sometimes a condition
can't be DIRECTLY translated into true or false. In those cases, JS
will try to arrive at a boolean result by approximating values that
seem "truthy" with true, and values that seem "falsy" with false.
*/

/*
The rules for what JS will consider truthy or falsy can be a little strange, but
here's a few examples:
*/

if('hello'){
    // Non-empty strings are truthy, so any code we put here will run
}
if(''){
    // Empty strings are falsy, so any code we put here will NOT run
}
if(5){
    // Any non-zero number (including negative) is truthy
}
if(-5){
    // Any non-zero number (including negative) is truthy
}
if(0){
    // 0 will always be falsy
}

/*
Our use of if statements will never be practical if we hard-code
the values that we use as conditions. Things are much more interesting
when the values of our conditions are actually variable (as in, dependant
on something). So, let's ask the user for input. The value of this input
will then steer where the program goes.

We'll also append an else statement to our if, in order to control what happens
when the if statement check fails on false
*/

let userAge = prompt('What is your age?');

// keep in mind that userAge is of string data type
console.log(typeof userAge);

if(userAge >= 18){ // type coercion on userAge from num to str
    // this will only execute if above condition is true
    alert('You\'re old enough to vote!');
}else {
    // this will only execute if above condition is false
    alert('You\'re too young to vote!');
}



let userShift = prompt('What shift do you work?');
/*
trim() exists on every string automatically, and
removes spaces from beginning and end of a string

re-asign userShift to be equal to userShift but trimmed
*/
userShift = userShift.trim();

/*
NOTE:
    'morning' != (not equal to) 'Morning'
    '     morning' != 'morning' b/c spaces are characters too
*/


/*
LOGICAL OPERATORS
    We can provide multiple clauses in our if statements in order
    to check several conditions, or a combination of conditions at the same time

    AND: && (statement is true only if BOTH parts are true)
    OR: || (whole statement is true if AT LEAST ONE part is true)
        Fun fact: if the first clause of an OR operator is true, the second clause won't even be checked!
    NOT: !
        NOT EQUAL: !=
*/

if(userShift == 'morning' || userShift == 'Morning'){
    console.log('Good morning!');
}else if(userShift == 'evening' || userShift == 'Evening'){
    console.log('Good evening!');
}else {
    console.log('That\'s not a valid shift!');
}


/*
There's a shorthand if statement we can use to set values of variables conditionally.
Below, varSetByCondition will be true if someCondition is true, and false when someCondition
is false.
*/
// let varSetByCondition = (someCondition) ? true : false;
