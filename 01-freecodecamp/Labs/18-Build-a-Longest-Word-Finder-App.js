"use strict";
function findLongestWordLength(string) {
  let maxLength = 0;
  let arrOfWords = string.split(" ");
  for (const word of arrOfWords) {
    if (word.length > maxLength) {
      maxLength = word.length;
      //console.log(word, word.length);
    }
  }
  //console.log(maxLength);
  return maxLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);

console.log(findLongestWordLength("May the force be with you"));
