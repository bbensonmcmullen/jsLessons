/*
    VARIABLES!
notes on variables"
1) A variable must begin with a letter, underscore, or dollar sign.
2) You can use numbers, but they must follow one of the above patterns.
3) JavaScript is VERY case-sensitive-- 'hello' and 'Hello' are different.
*/

var a=1;
var b=2;
console.log(a + b);

/*
DECLARATIONS

Declarations are the left side of a variable.
    It is simply the var's "x".
    It is on the left side of the assignment operator (=)

Initializations are the right side of a variable.
    Set the value of a variable.
    Includes the variable name (x), the assignment operator (=), and the value (10) => e.g. x = 10
*/

var x;
console.log('Declaration', x);

x=10;
console.log('Initialization 1:', x);

x= 33
console.log('Initialization 2:', x);

/*
Var, Let, and Const:
Var = old js keyword for variables
Let = new keyword for variables (introduced in ES6)
Const = also new; declares unchangeable variables
*/

let today="Great!";
const elevenfifty='Wonderful!';
console.log(today, elevenfifty);

today='Lovely!';
console.log(today, elevenfifty);

// elevenfifty="super!"
console.log(today, elevenfifty);
