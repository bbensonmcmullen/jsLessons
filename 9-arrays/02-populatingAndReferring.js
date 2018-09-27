/*
INTRO TO ARRAYS

They use []
They can hold multiple datatypes
They're great for making lists
*/

//Overview/calling
let students=['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//index numbers 0         1         2       3    4    5          6
console.log(typeof students);  //objects
console.log(students[2]);  //Rhys

console.log(`Hello ${students[6][1]}, you look nice today!`); //or
console.log('Hello '+ students[6][1]+" you look nice today!");

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];
// for (let i=0; i <food.length; i++){
//     console.log(food[i])
// }
for (f of food){
    console.log(f);
}

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];

food.push('Pizza'); // .push will add 'Pizza' to the end of the array.
// console.log(food);

food.splice(1, 1, 'bananas'); //first argument: the index at which to start, second argument: number of items to remove, third argument: replacement value;

food.splice(2, 0, 'sweet potato pie');
// console.log(food)

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];
food.pop(); //just removes the very last value of an array.
console.log(food);