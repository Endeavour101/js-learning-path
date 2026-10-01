let num = 3;
function factorialCalculator(number) {
  let result = 1;
  let i = 1;
  while (i <= number) {
    result *= i;
    i++;
  }
  return result;
}

let factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
