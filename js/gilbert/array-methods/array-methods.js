/*
Arrows function are often used within array methods.
*/

let grades = [67, 66, 89, 88, 100, 99, 65, 73];
// for(let gIdx = 0; gIdx < grades.length; gIdx++){
//     console.log(grades[gIdx]);
// }

// the forEach() method expects a function as an argument
grades.forEach(grade => console.log(grade));

/*
Something like this is happening behind the scenes when you run the forEach array method. Note
that this is just pseduo code.

let gradesPrototype = {
    forEach: function(arrowFunc){
        for(let i = 0; i < grades.length; i++){
            arrowFunc(grades[i]);
        }
    }
};
*/
console.log('UPPED GRADES OUTPUT');
grades.forEach(grade => {
    let uppedGrade = grade + 5;
    console.log(uppedGrade);
});