/* function sumAll(array) {
  let min = null;
  let max = null;
  if (array[0] > array[1]) {
    [array[1], array[0]] = [array[0], array[1]];
    min = array[0];
    max = array[1];
  } else {
    min = array[0];
    max = array[1];
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1])); */

function sumAll(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));

/* // Carl Friedrich Gauss's arithmetic progression formula
function sumAll(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  // Calculate how many numbers are in the range (inclusive)
  const count = max - min + 1;

  // Apply the arithmetic series formula
  return (count * (min + max)) / 2;
}
 */
