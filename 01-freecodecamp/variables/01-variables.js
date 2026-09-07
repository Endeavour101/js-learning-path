/* let adminVar, nameVar;
nameVar = 'John';
adminVar = nameVar;
alert(nameVar);
alert(adminVar);

const BIRTHDAY = "11.06.2001";
alert(BIRTHDAY);

const order = "A312312";
alert(order);

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n; */

const userName = prompt("What's your name?", "Hanna");
alert( `Your name is ${userName}` );

const itemPrice = 100;
// Running math directly inside the console.log template
console.log(`The final total 
with 10% tax is: $${itemPrice * 1.1}`);

// Output: The final total with 10% tax is: $110

let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30

const maxScore = 100;
console.log(maxScore); // 100

let age;
console.log(age); // undefined
age = 25;
console.log(age); // 25

