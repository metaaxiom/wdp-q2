/*
In simple terms, scope refers to where a given variable (or key, or function) is accessible from.
*/

/*
The method drive() is SCOPED to the myCar object,
since it can only be accessed THROUGH the myCar object.
The method drive() does not exist in the GLOBAL scope (by global scope we mean outside of any block-level constructs).
*/
let myCar = {
    make: 'Subaru',
    model: 'Forester',
    year: 2011,
    drive: function(){
        console.log('Car is driving!');
    }
};
myCar.drive();

/*
Any block-level construct (object, function, loop, etc.) will create its own SCOPE.

incrNum can access startingNum because startingNum is declared in the global scope.
*/

let startingNum = 5; // variable is accessible anywhere
function incrNum(){
    startingNum++;
    console.log(startingNum);
}
incrNum();

/*
We cannot access the variable someVar outside
of the function declareSomeVar(), because the variable
has been declared within the function declareSomeVar().
In other words, someVar is SCOPED to declareSomeVar().
*/
function declareSomeVar(){
    let someVar = 'Hello';
}
declareSomeVar(); // execute / call function
//console.log( someVar ); // error

/*
JavaScript has 3 types of scope:

    Block scope (object, loop, if)
        You can use the var keyword within this type of local
        scope, if you want the variables to be accessible globally (not recommended unless there's a specific reason why you want to do this)
    Function scope (functions)
        Is always local, and doesn't care about the car keyword
    Global scope (everything accessible from here)
*/

/*
let vs var keywords:
    The let keyword creates a variables within the given scope.
    The var keyword will create a variables in the global scope, if you are working with a block scope (it will have no effect within function scope).
        Any variable that you declare inside a function, will always be local to that function, regardless of whether you use the let or var keywords.
*/

let iterationVar = 0;
while(iterationVar < 10){
    var innerVar = 10; // global variable
    iterationVar++
}
console.log(innerVar); // can access global variable

/*
It's good to think of scope in terms of parent-child relationship. Every child (local scope) will inherit access to variables from parent (global scope, or local scope that contains the child scope). But, a parent will NOT inherit from a child (a global scope will not have access to local properties).


The global scope is the parent of ALL local scopes.
*/