/*
Grab the text from the First Name textbox when the user
clicks the submit button.
*/

let firstnameDisplay = document.getElementById('firstname-display');
let firstname = document.getElementById('firstname');
let firstnameSubmit = document.getElementById('firstname-submit');

/*
To work with the Click event, we first need to refer
to the element on which we want to listen for the click.
*/
firstnameSubmit.addEventListener('click', (err) => {
    firstnameDisplay.innerText = firstname.value;
    // console.log(err);
});

// firstnameSubmit.onclick = (err) => {
//     console.log(firstname.value);
// };