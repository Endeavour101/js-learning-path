const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

const notANumber = 'hello world' / 2;
console.log(typeof notANumber); // number

const result = 5 + '10' - 2;
console.log(result);

const firstResult = 5 + +"10";
console.log(`5 + 10 = ${firstResult}`);

const secondResult = +"8" - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);



// right-to-left (=)
let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10


// right-to-left (**)
const result1 = 2 ** 3 ** 2;

console.log(result1); // 512



//if you're (!)using the value (!)immediately in an expression, the difference becomes important
let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);


//The equality operator (==) uses type coercion before checking if each value is equal.
console.log(5 == "5"); // true
//The strict equality operator will check if both the type and the value are the same.
console.log(5 === '5'); // false



const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 14;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}


let a2 = 5;  // Binary: 101
let b2 = 3;  // Binary: 011
console.log(a2 & b2);  // 6 (Binary: 110)
console.log(a2 | b2);  // 6 (Binary: 110)
console.log(a2 ^ b2);  // 6 (Binary: 110)


let a3 = 5;  // Binary: 101
console.log(a3 << 1);  // 10 (Binary: 1010)


let a4 = 5;  // Binary: 101
console.log(a4 >> 1);  // 2 (Binary: 10)