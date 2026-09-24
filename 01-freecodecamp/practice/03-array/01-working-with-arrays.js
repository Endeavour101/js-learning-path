/* let fruits = ["apple", "banana", "orange"];

console.log(fruits[1]);
console.log(fruits.length);

fruits[1] = "watermelone";
console.log(fruits[1]);
 */

/* const fruits = ["apple", "banana", "orange"];

let addedFruit = fruits.push("pear");

console.log(addedFruit);
console.log(fruits);

let removedFruit = fruits.pop();

console.log(removedFruit);
console.log(fruits); */

/* const numbers = [2, 3];
let newLength = numbers.unshift(1, 22, 33);

console.log(newLength);
console.log(numbers);

let firstElement = numbers.shift();

console.log(firstElement);
console.log(numbers); */

/* let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", "S", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];
 */

/* let board3D = [
    [["se", "dw", "fe", "gr"], ["he", "jw", "ke", "rr"], "cB", "dQ", "eK", "fB", "Nr", "Rw"],
    [["Pd", "fr", "fe", "gr"], ["te", "hw", "ne", "mr"], "Ps", "Ph", "Pj", "Ph", "Pn", "Pm"],
    ["ya", "as", "sd", "fe", "we", "gr", "ht", "rt"],
    ["re", "hg", "jh", "fd", "ds", "fw", "ge", "h4"],
    ["et", "wr", "st", "sg", "dh", "fj", "gk", "kz"],
    ["nf", "bd", "vd", "he", "te", "wr", "wr", "zr"],
    ["pj", "pg", "ps", "pw", "pa", "ps", "pg", "ph"],
    ["rj", "nk", "ba", "qd", "ke", "bw", "nq", "r4"]
];
console.log(board3D[1][0][2]);  */

/* let cars = ["BMW", "VW", "KIA", "Volvo", "Mercedes", "BYD", "Opel"];

let [first, , second, ...rest] = cars;

console.log(first);
console.log(second);
console.log(rest);

console.log(cars.at(-1));

 */

const text = "abcdefghijklmnopqrstuvwxyz";

const textArray = text.split("");

console.log(textArray);

const reversedTextArray = textArray.reverse();

console.log(reversedTextArray);

const joinedReversedTextArray = reversedTextArray.join("");

console.log(joinedReversedTextArray);

/* let replyOfWho = prompt("Who's there?");

if (replyOfWho == "" || replyOfWho == null) {
  console.log("Canceled");
} else if ( replyOfWho == "Admin") {
  let passwort = prompt("Passwort?");
  if (passwort == "TheMaster") {
    console.log("Welcome!");
  } else if (passwort == "" || passwort == null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I don't know you");
}
 */

/* let billion = 1_000_000_000;
console.log(billion);

let sience = 1.3e-3;
console.log(sience);

console.log( 0xff ); // 255
console.log( 0xFF );

console.log( 255..toString(16) );
console.log(Boolean(undefined));


console.log( isFinite("15s") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity
 */

/* console.log( isNaN(NaN) ); // true
console.log( isNaN("true") ); // true

console.log( parseInt('\n123') );
 */

/* function readNumber() {
  let number;

  do {
    number = prompt("Enter a number:", 0);
  } while ( !isFinite(number) );

  if (num === null || num === '') return null;

  return +number;
}

alert(`You have entered: ${readNumber()}`);
 */

/* let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
} */

/*   let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); */

/* function isLeapYear (attrYear) {
  let flag = false;
  if ( attrYear%4 == 0 ) {
    if ( attrYear%100 == 0) {
      if (attrYear%400 == 0) {
        flag = true;
      }
    } else {
      flag = true;
    }
  }
 
  if (flag == true) {
    return `${attrYear} is a leap year.`;
  } else {
    return `${attrYear} is not a leap year.`;
  }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result); */

/* function truncateString (text, number) {
  let stringLength = text.length;
  if ( stringLength > number) {
    return `${text.slice(0, number)}...`;
  } else {
    return text;
  }
}

console.log(truncateString ("Absolutely Longer", 2)); */

/* function confirmEnding (text, textEnd) {
  const textEndLength = textEnd.length;
  const textTargetSlice = text.slice(text.length - textEndLength);
  if (textEnd == textTargetSlice) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding( "Abstraction", "action" )); */

//destructuring
let results = ["a", "b", "c"];

const [name, age, address] = results;

console.log(name);
console.log(age);
console.log(address);
