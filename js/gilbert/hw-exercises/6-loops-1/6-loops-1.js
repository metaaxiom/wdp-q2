// 1. Create an array that stores 5 first names.
let firstNames = ["charlotte", "curly", "carl", "cali", "charles"];
console.log(firstNames);

// 2. Create an array that stores 5 last names.
let lastNames = ["johnson", "watley", "lewis", "thomason", "barkley"];
console.log(lastNames);

/*
3. Create a loop (it can be either a while or a for loop), 
to iterate through the first names array.
4. At each iteration of the loop, append a last name to the first name, and console log the result (example: "John Smith"). Make sure that each person has a unique last name.

The reason why we can use the same iteration variable for
both arrays is because they have the same number of elements
*/
for(let namesIdx = 0; namesIdx < firstNames.length; namesIdx++) {
    console.log(firstNames[namesIdx] + ' ' + lastNames[namesIdx]);
}