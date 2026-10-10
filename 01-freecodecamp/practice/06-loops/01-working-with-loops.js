const words = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "bbb", "ccc", "ddd"];

let phraseLength = 3;
function findRepeatedPhrases(words, phraseLength) {
  const result = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let currentPhrase = words.slice(i, i + phraseLength).join(" ");
    console.log("currentPhrase", currentPhrase);
    let foundDuplicate = false;
    for (let j = 0; j <= words.length - phraseLength; j++) {
      let toComparePhrase = words.slice(j, j + phraseLength).join(" ");
      console.log("toComparePhrase", toComparePhrase);
      if (currentPhrase === toComparePhrase) {
        if (i === j) continue;
        console.log("Duplicate found!", currentPhrase, toComparePhrase);
        foundDuplicate = true;
        result.push(i);
        break;
      }
    }
  }
  return result;
}

console.log(findRepeatedPhrases(words, phraseLength));
