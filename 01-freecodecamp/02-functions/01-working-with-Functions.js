const calculateArea = (width, height) => {
  return width * height;
}; 

console.log(calculateArea(5, 3)); // 15


//
const calculateArea2 = (width, height) => width * height;

//
let multiply = (a, b = 1) => a * b;

console.log(multiply(5));
console.log(multiply(5, 2));

//
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"


//
let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();
console.log(x);

//

const sum = (num1, num2) => num1 + num2;
console.log(`The sum is ${sum(2,3)}`);

const greeting1 = () => console.log(`Hello`);
greeting1();

const greeting2 = (name) => console.log(`Hello, ${name}!`);
greeting2('Amela');

const response = () => "Greetings!";
//response();
console.log(response());



function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown




function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
   return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
   return (age > 18) || confirm('Did parents allow you?');
}





function minNumber (n1, n2) {
    return (n1 > n2) ? n2 : n1;
}

console.log(minNumber (2, 5));
console.log(minNumber (3, -1));
console.log(minNumber (1, 1));