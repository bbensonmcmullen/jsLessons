/*
IF/ELSE
*/

// weather = 75;

// if (weather < 70){
//     console.log('Wear a jacket!')
// } else {
//     console.log('No jacket necessary!')
// }

let fName=('Ben ');
let lName= ('McMullen');
let fullName = (fName + lName);
if (fullName){
    console.log('Welcome, ' + fullName);
} else {
    console.log('ERROR: scrapcodeentrycredentialsWARNING//cogitatorDownspin=true;beginRiteOfPurgation');
}


//
// name = 'ben McMullen';
function capitalize(string){
    //            //
    // console.log(string.charAt(0).toUpperCase());
    // console.log(string.slice(1).toLowerCase());
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase;
}

console.log(capitalize('ben McMullen'));
 

//

let name = 'bEn'
if (name[0]== name[0].toUpperCase()){
    firstLetter = name[0] +name.slice(1).toLowerCase();
    console.log(firstLetter);
} else{
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}


/*
ELSE IF
*/

let age = 29;
if (age < 18){
    console.log("Sorry! You're too young to do anything.")
} else if (age >= 18 && age <21){
    console. log("Yay! You can vote!")
} else if (age >= 21 && age <25){
    console.log("Yay! You can drink!")
} else {
    console.log("Yay! You can rent a car!")
}

//alternately

age = 32;
if (age >= 25){
    console.log('Yay you can rent a car')
} else if (age >= 21) {
    console.log('Yay you can drink')
} else if (age >= 18){
    console.log('Yay you can vote')
} else {
    console.log("You're too young to do anything")
}