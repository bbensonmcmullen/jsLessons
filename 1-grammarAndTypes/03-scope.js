/*
    SCOPE

    JavaScript has both LOCAL and GLOBAL scope.
*/

//"Global" scope outside the function
var x= 12;

//"Local" scope inside the function
function scope(){
    var x = 33;
    console.log(x);
}

scope();
console.log(x);

//

var x=12;

function scope(){
    x=33;
    console.log(x);
}

scope(); //output is 33 for each because there's only 1 variable, it's simply being redefined.
console.log(x);

//the two above examples are different because the first example has two variables which happen to have the same name.
//the second example had only one variable in the global scope which was re-defined in the local scope.

var x= 12;
function scope() {
    var x=33;
    if (true){
        var x= 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

//

let x=12;
function scope(){
    let x=33;
    if (true){
        let x=45;
        console.log(x);
}
    console.log(x);
}
scope();
console.log(x);

//
function constTest(){
    const scope=1;
    if(true) {
        const scope=2;
        console.log(scope);
    }
    console.log(scope);
    if(true){
        const scope=3;
        console.log(scope);
    }
    console.log(scope);
}
constTest();

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/
