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