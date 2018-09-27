//Iterating

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheesecake', 'hot dog'];

// food.forEach(f => {console.log(f)})

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

//challenge

let movies = ['The Room', 'Troll 2', 'Overdrawn at the Memory Bank'];

movies.forEach((movies)=>{
    console.log(movies);
})

movies.push('This Island Earth');
console.log(movies);

movies.splice(0, 1, 'Double-Down');
console.log(movies);

let long=[1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el =>{
    console.log(el);
})

console.log(newArray);