//Arrow Functions

function coffee(){
    console.log('Coffee rules.')
}

let tea = () => {
    console.log("Tea is awesome.")
}

coffee();
tea();

//

var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats and ${puppy} dogs.`)
}

cats(2, 3);

//2 Different Arrow Function body styles:
//Concise-style
let apples = x => console.log(`There are ${x} apples.`)
apples(5);

//Block-style
let peaches = (x) => {
    console.log(`There are ${x} peaches.`)
}
peaches(6);