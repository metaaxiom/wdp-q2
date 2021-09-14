General Notes
=============

## Aspects of Web Development

Web Design and Web Development are terms which are frequently used interchangably, but there is a difference:
  * Web Design typically refers to designing the appearance of a website, or building the frontend (user-facing) part of the website.
  * Web Development can refer to backend / serverside development, or the development of websites as whole (both, the appearance and the backend functionality).
  * The most important distinction to make is between the server-side / backend and the client-side / frontend.
    * Frontend: HTML, CSS, JS
    * Backend: Server-side programming language (like PHP), a database (like SQL), and of course, the server (like Apache)

## Programming vs Coding

Coding is a general term, which covers writing HTML (markup language) and CSS (stylesheet language) code, as well as programming language code (like JS or PHP).

Programming languages are coding languages which contain *logic* ("logic" not in a colloquial sense, but in the sense of programming language constructs like if / else, for / while loops).

## Libraries vs Frameworks

**Libraries:** additions to a programming language, or another piece of technology, which make development more efficient. Libraries just provide additional, *optional* functionality.

  * **SASS:** CSS library that provides some additional CSS syntax (selector nesting, variables)
  * **jQuery:** It used to be a VERY popular JavaScript library several years, because it provided a lot of additional functionality which didn't come with vanilla or plain JS. However, over the years, JS has added most of the functionality that jQuery provides, and this has made the library largely obsolete.
  * **Lodash**: A modern JS library, which is gaining in popularity. It provides functions / utilities which speed up the development of JS projects.
  * **Bootstrap:** HTML and CSS library, which allows the develop to build website templates quicker.


**Frameworks:** provide additional functionality, much like libraries, but they typically expect the developer to do things in a particular way. In that sense, frameworks are more constraining (but this may provide more organization).

  * **React.js**: a JS framework which provides a specific system for developing JS web apps. It is also VERY interactive an dynamic (pages update without refreshing).
    * Implements a popular design pattern known as **MVC** (Model View Controller)
      * **View:** what the user sees (user interface)
      * **Model:** the data that is used on the website / webapp (what's stored in the DB, or files on the server)
      * **Controller:** middleman that interfaces between the Model and the View.
      * The MVC pattern can be limiting, since it requires the developer to divide his codebase across three parts, but the adventage of this approach is that it can make the project much more organized (this is especially adventageous for large projects).


## Browsers

Browsers differ in their support of HTML, CSS, and JS features. When HTML, CSS, or JS receive updates, it takes time for each browser to add support for these updates.
  * Google Chrome typically is the most up-to-date with new HTML, CSS, and JS features.

Browsers are the "compilers" that execute HTML, CSS, JS code.

**HTML:** Defines the structure of the website.
**CSS:** Defines the visual appearance of the website (colors, fonts, etc.)
**JS:** Allows the programmers to make changes to the website without refreshing the page.
  * Example: pull data from a database and display to the user.


## HTML

The basic structure of a regular HTML page will be:

```
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Some text below the heading.</p>
  </body>
</html>
```

If you don't wrap your HTML code in html, head, and body tags, then most browsers will generate them automatically for you, by default.

* All HTML code has to be inside of HTML tags.
* Metadata (additional information), such as title, author, brief page description (what search engines like Google rely on) is contained within the head tag
* The body tag will contain all the content that the user will actualy see on the page.


## Comments

Most coding languages provide us with the ability to write comments, which have no effect on the function of the code, but are a great way of explaining difficult pieces of code. If you think comments are useless, ask yourself these two questions:

1. If you return to your current project in 6 months, will you remember the details of why you wrote the code the way you did?
2. If another programmer picks up your project in the future, will he be able to follow your code with ease?

Commenting difficult parts of our code with brief explanations or clarifications helps us mitigate the two above issues.

* HTML comment: 
  ```
  <!-- HTML comment -->
  ```
* CSS comment:
  ```
  /* CSS comment */
  ```

## Adding CSS to an HTML Document

There are 3 main ways to include CSS code in HTML:

1. Inline CSS (should only be used as a last resort, b/c inline CSS is VERY difficult to overwrite)
2. Embedded CSS (CSS that is included in HTML using `<style>` tags).
3. Linking CSS from an external stylesheet (tends to be the best approach when we're working with large CSS files).

## CSS Selectors

* Selecting by tag, class, and id
* Inline styling (applies styling through the element.style selector visible in Chrome DevTools, which is even more specific than an ID)


## CSS Display Property

* The `display: block` CSS property will make the element it's applied on span the full width of its container (width will be 100%, regardless of how much space the content requires).
  
* `display: inline` makes elements occupy only as much width as they need, but will not respect vertical margins (because "inline" basically treats elements like text), nor specific width (elements will ALWAYS occupy only as much space as they need).
  * **USE CASE:** Items aligned side-by-side, where vertical margins and set width will not be neeeded.

* `display: inline-block` makes elements occupy only as much width as they need, but without the downside of not respecting vertical margins or set width.
  * Inline-block will add about 4px of spacing between elements aligned side-by-side. This quirky gap can be removed using negative margins (`margin-right: -4px`), or by setting the width property of the elements involved with the calc function (`width: calc(50% - 2px)`).
  * **USE CASE:** Items aligned side-by-side (especially where the 4px gap doesn't matter).


## Floats

* Originally, floats were intended for wrapping text around images.
* However, they began to be used for positioning block-level elements as well.
* You can float elements to the left or the right.
* Everytime you use a float, you have to clear it. Otherwise, you risk having the containing element collapse (height of 0), and neighboring elements (which you do not want to float) being dragged in by the floated elements.
  * There are two ways for clearing a float:
    1. Create a seperate block-level element (like a DIV), and give it the property `clear: both`.
    2. Apply an `::after` to the containing element, and give this after space the following properties:
        ```
        content: '';
        display: block;
        clear: both;
        ```

## Flexbox

* Flexbox (which was added to CSS several years ago) has partially replaced floats. We say "partially" b/c floats are still used for wrapping text around images, and in certain other scenarios, but flexbox is often preferred for aligning elements side by side, or in a SIMPLE grid.


## CSS Position Property

1. **Static**: Default, going with the normal website "flow"
2. **Relative**: Offset from the origin point of the element's original position.
3. **Absolute**: Offset from the origin point of the parent
4. **Fixed**: Offset from the origin point of the window, and have the positioned element remain in place, as the user scrolls through the website.
5. **Sticky**: new, and not well-supported yet