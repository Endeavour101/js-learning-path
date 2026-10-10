function largestOfAll(arrayOfArrays) {
  let result = [];
  for (let subArray = 0; subArray < arrayOfArrays.length; subArray++) {
    let currentArray = arrayOfArrays[subArray];
    let largestNumber = currentArray[0];

    for (
      let elementCurrentArray = 1;
      elementCurrentArray < currentArray.length;
      elementCurrentArray++
    ) {
      if (currentArray[elementCurrentArray] > largestNumber) {
        largestNumber = currentArray[elementCurrentArray];
      }
    }
    result.push(largestNumber);
  }
  return result;
}

console.log(
  largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
);
