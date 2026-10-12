function titleCase(userString) {
  let words = userString.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      result.push("");
      continue;
    }
    let lowerCasedWord = words[i].toLowerCase();
    let firstLetter = lowerCasedWord[0].toUpperCase();
    let remainder = lowerCasedWord.slice(1);
    result.push(firstLetter + remainder);
  }
  return result.join(" ");
}

console.log(titleCase("javaScript  is  fun"));
