/*
COMPARISON OPERATORS
*/

//equality
console.log('3'== 3);//type coercion; doesn't care at all about the datatype, just the value; true
console.log('three' == 3);//false
console.log(0 == false == '' == null);

//strict equality
console.log(3 === 3);//strict-equal; checks both value and datatype; true
console.log('3'=== 3);//false because the datatypes are different; first 3 is a string, second 3 is a number

//not equal
console.log('4' != 4);//doesn't care about type, just like ==; output->false

//strict not equal
console.log('3'!== 3);//checks type and value

//greater than
console.log(3>2);

//less than
console.log(2<3);

//greater than or equal to
console.log(3>=3);

//less than or equal to
console.log(4<=4);

//and: returns true ONLY if the left and right are BOTH true
console.log(true && true);
let x=5;
console.log(x<10 && x > -5);
console.log(x<10 && x > 15);

//tangent about letters and 'less than'/'greater than'
let str= 'a';
console.log(str < 'p');

//or: returns true if either the left OR right are true
console.log(true || false);//true
let x= 5;
console.log(x<10 || x > 15);//true

