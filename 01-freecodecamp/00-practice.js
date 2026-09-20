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


function isLeapYear (attrYear) {
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
console.log(result);