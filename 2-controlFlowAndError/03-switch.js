/*
SWITCHES
*/

let friend = ('Alecx');

switch (friend){
        case 'Tom':
    console.log('Hey Tom, when are you rock climbing?');
    break;
        case 'Ken':
    console.log('Hey Ken, wanna play Catan?');
    break;
        case 'Carolyn':
    console.log('Hey Carolyn, why you leavin us?');
    break;
        default:
    console.log(`I'm sorry, ${friend}, but do I know you?`)
}

//

let dessert = 'Cake';
switch (dessert){
case 'Pie':
    console.log('Pie, pie, me oh my!')
break;
case 'Cake':
    console.log('Cake is great!')
break;
case 'Ice Cream':
    console.log('I scream for ice cream!')
break;
default:
    console.log(`Sorry, ${dessert} isnt on the menu...`)
}

let yep = -8;
switch (true){
    case(yep <0 && yep > -10):
console.log('Worked!');
break;
    case (yep > 0):
console.log('worked here!');
break;
    default:
console.log("didn't work");
}