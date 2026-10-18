/* const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => (n = n * 2));
console.log(doubled);
 */

/* const numbers = [2, 4, 6, 8].filter((num) => num > 5);

console.log(numbers); // [] */

/* const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);
 */

const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);
// big to small --> numbers.sort((a, b) => b - a);

console.log(numbers); // [3, 5, 10, 200, 414]
