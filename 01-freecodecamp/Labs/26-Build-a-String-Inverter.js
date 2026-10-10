function reverseString(stringToReverse) {
  if (!stringToReverse) return stringToReverse;
  let reversedString = "";
  for (let char = 1; char <= stringToReverse.length; char++) {
    reversedString += stringToReverse.at(-char);
  }
  return reversedString;
}

console.log(reverseString("Greetings from Earth"));
