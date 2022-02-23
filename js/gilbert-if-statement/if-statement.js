let userAge = prompt('What is your age?');
let isAccompaniedByParent = true;

// if the user is 21 or above, alert('Access Granted!')
// otherwise, alert('Access Denied!')

/*
Concert Admission Rules:

21+: concert and bar access
18+: just concert access
otherwise, no entry
*/

if(userAge >= 21){
    alert('Full Access Granted! You can enter the concert venue, and make purchases at the bar.');
}else if(userAge >= 18){
    alert('Partial Access Granted! You can enter the concert vanue, but you cannot make purchases at the bar.');
}else if(userAge >= 16 && isAccompaniedByParent){
    alert('Partial Access Granted! You can enter the concert vanue, but you cannot make purchases at the bar.');
}else{
    alert('Access Denied! You are too young.');
}

// if(userAge >= 21){
//     // code that will execute if condition
//     // in paratheses is true
//     alert('Access Granted!');
// }else {
//     alert('Access Denied! You must be 21 or older.');
// }