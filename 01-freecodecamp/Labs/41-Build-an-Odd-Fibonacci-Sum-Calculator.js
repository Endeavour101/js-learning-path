function sumFibs(userNumber) {
  if (userNumber < 1) {
    return -1;
  }
  // 0 is excluded
  let prevNum = 1;
  let currNum = 1; // not in the total sum yet
  let sum = 1; // prevNum is added up

  while (currNum <= userNumber) {
    if (currNum % 2 !== 0) {
      sum += currNum;
    }

    let nextNum = prevNum + currNum;
    prevNum = currNum;
    currNum = nextNum;
  }
  return sum;
}
console.log("result", sumFibs(75025));
