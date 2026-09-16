console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

console.log( "x=x=x=x=x=x=x=x" ); 


let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

console.log( "x=x=x=x=x=x=x=x" ); 


console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

console.log( "x=x=x=x=x=x=x=x" ); 


console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

console.log( "x=x=x=x=x=x=x=x" ); 


console.log( true == 1 ); // true
console.log( false == 0 ); // true

console.log( "x=x=x=x=x=x=x=x" ); 



// !!! When comparing values of different types, JavaScript converts the values to numbers.


// A strict equality operator === checks the equality without type conversion to number
// “strict non-equality” operator !== analogous to !=

console.log( null === undefined ); // false
console.log( null == undefined ); // true


/* Treat any comparison with undefined/null except the strict equality === with exceptional care.
Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately. */

console.log( "x=x=x=x=x=x=x=x" ); 


let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

console.log( "x=x=x=x=x=x=x=x" ); 

console.log( null == undefined );
