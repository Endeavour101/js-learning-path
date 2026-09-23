/* let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
console.log(fruits.at(-1)); // Plum
console.log(fruits.at(-2)); // Orange */

/* let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit);
  console.log(fruit + 1);
  console.log(`I like ${fruit}`);
} */
/* 
let arr = [1, 2, 3];
console.log(arr);
console.log(String(arr) === "1,2,3");

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"

console.log(+[] + 1); // 1
console.log(+[1] + 1); // 1
console.log(+[1, 2] + 1); // NaN
 */

/* let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]
 */

/* let arr = ["I", "study", "JavaScript"];
let removesd = arr.splice(-1, 0, "love", "and enjoy");
console.log(removesd);
console.log(arr); */

/* let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(-2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript" */

/* let arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end) */

/* let arr = [1, 2];
// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6 */

/* let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

console.log(arr.concat(arrayLike)); // 1,2,[object Object] */

/* let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr.concat(arrayLike)); // 1,2,something,else
 */

/* ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
["Bilbo", "Gandalf", "Nazgul"].forEach((item) => console.log(item));
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index) =>
  console.log(item, index),
); */

/* ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
}); */

/* let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true
console.log(arr.includes(true)); // false */

/* let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user1 = users.find((item) => item.id == 1);
let user2 = users.find((item) => item.name == "John");

console.log(user1.name); // John
console.log(user2.id); // John */

/* let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
console.log(users.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
console.log(users.findLastIndex((user) => user.name == "John")); // 3 */

/* let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);
console.log(someUsers.length); // 2 */

/* let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6

let numbersAdd = [-2, -1, 0, 1, 2].map((item) => item + 1);
console.log(numbersAdd);

let numbersCompare = [-2, -1, 0, 1, 2].map((item) => item > 0);
console.log(numbersCompare); */

/* function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr); // 1, 2, 15 */

/* let arr = [1, 2, 15];

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr); // 1, 2, 15
 */

/* let arr = [1, 2, 15];
arr.sort((a, b) => a - b);
console.log(arr); // 1, 2, 15 */

/* let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
 */

const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
