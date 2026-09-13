/* 
There are 8 basic data types in JavaScript.

    Seven primitive data types:
        - "number" for numbers of any kind: integer or floating-point, - integers are limited by ±(253-1).
        - "bigint" for integer numbers of arbitrary length.
        - "string" for strings. A string may have zero or more characters, there’s no separate single-character type.
        - "boolean" for true/false.
        - "null" for unknown values – a standalone type that has a single value null.
        - "undefined" for unassigned values – a standalone type that has a single value undefined.
        - "symbol" for unique identifiers.
    And one non-primitive data type:
        "object" for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object. */


let example = "Hi";
example = 42;

let data = 100;  
data = "Update"; 

let num = 11;
console.log(typeof num);

let isUserLoggedIn = false;
console.log(typeof isUserLoggedIn);

let exampleVariable = null;
console.log(typeof exampleVariable); // pay attention! - an object

let myString = "Hi";
console.log(typeof myString);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2);

let firstName = "John";
let lastName = "McPowel";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let firstName1 = "Will";
let lastName1 = "Smith";
let fullName1 = firstName1.concat(" ", lastName1, " the Great");
console.log(fullName1);

let message = 404;
console.log(typeof message);
message = "404";
console.log(typeof message);
message = "Not Found";
console.log(typeof message);