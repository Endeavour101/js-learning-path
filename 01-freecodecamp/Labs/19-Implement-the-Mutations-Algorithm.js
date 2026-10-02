function mutation(arrOfTwoWords) {
  const wordOne = arrOfTwoWords[0].toLowerCase();
  const wordTwo = arrOfTwoWords[1].toLowerCase();
  let mutatedWord = true;
  for (const charOfSecondWord of wordTwo) {
    console.log(charOfSecondWord, mutatedWord);
    if (!wordOne.includes(charOfSecondWord)) {
      mutatedWord = false;
      return mutatedWord;
    }
  }
  return mutatedWord;
}

console.log(mutation(["hello", "hey"]));
