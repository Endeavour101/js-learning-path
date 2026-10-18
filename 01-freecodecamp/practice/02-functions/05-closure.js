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
