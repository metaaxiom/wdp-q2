/*
The Document Object Model, or DOM for short, is JavaScript's representation of all the
content on the current webpage (plus some metadata). JS needs to create this model
because it doesn't understand HTML tags and CSS selectors directly. The DOM
is a sort of middleman that facilitates JS' interaction with HTML and CSS.

The DOM is created at page load, right after the HTML and CSS loads.
    It's important to understand that there's a specific moment during the page
    load when the DOM is generated, because we can run into an issue where
    the JS code will attempt to execute, before the Document Object Model is
    constructed.
        If JavaScript doesn't have an update-to-date reference to an HTML component in
        its model, then it can't affect it.

In short, the DOM is just HTML and CSS code that makes up the current webpage, but represented in
the format of a JS object.

We can access the DOM is JS through the "document" object.
*/


/*
"Grab an element with the ID text-div-1, and console.log
its content."

innerText will grab JUST the text content, while
innerHTML will grab the text content AND HTML tags
within the element
*/
console.log(
    document.getElementById('text-div-1').innerText
);

/*
This displays an HTMLCollection of DIV's, which is an
array-like data structure.
*/
console.log(
    document.getElementsByTagName("div")
);

/*
Return the second DIV on the page using index 1
*/
console.log(
    document.getElementsByTagName("div")[1]
);

/*
If you plan on accessing HTML elements through JS,
it's important to assign the given elements an ID
or a class, because otherwise selecting the component
in JS will be difficult (imagine using getElemenetsByTagName()
to get the 10th DIV on a page with 100 DIVs).
*/

/* The below two operations both access the second grocery-list item */
console.log(
    document.getElementById('grocery-list').children[1]
);

console.log(
    document.getElementsByClassName("grocery-list-item")[1]
);