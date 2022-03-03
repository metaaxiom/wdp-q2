/* ARRAY REVIEW */

// it's sometimes helpful to suffix an array variable with "arr"
// to make it clear that it's an array
let fruitsArr = ['apple', 'orange', 'banana'];
// display full array
console.log(fruitsArr);

// display array's length, or the number of elements that an array has
console.log('fruitsArr length:', fruitsArr.length);

// retrieve specific element
console.log('specific element:', fruitsArr[1]);

// the last index will always be 1 less than the array's length
console.log('last index:', fruitsArr.length-1);
console.log('display last element:', fruitsArr[fruitsArr.length-1]);

// change a value in an array
fruitsArr[1] = 'blueberries';
console.log('change orange to blueberries:', fruitsArr);

// sparse arrays have gaps (you should avoid creating sparse arrays when possible)
fruitsArr[6] = 'watermellon';
console.log('add watermellon with gaps:', fruitsArr);

// this index is empty
console.log('empty index in sparse array:', fruitsArr[4]); // undefined

// this is not a good way to add an element to the end of an array
fruitsArr[fruitsArr.length] = 'dragonfruit';
console.log('add dragonfruit to the end:', fruitsArr);

// using the push method / function we can append an element to an array
// it will always be added at the end with push()
fruitsArr.push('strawberries');
console.log('push strawberries to the end:', fruitsArr);

// unshift() is a similar method to push(), which instead adds to the front

// remove last element from an array
let removedFruit = fruitsArr.pop();
console.log('fruit that was popped off the array:', removedFruit);
console.log('array after popping one element off the end:', fruitsArr);

// to remove the first element from an array, you can use shift()


/* LOOPING THROUGH ARRAYS */

let studentsGradesArr = [
    85,
    99,
    100,
    67,
    77,
    88,
    91
];

console.log(studentsGradesArr);

// increase all the grades by 5 points, without incrementing any past 100

/*
let sgaIdx = 0;
while(sgaIdx < studentsGradesArr.length){
    ...
    sgaIdx++; // this will increment by one every turn of the loop
}
*/

for(let sgaIdx = 0; sgaIdx < studentsGradesArr.length; sgaIdx++){

    let incrementBy5 = studentsGradesArr[sgaIdx] + 5;
    if(100 - incrementBy5 < 0){
        // incremented past 100, so cap it off
        studentsGradesArr[sgaIdx] = 100;
        continue; // only works within loops, and skips to next iteration
    }
    // at 100 or below, so accept increment
    studentsGradesArr[sgaIdx] = incrementBy5;

    // // studentsGradesArr[sgaIdx] = studentsGradesArr[sgaIdx] + 5;
    // studentsGradesArr[sgaIdx] += 5; // shorthand increment by 5
    // if(studentsGradesArr[sgaIdx] > 100){
    //     studentsGradesArr[sgaIdx] = 100;
    // }
}
console.log('studentsGradesArr after the loop:', studentsGradesArr);