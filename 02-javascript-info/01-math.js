let x1 = 1;
x1 = -x1;
console.log( x1 ); // -1, unary negation was applied

let x2 = 1, y2 = 3;
console.log( y2 - x2 ); // 2, binary minus subtracts values

console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4
console.log( 8 % 10 );
console.log( 8 % 100 );

console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
console.log( 27 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

console.log( '1' + 2 ); // "12" - number is converted to string !
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

// The binary "+"" is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.


// No effect on numbers
let x = 10;
console.log( +x ); // 10

let y = -20;
console.log( +y ); // -20

// Converts non-numbers - it actually does the same thing as Number(...), but is shorter.
console.log( +true ); // 1
console.log( +false ); // 0
console.log( +"" );   // 0
console.log( +"0" );   // 0
console.log( Boolean("0") );   // 1

let bolts = "4";
let nuts = "5";

console.log( bolts + nuts ); // "23", the binary plus concatenates strings

let bolts1 = "4";
let nuts1 = "5";

// both values converted to numbers before the binary plus
console.log( +bolts1 + +nuts1 ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// ! All operators in JavaScript return a value.

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log( n ); // 14

let n1 = 2;

n1 *= 3 + 5; // right part evaluated first, same as n *= 8

console.log( n1 ); // 16

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); // 3


let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
console.log( counter1 ); // 1



/* If we’d like to increase a value and immediately use the result of the operator, we need the prefix form: */

let counter3 = 0;
console.log( ++counter3 ); // 1
( ++counter3 ); // 1
console.log( counter3 )

/* If we’d like to increment a value but use its previous value, we need the postfix form: */

let counter4 = 0;
console.log( counter4++ ); // 1
( counter4++ ); // 0
console.log( counter4 )

console.log("x=x=x=x=x=x=x");


let a = 1, b = 1;

console.log( ++a ); // 2, prefix form returns the new value
console.log( b++ ); // 1, postfix form returns the old value

console.log( a ); // 2, incremented once
console.log( b ); // 2, incremented once

console.log("x=x=x=x=x=x=x");


console.log(true + true);

console.log("x=x=x=x=x=x=x");


/* let a11 = +prompt("First number?", 1);
let b11 = +prompt("Second number?", 2);

console.log(a11 + b11); // 3

let a12 = prompt("First number?", 1);
let b12 = prompt("Second number?", 2);

console.log(+a12 + +b12); // 3 */



const s1 = true && true; // t && t returns true
const s2 = true && false; // t && f returns false
const s3 = false && true; // f && t returns false
const s4 = false && 3 === 4; // f && f returns false
const s5 = "Cat" && "Dog"; // t && t returns Dog
const s6 = false && "Cat"; // f && t returns false
const s7 = "Cat" && false; // t && f returns false

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat

const ns1 = null ?? 1; // 1
const ns2 = undefined ?? 2; // 2
const ns3 = false ?? 3; // false
const ns4 = 0 ?? 4; // 0

console.log("x=x=x=x=x=x=x");


console.log(2>>1); // 1, also division at 2 (preserves the sign)
console.log(2<<1); // 3, also multiplication of 2
console.log(~2); // -3