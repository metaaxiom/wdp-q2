/*
Although strings and arrays are different data types, they do
share an important commonality: we can retrieve characters
from a string by index, just like we can retrieve elements
from an array by index.

Furthermore, both arrays and strings have the length property.
*/

let someArr = ['apple', 'orange', 'banana'];
console.log(someArr[1]); // orange

let someStr = 'Peach';
console.log(someStr[2]); // a

/*
Javascript Strings are immutable, which means once a String
literal is assigned to String reference (variable) the string
value cannot be changed. However, we can still assign a new
string to a String reference (variable).

Other data types in JS do not have the immutability 
property; it's just Strings
*/

let myName = "adam";

// We can can make the whole string uppercase
// but how do we make just the first letter uppercase?
console.log(myName.toUpperCase());

// fails to modify the string (b/c of string immutability)
myName[0] = myName[0].toUpperCase();
console.log(myName); // adam

/*
We need a way to circumvent the immutability problem. To do
this, instead of trying to change the value of the string
literal, we need to completely redefine (re-assign) the 
string variable.

We will redefine the string variable in such a way that
the first character ('a') will be turned uppercase,
but all the other characters will be left the same.

We can use concatination for it, like so:
myName = myName[0].toUpperCase() + myName[1 - the rest]

The above is not valid code, but illustrates the logic. After
capitalizing 'a', we want to append a RANGE of the remaining
characters (from index 1 to end of string).

So, let's try to find a String method that will help us
select a range of characters from a string.

Can the split() method help us out here?
*/
let str = 'The quick brown fox jumps over the lazy dog.';
// space acting as delimeter will divide sentence into an
// array of individual words
let wordsArr = str.split(' ');
console.log(wordsArr);
// retrieve each word individually by index
console.log(wordsArr[3]); // fox
/*
The answer is "no"; the split() method is used for
something else. So, we need to find a different method.

Let's try the substring() method, since its description
on MDN Web Docs matches what we're looking for:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

Here, we redefine / reassign the value of myName to a new
string, composed by concatenating the uppercase 'A' with
the original characters of the string ranging from index
1 to the end.
*/
myName = myName[0].toUpperCase() + myName.substring(1);
console.log(myName); // Adam