/* function getIndexToIns(userArray, number) {
  userArray.sort((a, b) => a - b);
  let count = 0;
  let targetIndex = userArray.findIndex((value) => {
    let isGreater = value > number;
    count++;
    return isGreater;
  });
  if (count === userArray.length) return count;
  return targetIndex;
}
console.log(getIndexToIns([20, 3, 5], 22)); */

/* function getIndexToIns(userArray, number) {
  userArray.sort((a, b) => a - b);
  let filterValues = userArray.filter((value) => value === number);
  let countSameValue = filterValues.length;
  let targetIndex = userArray.findIndex((value) => value > number);
  return targetIndex === -1 ? userArray.length : targetIndex - countSameValue;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); */

function getIndexToIns(userArray, number) {
  userArray.sort((a, b) => a - b);
  let targetIndex = userArray.findIndex((value) => value >= number);
  return targetIndex === -1 ? userArray.length : targetIndex;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([20, 20, 20], 20));
