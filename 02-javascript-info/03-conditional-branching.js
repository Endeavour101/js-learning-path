//let year = prompt('In which year was ECMAScript-2015 specification published?', '');

/* if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
} */


  // ! beginns with prechecks for falsy respond and at the end (optional) a confirmation is launched

 
/* if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
} */

let age = 18;

let accessAllowed = (age > 18) ? true : false;

// The question mark operator has a low precedence, so it executes after the comparison >, so the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed1 = age > 18 ? true : false;


// !!the same in the example above
let accessAllowed3 = age > 18;


if ("0") {
  console.log( 'Hello' );
} else {
  console.log( 'Bye' );
}

if ("") {
  console.log( 'Hello' );
} else {
  console.log( 'Bye' );
}


/* let respond = prompt('What is the “official” name of JavaScript?');

if (respond == 'ECMAScript') {
  alert('Right!');
} else {
  alert('You don\'t know? ECMAScript!');
}
 */


/* let respond = prompt('Enter a number:');
if (respond < 0) {
  alert("-1");
} else if (respond > 0) {
  alert("1");0
} else {
  alert("0");
} */


/* let respond1 = prompt('Enter a number:');
(respond1 < 0) ? alert("-1") : (respond1 > 0) ? alert("1") : alert("0") */


/* 
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

result = (a + b < 4) ? result = 'Below' : result = 'Over';
 */



/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? message = 'Hello' :
 (login == 'Director') ? message = 'Greetings' :
 (login == '') ? message = 'No login' : message = ''; */

if ("0") {
  console.log("This runs.");
}

if (null) {
  console.log("This will not run.");
}

if (undefined) {
  console.log("This will not run.");
}

if (NaN) {
  console.log("This will not run.");
}

if (false) {
  console.log("This will not run.");
}

if ('false') {
  console.log("This runs.");
}



const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}
// each next check represents only one decision branch



// ====================================================
// other exercises below
// ====================================================

// The Ternary Operator
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);



const result = 'hello' && true;

console.log(result); // hello


//The logical AND && operator checks if both operands are true and if so it returns the second value, otherwise it returns the first falsy operand.
//The logical AND && operator is useful when you want to check multiple conditions and ensure that all are true before proceeding.
if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 


//The logical OR operator checks if at least one of the operands is truthy. If the first operand is truthy, it returns that value

let userInput = "";

if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}




const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light



const userSettings1 = {
 theme: false,
 volume: 0,
 notifications: false,
};

let theme1 = userSettings1.theme ?? 'light';
console.log(theme1); // false