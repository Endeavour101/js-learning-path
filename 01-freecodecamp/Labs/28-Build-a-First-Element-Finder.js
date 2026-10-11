function findElement(userArray, userFunction) {
  for (let elementArray = 0; elementArray < userArray.length; elementArray++) {
    let currentElementArray = userArray[elementArray];
    if (userFunction(currentElementArray) === true) {
      return currentElementArray;
    }
  }
  return undefined;
}

/* console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
); */

console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));
