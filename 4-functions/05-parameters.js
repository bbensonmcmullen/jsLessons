/*
Parameters

Parameters are like empty storage boxes which we can name whatever we want.
In the below example, you generate the value when you call the function.
*/

function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}

pet('cat');

//Challenge

function name(fName, lName){
    console.log(`Hello, my name is ${fName} ${lName}.`);
}

name('Ben', 'McMullen');