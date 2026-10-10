/* const arr = [1, 2, 3];
console.log(arr.toString());
console.log(String(arr)); */

/* const myNum = Number("100");
console.log(myNum); // 100

console.log(typeof myNum); // number */

/* const boolTrue = Number(true);
const boolFalse = Number(false);

console.log(boolTrue); // 1
console.log(boolFalse); // 0 */

/* const undefinedNum = Number(undefined);
const nullNum = Number(null);

console.log(undefinedNum); // NaN
console.log(nullNum); // 0 */

/* const emptyArr = Number([]);
const arrOneNum = Number([7]);
const arrMultiNum = Number([7, 36, 12]);
const arrStr = Number(["str1"]);
const arrMultiStr = Number(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN */

/* const emptyArr = Boolean([]);
const arrOneNum = Boolean([7]);
const arrMultiNum = Boolean([7, 36, 12]);
const arrStr = Boolean(["str1"]);
const arrMultiStr = Boolean(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN */

/* const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
console.log(sparseArray[0]);
console.log(sparseArray[1]);
 */

/* const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray);
emptyArray[3] = 55;
console.log(emptyArray.length); // 5
console.log(emptyArray); */

/* const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5
console.log(fixedLengthArray); */

/* const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0] */

/* const numbers = new Array(3).fill(0); // [0, 0, 0]

numbers[0] = 99; // Change the first item

console.log(numbers);
// Output: [99, 0, 0] <-- Worked perfectly! */

// Danger: All 3 slots point to the SAME single object
const players = new Array(3).fill({ score: 0 });

// Let's give player 0 some points
players[0].score = 10;

// Look what happens to the other players!
console.log(players);
/* Output:
[
  { score: 10 },
  { score: 10 },  <-- Huh?! Player 1 changed too!
  { score: 10 }   <-- Player 2 changed too!
]
*/

const separatePlayers = Array.from({ length: 3 }, () => {
  return { score: 0 }; // Runs 3 times, creating 3 unique objects
});

separatePlayers[0].score = 10;

console.log(separatePlayers);
/* Output:
[
  { score: 10 }, // Only player 0 changed!
  { score: 0 },
  { score: 0 }
]
*/
