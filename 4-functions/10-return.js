//RETURNS

function fullName(firstName, lastName){
    return firstName +' '+ lastName;
}

var fullName = fullName("Ben", "McMullen");
console.log(fullName('Ben', 'McMullen'));

//

function addNums(firstNum, secondNum){
    return firstNum + secondNum
}

var addNums = addNums(5, 10);
console.log(addNums)

//Challenge

function tipCalc(price){
    let tip = price * 0.15;
    return tip;
}

console.log(tipCalc(10));
let tip = tipCalc(10);