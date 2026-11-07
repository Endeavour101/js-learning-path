/* const regex = /solo/;
console.log(regex.test("solokefriuehrilfueurgfbkuzegrfkuzgekurf"));
console.log(regex.test("kefsoloriuehrilfueurgfbkuzegrfkuzgekurf"));
console.log(regex.test("kefriuehrilfsoloueurgfbkuzegrfkuzgekurf"));
console.log(regex.test("kefriuehrilfueursologfbkuzegrfkuzgekurf"));
console.log(regex.test("f"));
console.log(regex.test("o"));
console.log(regex.test("polo"));
console.log(regex.test("kefriuehrilfueurgfbkuzegrfkuzgekurfsol")); */

/* const regex = /freeCodeCamp/;
console.log(regex.test("freeCodeCamp"));
console.log(regex.test("freeCodeCamp is great"));
console.log(regex.test("I love freeCodeCamp"));
console.log(regex.test("freecodecamp"));
console.log(regex.test("FREECODECAMP"));
console.log(regex.test("free"));
console.log(regex.test("code"));
console.log(regex.test("camp"));

console.log(`===============================`);
const regex2 = /logo/;
console.log(regex2.test("logofreeCodeCamp"));
console.log(regex2.test("freeCodeClogoamp is great"));
console.log(regex2.test("I love flogoreeCodeCamp"));
console.log(regex2.test("freecodecamplogo"));
console.log(regex2.test("FREECODECAMPlogo"));
console.log(regex2.test("flogoree"));
console.log(regex2.test("codlogoe"));
console.log(regex2.test("clogoamp")); */

/* const regex = /freeCodeCamp/;
console.log("freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined]
console.log("freeCodeCamp is great".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp is great', groups: undefined]
console.log("I love freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined]
console.log("freecodecamp".match(regex)); // null
console.log("FREECODECAMP".match(regex)); // null
console.log("free".match(regex)); // null */

/* const regex = /freecodecamp/;
const str = "freecodecamp is rly kewl";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced); */

/* const regex = /boris/;
const str = "boris is rly kewl";
const replaced = str.replace(regex, "Boris");
console.log(replaced); */

/* const regex = /freeCodeCamp/i;

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // true
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false */

/* const regex = /Boris/;
console.log(regex.test("boris is a friend of mine"));

const regex2 = /Boris/i;
console.log(regex2.test("boris is a friend of mine")); */

/* const regex = /freeCodeCamp/gi;

//console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("I loooooooove freeCodeCamp jhvjh")); // true
 */

/* const regex = new RegExp("freeCodeCamp", "gi");

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("FREECODECAMP")); // false */

/* const regex = /Hello.*World/;
console.log(regex.test("Hello World")); // true
console.log(regex.test("Hello, brave new World")); // true (matches ", brave new ")

const regex2 = /Hello.+World/;
console.log(regex2.test("Hello World")); // true
console.log(regex2.test("HelloWorld")); // true
console.log(regex2.test("Hello, brave new World")); // true (matches ", brave new ") */

/* const pattern = /freecodecamp/g; // A Regex with the global modifier!

const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, "freeCodeCamp");

console.log([...matched]); // Converting iterator to array to see matches
console.log(replaced); */

/* const pattern = /def/g;

const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
const matched = str.matchAll(pattern);

console.log([...matched]); */

/* const pattern = /[TR]X-[0-9]{3}\b/g;

//const str = "TX-433 RX-283 RX-223 TX-533 TX-911 RX-773";
const str = "XX-433 RX-2834 RX-23 TT-533 TR-911 RX-";
const matched = str.matchAll(pattern);

console.log([...matched]); */

/* const logRegex = /[A-Z].*\d/g; // Starts with A-Z, bridges over anything, ends with a digit
//const log = "Error code: XP-90217";
const log = "Error code: XP-90217 occurred-432423";

const iterator = log.matchAll(logRegex);
console.log([...iterator][0][0]);
// Output: "Error code: XP-90217" */

/* // Example: Match everything between HTML tags
// [^>] means "Match any character that is NOT a closing bracket"
const htmlRegex = /<button>[^<>]*<\/button>/g;
const UI = "<button>Click Me!</button><button>Submit</button>";

const buttons = UI.matchAll(htmlRegex);
for (const match of buttons) {
  console.log(match[0]);
}
// Output:
// <button>Click Me!</button>
// <button>Submit</button> */

/* const regex = /a./g;
const log = "Error code: XP-90217 a4 occurred";

const iterator = log.matchAll(regex);
console.log([...iterator][0][0]); */

/* const pattern = /^FL-\d\d[A-Z]$/;
//const pattern = /[A-Z][A-Z]-[\d][\d][A-Z]/;
console.log(pattern.test("FL-12A"));
console.log(pattern.test("FL-99X"));
console.log(pattern.test("FL-00Z"));
console.log("=====================");
console.log(pattern.test("FL-1A"));
console.log(pattern.test("FL-abA"));
console.log(pattern.test("fl-12A")); */

/* const pattern = /^K..S$/;
console.log(pattern.test("K12S"));
console.log(pattern.test("KABS"));
console.log(pattern.test("K#%S"));
console.log(pattern.test("K__S"));
console.log("=====================");
console.log(pattern.test("K123S"));
console.log(pattern.test("K123S")); */

/* const pattern = /^[AEIOU].[1-5]$/;
console.log(pattern.test("AX3"));
console.log(pattern.test("E01"));
console.log(pattern.test("U-5"));
console.log("=====================");
console.log(pattern.test("BX3"));
console.log(pattern.test("AE12"));
console.log(pattern.test("AX9")); */

/* const pattern = /^T.:\d\d$/;
console.log(pattern.test("TA:22"));
console.log(pattern.test("T7:99"));
console.log(pattern.test("T#:00"));
console.log("=====================");
console.log(pattern.test("TA22"));
console.log(pattern.test("T:22"));
console.log(pattern.test("TA:2")); */

/* const pattern = /^img.[.]cfg$/;
console.log(pattern.test("img1.cfg"));
console.log(pattern.test("img-.cfg"));
console.log(pattern.test("imgA.cfg"));
console.log("=====================");
console.log(pattern.test("img1acfg"));
console.log(pattern.test("img12.cfg"));
console.log(pattern.test("IMG1.cfg")); */

/* const pattern = /^START.+END$/;
console.log(pattern.test("START user_admin END"));
console.log(pattern.test("START 10:45:12 Error_Code_99 END"));
console.log(pattern.test("START x END"));
console.log("=====================");
console.log(pattern.test("STARTEND"));
console.log(pattern.test("START user END extra")); */

/* const pattern = /^<p>.*<[/]p>$/;
console.log(pattern.test("<p>Hello World</p>"));
console.log(
  pattern.test(
    "<p>This is a very long sentence containing symbols like # and 123.</p>",
  ),
);
console.log(pattern.test("<p></p>"));
console.log("=====================");
console.log(pattern.test("<p>Hello"));
console.log(pattern.test("<div>Hello</p>")); */

/* const pattern = /^A[,].+[,][1-5]$/;
console.log(pattern.test("A,John Doe,5"));
console.log(pattern.test("A,12345-XYZ,1"));
console.log(pattern.test("A,?,3"));
console.log("=====================");
console.log(pattern.test("A,,5"));
console.log(pattern.test("A,John,9")); */

/* const post = "Learning #regex on #freeCodeCamp is awesome! #coding";
const hashtagRegex = /#\w+/g;

// .match() executes instantly and returns a flat, clean array of strings
const quickList = post.match(hashtagRegex);

console.log(quickList);
// Output: [ '#regex', '#freeCodeCamp', '#coding' ]

// You can treat it like a normal array:
console.log(quickList.length); // 3
console.log(quickList[1]); // '#freeCodeCamp'
 */

/* function processRegex() {
  const str = "The sly brown fox met a bad dog.";
  const pattern = /\b\w{3}\b/g;
  const matched = str.matchAll(pattern) || [];
  //console.log([...matched]);
  let count = 0;

  for (const match of matched) {
    console.log(match[0]);
    count++;
  }
  console.log(`Exactly ${count} have been matched!`);
}

processRegex(); */

/* const regex = /free(co+de)camp/i;
console.log("freecoooooooodecamp".replace(regex, "paid$1world")); // paidcoooooooodeworld */

const oldDate = "Today's date is 11/05/2026.";

// Group 1 ($1) = Month (\d{2})
// Group 2 ($2) = Day (\d{2})
// Group 3 ($3) = Year (\d{4})
const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;

// We swap the order using $3, $1, and $2
const newDate = oldDate.replace(dateRegex, "$3-$1-$2");

console.log(newDate);
// Output: "Today's date is 2026-11-05."
