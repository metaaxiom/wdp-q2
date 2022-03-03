/*
Suppose we have 10 students in our class, and that
we have gathered all the students' final grades

Each primitive data type variable can only store ONE value (even though this singular value can be of whatever length)

If we want to store multiple related values in a group,
we can use an array
*/

// let studentOneGrade = 88;
// let studentTwoGrade = 76;
// let studentThreeGrade = 92;
// let studentFourGrade = 93;
// let studentFiveGrade = 65;
// let studentSixGrade = 95;
// let studentSevenGrade = 87;
// let studentEightGrade = 77;
// let studentNineGrade = 96;
// let studentTenGrade = 99;

// console.log(studentOneGrade, studentTwoGrade, studentThreeGrade, studentFourGrade);

let studentsGradesArr = [88, 76, 92, 93, 65, 95, 87, 77, 96, 99];
console.log(studentsGradesArr);
console.log(studentsGradesArr[5]); // 95
console.log(studentsGradesArr[0]); // 88

// Arrays can store any primitive data types
// let studentsNames = ['Adam', 'John', 'Adrien'];
// console.log(studentsNames);
// console.log(studentsNames[1]);

// You can store various data types in an array
// let mixedArr = [10, 'Ball', 11, 'Hello'];
// console.log(mixedArr);

// 0: 88
// 1: 76
// 2: 92
// 3: 93
// 4: 65
// 5: 95
// 6: 87
// 7: 77
// 8: 96
// 9: 99

// Loops
// Three main loops: while, for, do-while

// infinite loop
// while(true){
//     // action you want to repeat goes here
//     console.log('hello');
// }

let whileIdx = 0;
while(whileIdx < 10){
    console.log('hello');
    whileIdx++;
}

let whileIdx2 = 1;
while(whileIdx2 <= 100){
    console.log(whileIdx2);
    whileIdx2++;
}

/*
Two things continually happen when a while loop is running:
    1. The conditional is checked before each new iteration
    2. If the conditional succeeds (is true), then the loop body executes, and by the end, increments the increment variable
*/



console.log('Begin Array Loop');

let sgaIdx = 0;
while(sgaIdx < studentsGradesArr.length){
    console.log(studentsGradesArr[sgaIdx]);
    sgaIdx++;
}