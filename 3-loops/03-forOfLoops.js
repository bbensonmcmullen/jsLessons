/*
FOR OF LOOPS

better for arrays
*/

// let student = {name: 'Emily', awesome: true, degree: 'JavaScript', week: 1};
// for (let key of student){
//     console.log(key);
// }    this example doesn't work because FOR OF requires iterable 

let catArray= ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat of catArray){
    console.log(cat, 'says meow')
}

//For/Of grabs the value of an array, not the key. For/In grabs keys.