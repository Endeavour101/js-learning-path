//variadic function
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3, 4);
// result:
// 1
// 2
// 3
// 4

function hasCat(...args) {
  return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
