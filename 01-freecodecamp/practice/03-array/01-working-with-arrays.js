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