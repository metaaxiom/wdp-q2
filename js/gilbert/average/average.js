function average(gradesArr){
    let sum = 0;
    for(let grIdx = 0; grIdx < gradesArr.length; grIdx++){
        sum += gradesArr[grIdx];
    }
    return sum / gradesArr.length;
}

let myStudentsGradesArr = [78, 98, 100, 67, 88];
console.log( average(myStudentsGradesArr) );