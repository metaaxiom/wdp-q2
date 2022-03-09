/*
Objects are collections just like arrays, in the sense that they both
can store multiple pieces of information.

But, there's a crucial difference:

Arrays are known as index-value pairs because each value they store is mapped to an index 
(numerical).

Objects, however, are known as key-value pairs, because each value they store is mapped to
a key.

So, what's a "key" in objects?
A key, like an index, is an identifer within the collection, but it's non-numerical. A key is
effectively a string.
*/

let carMake = 'Subaru';
let carModel = 'Forester';
let carYear = 2011;
let carMPG = 24;
let carMileage = 140000;
let carOwnerName = 'Adam Smith';
let carHasBeenInAccident = false;
let wheelDiameter = 17;

/*
There are problems with the above solution:

1. All the information relates to one concept, a car, but it's all scattered between seperate variables.
2. Because of #1, it's impossible to loop through this information.
3. There's nothing keeping programmers to account to be consistent with the naming convention (prefixing the variables with "car").

There may be other downsides to this solution too.

A better approach would be to store all this information within an object, which will unify the concept (of the car), in one collection.

Because an object is a key-value pair, and its values are not
mapped to a numerical series (like arrays), objects are not ORDERED like arrays are. Rule of thumb:
    When order matters: Array
    When order doesn't matter: Object

An object is defined pretty much like any other variable.
*/

let car = {
    make: 'Subaru',
    model: 'Forester',
    year: 2011,
    mpg: 24,
    mileage: 140000,
    ownerName: 'Adam Smith',
    hasBeenInAccident: false,
    wheelDiameter: 17
};

// print the whole object
console.log(car);

/*
There are two notations for retrieving specific fields
from an object

1. Bracket notation:
*/
console.log(car['make']); // Subaru

/*
2. Dot notation, WHICH IS USUALLY THE PREFERRED WAY
    (because it tends to be shorter)
*/
console.log(car.model); // Forester

// we can verify the data type of the car object that we created
console.log(typeof car); // object

// there are many built-in objects that we haven't written ourselves but which we constantly use
console.log(typeof console); // object

/*
Although we think of objects and arrays are seperate, in JavaScript (as opposed to other programming languages), both
objects and arrays are TECHNICALLY both of data type object.

This does not mean that an array can be used an a non-array object (so it does not mean that you can use keys with an array). It's just a strange quirk of the JS language.

We should continue to think of arrays and objects as different
data types (because in practice, they are). The difference
gets muddied only when we look under the hood of the language.
An array is a very specialized type of object that is
different from most other objects.
*/
let someArr = ['basketball', 'baseball', 'football'];
console.log(typeof someArr); // object