/*
    TYPES
*/

//Booleans
let on=true;
console.log(on); //output -> true

let off=false;
console.log(off); //output -> false

//Boolean can represent: true/false, on/off, yes/no;

/*
Null= Empty value (not 0; not undefined)
"It is like an empty container, nothing is in it, but it still exists as a space to fill."
*/

let empty=null;
console.log(empty);

/*
UNDEFINED
Undefined = 'no value assigned'; it is not even an empty container.
Undefined is not an error.
*/

let undef=undefined;
console.log(undef);

let grass;
console.log(grass);

/* 
Null is an empty vessel, while undefined is an entirely alien object (one about which nothing is known);
Null is like a word in a foreign language which you know to mean 'empty', while undefined is a word in a foreign language which you do not know. 
*/

//Numbers
let degrees=65;
console.log(degrees);

let precise= 999999999999999;
console.log(precise);

let rounded= 9999999999999999;//15 digits appears to be the limit for a single numerical variable.
console.log(rounded);

let notQuite= 0.2 + 0.1;
console.log(notQuite.toFixed(2));//toFixed cuts it off after the listed decimal

let anotherNum= 0.2 + 0.1;
console.log(anotherNum); //js is always consistant in its strange math/number storage and report.

let num=0.3;
console.log(num);

let numbersAreHard=(0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
/*
Strings = any vaule within quotes; JS spits out the value within the quotes.
*/
let string1="double quotes";
let string2='single quotes';
console.log(string1, string2);

//numbers vs strings
let first=1050+100;
let second='1050' + '100';
console.log(first, second);

console.log(typeof first);//number
console.log(typeof second);//string

//what's going on here?
// + => addition when given two numbers, concatenation when given 2 strings.

let third= 1050 + '100';
console.log(third);

let firstName= 'Ben';
let lastName= 'McMullen:';
let houseNumber= 400;
let street= 'Pleasant Ridge Road';
let city= 'Bloomington,';
let state='Indiana;';
let zipcode=47401;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

//OBJECTS
/*
What is an object?

An object is a container that can hold multiple datatypes.
Objects are denoted by {}
Objects have keys and values. (Color (a key): 'blue' (a value)), separated with a colon.
Each key separated with a comma.
*/

let burritosNow= {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);

console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists of data.

These are denoted by the []
Arrays have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos=[
    'large', 4, true
]

console.log(burritos);
console.log(typeof burritos);