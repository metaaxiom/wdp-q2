/*
It is actually possible to nest arrays within arrays, objects within objects, or even arrays witin objects, and objects within arrays!
*/

/* An array within an array: */
let groceriesArr = [
    ['apples', 'oranges'],
    ['eggs', 'milk']
];

console.log(groceriesArr[0][0]); // apple

/*
An array nested within another array is sometimes also called a multi-dimensional array. Notice that in the above example, we had to use two bracket notation pairs to retrieve 'apples': the first bracket set refers to the inner array (`['apples', 'oranges']`), the second bracket set refers to the first element within the inner array ('apples', at index 0);

If we wanted to retrieve 'oranges', we could write:
*/
console.log(groceriesArr[0][1]); // oranges

/*
If we wanted to retrieve 'eggs', we could write:
*/
console.log(groceriesArr[1][0]);

/*
An array within an object:
*/
groceriesObj = {
    fruits: ['apples', 'oranges'],
    dairy: ['eggs', 'milk']
};

/*
We can see that the above combination, an array within an object, makes more sense for a grocery list that is divided according to food category. Retrieval is more intuitive / descriptive:
*/
console.log(groceriesObj.fruits[1]); // oranges
console.log(groceriesObj.dairy[0]); // eggs

/*
The above examples aren't very practical, since the data set is small, and we typically don't divide our groceries into categories. If we really wanted to store a grocery list in a variable, a regular, one-dimensional array would probably suffice. The above examples are presented just to illustrate the syntax for nesting collection within each other.

So, how would nested arrays or objects be used in practice? We will answer this question with an exercise:

1. Copy the movie object you created in a previous assignment.
2. Create 4 additional movie objects, each with different information.

By this point, you should have 5 object variables. Since all of them are movies, it doesn't make a whole lot of sense to store them seperately. Although this is not a huge issue currently, imagine if we were storing information about 1,000 films. It would be incredibly tedious to perform any operations on our list of movies, because we wouldn't be able to loop through them in any way; instead, we would have to refer to them seperately, one-by-one. So, let's group our 5 movies by nesting them all in another collection.

But what type of collection: an array or an object?

If we use an object, then we could retrieve each inner movie object using a key (the movie title would make for a good key). With this approach, we could retrieve fields from record like this, for example:

moviesObj['Batman'].title
moviesObj['Batman'].description
moviesObj['Batman'].releaseDate
...

This is acceptable, but not great. There are several problems with this approach. One issue is that if the movie title were to include a space, then we wouldn't be able to use that title as a key, without modifying it, because object keys cannot contain spaces (just like variable names). So, a movie titled "Batman Begins", for instance, would have to have its key changed to "BatmanBegins", or something like that.

Another problem with the above approach is that it's more difficult to loop through objects than it is to loop through arrays. And, let's suppose that what we really care about is the ability to iterate through our collection of movies to display select information about each movie. Let's say, furthermore, that we also want the ability to sort our list of movies alphabetically by title. Since arrays are meant to keep their elements ordered, we would benefit more from using an array here (we won't implement the sorting part in this example, but we may in future exercises).

3. We have determined that putting all of our movies movies inside an array is the best approach. So, try to accomplish this on your own.
4. Once all the movies objects are within one array, loop through the array, and console.log each movie title.

Note: If the data set that we are working with requires us to nest collections, whether we choose to nest objects within objects, arrays within arrays, arrays within objects, or objects within arrays ultimately depends on the data set and the specific circumstances of the project. There is no one, single best approach or one-size fits all solution. The only rule is: use the best tool for the job.
*/

