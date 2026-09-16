/* let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John before the function call

showMessage();

console.log( userName ); // Bob, the value was modified by the function
 */

//
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // John, unchanged, the function did not access the outer variable




//
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  console.log( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log( from ); // Ann



//
function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given



//
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}



//
function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown




//
/* function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
} */

let age2 = prompt('How old are you?', 18);

if ( checkAge(age2) ) {
  console.log( 'Access granted' );
} else {
  console.log( 'Access denied' );
}



//
let sayHi = function() { // (1) create
  console.log( "Hello" );
};

let func = sayHi;  //(2)
// ...





//
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
} */

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);






//&&
let age3 = prompt("What is your age?", 18);

// conditionally declare a function
if (age3 < 18) {

  function welcome() {
    console.log("Hello!");
  }

} else {

  function welcome() {
    console.log("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined





//
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    console.log("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    console.log("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined



//
//Using a question mark operator '?':

/* function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
} */

//Using OR || (the shortest variant):

/* function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} */


// Arrow Functions
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6





//
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();