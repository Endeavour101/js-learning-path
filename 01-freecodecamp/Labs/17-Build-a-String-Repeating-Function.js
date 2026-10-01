function repeatStringNumTimes(string, number) {
  let result = "";
  if (number <= 0) {
    return "";
  } else {
    for (let i = 0; i < number; i++) {
      result = result + string;
    }
    return result;
  }
}

console.log(repeatStringNumTimes("abc", 3));
