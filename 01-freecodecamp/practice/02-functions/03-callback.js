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

/* function greeting() {
  console.log(`hello`);
}

function makeGreeting(callback) {
  console.log(`I am going to call hello...`);
  callback();
}

makeGreeting(greeting); */

function greeting(name, pin) {
  return `hello from callback...${name} (PIN: ${pin})`;
}

function doHMI(name, callTheCallback) {
  const PIN = "12345";
  console.log(`do something...`);
  let responcseFromCallback = callTheCallback(name, PIN);
  return responcseFromCallback;
}
let finalMessage = doHMI("john", greeting);
console.log(finalMessage);
