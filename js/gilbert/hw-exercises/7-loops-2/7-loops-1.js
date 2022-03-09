/* 1. Create an array of 6 grades, ranging between 0 to 100, but make sure that one of the grades is below 65.
2. Console log "Print of Passing Grades".
3. Create a loop (whatever loop you prefer) to iterate through all the grades, printing all of them out, but if the grade is below 65, then skip it (don't print it).*/
let finalGrades = [63, 75, 85, 95, 97, 98];

console.log('Print of Passing Grades');

for (let fgIdx = 0; fgIdx < finalGrades.length; fgIdx++) {
    // the == and === are the same except that the
    // === also compares the data type
    if (finalGrades[fgIdx] < 65) continue;

    // otherwise (if above if statement isn't true)
    console.log("You have passed the class:", finalGrades[fgIdx]);
}