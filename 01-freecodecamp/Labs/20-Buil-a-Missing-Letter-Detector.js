function fearNotLetter(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let currentCharPosString = 0;
  let firstChar = string.at(currentCharPosString);
  let alphabetIndexOfFirstChar = alphabet.indexOf(firstChar);
  for (const char of string) {
    if (string[currentCharPosString] === alphabet[alphabetIndexOfFirstChar]) {
      if (currentCharPosString === string.length - 1) {
        return undefined;
      }
      currentCharPosString++;
      alphabetIndexOfFirstChar++;
    } else {
      return alphabet[alphabetIndexOfFirstChar];
    }
  }
}

console.log(fearNotLetter("abcdefghjklmno"));
