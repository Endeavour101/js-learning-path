function isPalindrome(word) {
  let wordLength = word.length;
  for (let i = 0; i < wordLength; i++) {
    if (word[i].toLowerCase() !== word[wordLength - i - 1].toLowerCase())
      return false;
    if (i >= wordLength - i - 1) break;
  }
  return true;
}

function findPalindromeBreaks(words) {
  if (words.length === 0) return [];
  let indicesNotPalindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      indicesNotPalindromes.push(i);
    }
  }
  return indicesNotPalindromes;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const currentPhrase = words.slice(i, i + phraseLength).join(" ");

    let foundDuplicate = false;

    for (let j = 0; j <= words.length - phraseLength; j++) {
      if (i === j) continue;

      const comparePhrase = words.slice(j, j + phraseLength).join(" ");

      if (currentPhrase === comparePhrase) {
        foundDuplicate = true;
        break;
      }
    }

    if (foundDuplicate) {
      result.push(i);
    }
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < texts.length; i++) {
    const currentWordsArray = texts[i];

    const repeatedResult = findRepeatedPhrases(currentWordsArray, phraseLength);
    const palindromeBreaksResult = findPalindromeBreaks(currentWordsArray);

    const textAnalysis = {
      repeatedPhrases: repeatedResult,
      palindromeBreaks: palindromeBreaksResult,
    };

    result.push(textAnalysis);
  }

  return result;
}

//console.log(isPalindrome("bobobd"));
//console.log(findPalindromeBreaks(["bob", "bobar", "bob", "bobar"]));
console.log(findRepeatedPhrases(["aa", "bb", "cc", "dd"]));
//console.log(findRepeatedPhrases(["bob"]));
