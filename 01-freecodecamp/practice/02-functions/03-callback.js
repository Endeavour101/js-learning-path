/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n * 2));
numbers.forEach((n, index) => {
  console.log("result", n * 2);
  console.log("index", index);
});

///functionally the same  as above
numbers.forEach((n) => {
  n *= 2;
  console.log(n);
});

numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
}); */

function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

let sayHello = makeGreeter("Hello");
console.log(sayHello("Boris"));
console.log(sayHello("X"));
console.log(sayHello("Y"));
console.log(sayHello("Z"));
let sayGoodbye = makeGreeter("Goodbye");
console.log(sayGoodbye("Bea"));
console.log(sayGoodbye("A"));
console.log(sayGoodbye("B"));
console.log(sayGoodbye("C"));
