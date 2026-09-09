let name = "Prodigy";
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log("x=x=x=x=x=x=x");

console.log(name[name.length - 1]);
console.log("x=x=x=x=x=x=x");

console.log(name[5] + name[6]);
console.log("Simsala bim,\nBimbala bim");
console.log("I'm telling you - it's nice to see you again");
console.log('I\'m telling you - it\'s nice to see you\\her again');

console.log("x=x=x=x=x=x=x");
const name1 = "Moris";
const greeting = `Hello, ${name1}!`;
console.log(greeting);
console.log("x=x=x=x=x=x=x");

const name3 = "Moris";
const age3 = 31;
const message = `My name is ${name3} and I am ${age3} years old.`;
console.log(message); 
console.log("x=x=x=x=x=x=x");

const poem = `first line,
second line,
third line,
fourth line.`
console.log(poem); 
console.log("x=x=x=x=x=x=x");

let totalNumber = 90;
let tillTodayNumber = 43;
console.log(`... so our portion adds up ${(tillTodayNumber/totalNumber) * 100}%`);
console.log("x=x=x=x=x=x=x");

let sentence = "The red fox jumped over the big table and run off";
let position = sentence.indexOf("fox");
console.log(position);

sentence = "The red owl jumped over the big table and run off";
let position1 = sentence.indexOf("fox");
console.log(position1);

sentence = "The red owl jumped over the big table and together with the other owl run off";
let position2 = sentence.indexOf("owl", 11);
console.log(position2);

sentence = "The red owl jumped over the big table and together with the other Owl run off";
let position3 = sentence.indexOf("owl", 11); //case sensitive!
console.log(position3);
console.log("x=x=x=x=x=x=x");

const btn = document.getElementById('prompt-btn');
const display = document.getElementById('display-prompt');
btn.addEventListener('click', () => {
  const customerName = prompt("What's your name?", "Moris");
  display.textContent = `Hello dear ${customerName}!`;
});

let car = "!Ford Mustang";
console.log(car.charCodeAt("0"));
console.log(car.charCodeAt("1"));
console.log(car.charAt("0"));
console.log(car.charAt("1"));

let char = String.fromCharCode(65);
console.log(char);
let char1 = String.fromCharCode(66);
console.log(char1);

alert( `My\n`.length ); // 3

let str = `Bye`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
/* alert( str.at(-1) );
alert( str.at(-2) );
alert( str.at(-3) ); */

for (let char of "Bye") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

let str1 = 'Hi';
str1 = 'h' + str1[1]; // replace the string
alert( str1 ); // hi

alert( 'Piazza'.toUpperCase() ); // INTERFACE
alert( 'Piazza'.toLowerCase() ); // interface

alert( 'Piazza'[0].toLowerCase() ); // 'i'