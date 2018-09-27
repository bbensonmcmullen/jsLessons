/*
Assignment Operators
*/

//assignment operator
let x = 5; //the = is the assignment operator
console.log(x);

// x = x+1;
// console.log(x);

//addition operator
x += 1; // x = x + 1;
console.log(x); //6

//subtraction operator
x-=1;
console.log(x); //5

//multiplication operator
x *= 1; //x = x*1;
console.log(x); //5

//division operator
x/=1; //x = x / 1;
console.log(x); //5

//modulous operator
console.log(10%3);
console.log(7%2);//output -> 2, remember that 7/5 = 1 & 2/5ths
console.log(x % 5);
x = x % 5; // would assign x to 0 at this point
x%=5; //functionally the same as the above line

//exponential assignment
let x=5;
x=x**2;
x**=1;
console.log(x);//output = 25


// function palindrome(str){
//     var re = /[^A-Za-z0-9]g/;
//     str= str.toLowerCase().replace(re,'')
    
//     var len= str.length;
    
//     for (var i = 0; i <len/2; i++){
//       if (str[i] !== str[len - 1 - i]){
//         return false;
//       }
//     }
//     return true;
//   }
//   palindrome('');
//    console.log(palindrome('racecar'));



let userinput = prompt('Enter a potential palindrome!');
   function palindrome(input){
    const input1 = [...input].reverse() .join('');
    if (input1.toLowerCase() == input.toLowerCase()){
      alert('Good job! That is a palindrome!');
    }
    else {
      alert('Nah, not a palindrome. Try again!');
    }
  }

  alert(palindrome);
