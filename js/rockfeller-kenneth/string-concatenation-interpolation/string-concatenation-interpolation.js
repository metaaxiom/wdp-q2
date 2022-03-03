/*
String literal: string displayed directly using quotes, not through a variable

STRING CONCATENATION: connecting multiple strings together into one string
    Example: words concatenated into a whole sentance

Strings can be concatenated in 2 ways:
    
    1. Using the plus (+) sign 
        Besides summing numbers, the addition operator can also combine strings
    
    2. Using interpolation
        This complex word describes the same thing that the + operator 
        does with strings. It only varies in terms of syntax:
            
        `The final word of this sentence will come from ${someVariable}`
        
        Instead of the + sign, interpolation uses the dollar sign, follow by 
        curly brackets, which inside contain the variable that you want to add to the
        string

        Note that you must also use tick marks (``) instead of regular quotes for
        interpolation
            We know of 3 ways to represent string literals:
                '' (single quotes)
                "" (double quotes)
                `` (tick marks, above the tab key)
        
        Interpolation is most useful when you want to include many variables in one
        string. That way you don't have to constantly close / re-open quotes (everything
        can be done in one set of tick marks).
*/

/*
Example of concatenation using +
    Notice that we need to create a string literal of one space
    in order to create seperation between the two sub strings
*/
let predicate = 'My name is';
let subject = 'Adam';
console.log(predicate + ' ' + subject);

/*
The console.log method accepts multiple arguments (seperated by commas),
where each comma will be replaced by a space. So, when using console.log,
we can actually avoid using concatenation (since it's done automatically
for us). But, it's still very important to know how to concatenate using 
the + or through interpolation, because other methods of displaying text 
on the screen (alert function, for instance), do not allow us to combine 
string in the way that console.log does.
*/
console.log('Hello,', 'how', 'are', 'you?'); // Hello, how are you?


/*
Example of interpolation
*/
let myCarMake = 'Ford';
let myCarModel = 'Fiesta';
let myCarYear = 2012;
console.log(`I have a ${myCarMake} ${myCarModel} ${myCarYear}.`);



/*
What happens when you try to interpolate values of different data types,
like a string and a number together?

Other languages may not allow you to do this, but JavaScript is unique
in that it will. It accomplishes this through "type coercion", which means:
subtly converting from one data type to another. This happens behind the scenes,
without us directly seeing it.
*/

/*
Here we have a number data being concatenated to a string
It makes sense to add two numbers together (producing a sum), and 
it makes sense to add two string together (merging multiple string into one),
but it does NOT make sense to add a string and a number. So, in this example
JS will sneakily convert myGrade from a number to a string (98 -> '98'). Then,
add the two "strings" will be simple.
*/
let myGrade = 98;
// data type coercion
console.log('My final grade is ' + myGrade); // My final grade is 98


/*
WARNING: always pay attention to data types, keeping in mind that numbers can be
represented as number data types, but also as strings (quotes around a number).
This will affect how the + behaves:
*/
console.log(5 + 5); // 10
console.log('5' + '5'); // '55'

/*
If you're not sure what data type a value is, you can always check using the
typeof operator:
*/
console.log(typeof 2); // number
console.log(typeof 'hello'); //string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined (undefined only has one possible value)