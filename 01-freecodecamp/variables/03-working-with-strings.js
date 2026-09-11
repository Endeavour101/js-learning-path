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


console.log("x=x=x=x=x=x=x");

let car = "!Ford Mustang";
console.log(car.charCodeAt("0"));
console.log(car.charCodeAt("1"));
console.log(car.charAt("0"));
console.log(car.charAt("1"));

console.log("x=x=x=x=x=x=x");

let char = String.fromCharCode(65);
console.log(char);
let char1 = String.fromCharCode(66);
console.log(char1);

console.log("x=x=x=x=x=x=x");

console.log( `My\n`.length ); // 3

console.log("x=x=x=x=x=x=x");

let str = `Bye`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

console.log("x=x=x=x=x=x=x");

// the last character
console.log( str[str.length - 1] ); // o
/* alert( str.at(-1) );
alert( str.at(-2) );
alert( str.at(-3) ); */

console.log("x=x=x=x=x=x=x");

for (let char of "Bye") {
  console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

console.log("x=x=x=x=x=x=x");

let str1 = 'Hi';
str1 = 'h' + str1[1]; // replace the string
console.log( str1 ); // hi

console.log( 'Piazza'.toUpperCase() ); // INTERFACE
console.log( 'Piazza'.toLowerCase() ); // interface

console.log( 'Piazza'[0].toLowerCase() ); // 'i'


console.log("x=x=x=x=x=x=x");


let text = "The default browser checkboxes look different on every operating system and are notoriously difficult to style directly in a browser.";

let target = "browser";

let pos = 0;

while (true) {
  let foundPos = text.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found on position: ${foundPos}` );
  pos = foundPos + 1;
}

console.log("x=x=x=x=x=x=x");



let sentence4 = "The red owl jumped over the big table and together with the other owl run off";
let position4 = sentence4.lastIndexOf("owl", 70);
console.log(position4);

console.log("x=x=x=x=x=x=x");


let sentence5 = "The red owl jumped over the big table and together with the other owl run off";
console.log(sentence5.includes("owl"));
console.log(sentence5.includes("Owl"));

console.log("x=x=x=x=x=x=x");


let sentence6 = "The red owl jumped over the big table and together with the other owl run off";
console.log(sentence6.startsWith("The"));
console.log(sentence6.endsWith("off"));

console.log("x=x=x=x=x=x=x");


let sentence7 = "The red owl jumped over the big table and together with the other owl run off";
console.log(sentence7.slice(4, 6));
console.log(sentence7.substring(4, 6));
console.log(sentence7.substr(4, 2));

console.log("x=x=x=x=x=x=x");


let value = false;
console.log(typeof value); // boolean

value = String(value); // now value is a string "false"
console.log(value);
console.log(typeof value); // string

console.log("x=x=x=x=x=x=x");


console.log( "56" / "7");

console.log("x=x=x=x=x=x=x");


let PLZ = "123";
console.log(typeof PLZ); // string

let numPLZ = Number(PLZ); // becomes a number 123
console.log(typeof numPLZ); // number

console.log("x=x=x=x=x=x=x");


console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0
console.log( Number(null) );       // 0
console.log( Number(undefined) );       // NaN

console.log("x=x=x=x=x=x=x");


console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.


console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)
//the string with zero "0" is true
//spaces, also true (any non-empty string is true)

console.log("x=x=x=x=x=x=x");


console.log( "ZA".codePointAt(0) ); // 90
console.log( "za".codePointAt(0) ); // 122
console.log( "za".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
console.log( "za".codePointAt(0).toString(2) );

console.log( "ZA".codePointAt(1) ); // 90
console.log( "za".codePointAt(1) ); // 122
console.log( "za".codePointAt(1).toString(16) ); // 7a (if we need a hexadecimal value)
console.log( "za".codePointAt(1).toString(2) );

console.log("x=x=x=x=x=x=x");


console.log( String.fromCodePoint(90) ); // Z
console.log( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)


/* 
charCodeAt()
fromCharCode()
charAt()

codePointAt()
fromCodePoint()
*/

console.log("x=x=x=x=x=x=x");


let strUTF = '';

for (let i = 65; i <= 220; i++) {
  strUTF += String.fromCodePoint(i);
}
console.log( strUTF );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

console.log("x=x=x=x=x=x=x");


name4 = "rosamunde";
console.log(`${name4[0].toUpperCase()}${name4.slice(1)}`);