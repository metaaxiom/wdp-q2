/*
Alerts are popups, which you can use to display a message to the user
*/
alert('Welcome to my page!');

/*
Confirms are popups, which provide a user with two buttons: OK and cancel
    Ok returns the boolean value of true
    Cancel returns the boolean value of false
The user's response (true / false) can be stored in a variable, and used later.
Actually, we have to store this response in a variable, otherwise it won't go
anywhere.
*/
let ofAge = confirm('Are you over the age of 18?');
alert(ofAge);


/*
Prompts are like confirms, except that they provide a user with a textbox for
input. This input can be stored in a variables and used later.
*/
let userName = prompt('What is your name?');
alert('Your name is ' + userName);

/*
If a user doesn't enter anything into the textbox before clicking OK or Cancel,
the value defaults to null
*/

/*
NOTE: all the above 3 popups are "blocking" because during their execution 
(while they're being displayed), they will prevent code below from running.
They basically pause everything on the page until they get a response from
the user.
*/