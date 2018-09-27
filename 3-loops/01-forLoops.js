/*
CLASSIC FOR LOOPS
*/

//Loop Variations:
//For statements
//Do while statements
//While statements
//Labeled statements
//Break statements
//Continue statements
//For in statements
//For of statements

//counted from 0-9 by 1's
for (let i = 0; i < 10; i ++){
    console.log(i);
}

//count from 0-20 by 2's
for (let i = 0; i<21; i+=2){
    console.log(i);
}

//Challenge:
for (let n = 10; n>0; n--){
    console.log(n)
}

//Challenge 2

let name = 'Benjamin';
for (var x = 0; x < name.length; x++) {
    console.log(name.charAt(x));
  }

let name = 'Kenn';
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}// JS counts from 0; Kenn has 4 characters, so the loop stops before printing the
//number of characters (4), because it starts at 0.



let x = 0;
for (let i=1; i<=50; i++){
    x= x+1
}

let sum = 0;
for (let i=1; i<=50; i++){
    sum = sum +1
}
console.log(sum)

//
let string = '';
for (let i = 1; i<=50; i++){
    string=string+i;
}
console.log(string)