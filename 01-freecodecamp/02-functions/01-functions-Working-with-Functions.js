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

