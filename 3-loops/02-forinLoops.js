/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1};

for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat in catArray){
    console.log(catArray[cat]);
}

//Challenge
//attempt
let name="ben";

for (let letter in name){
    console.log(name.charAt(0).toUpperCase)
}
//solution
let studentName='paul';
let capName = '';
for (let ch in studentName){
    if (ch == 0){
        capName = studentName[ch].toUpperCase();
    } else {
        capName = capName + studentName[ch].toLowerCase();
    }
    console.log(capName);
}

console.log(capName);