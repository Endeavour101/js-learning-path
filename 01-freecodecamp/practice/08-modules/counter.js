//export let count = 0;
let count = 0;

//export function increment() {
function increment() {
  count++;
}

// OR you can group them at the bottom in curly braces:
export { count, increment };
