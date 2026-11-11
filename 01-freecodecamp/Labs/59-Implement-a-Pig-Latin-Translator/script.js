function translatePigLatin(userString) {
  const consonantRegex = /(^[^aeiou]+)(.*)/;
  if (consonantRegex.test(userString)) {
    return userString.replace(consonantRegex, "$2$1ay");
  }

  return userString + "way";
}

//console.log(spinalCase("ProductLanding page"));
//console.log(spinalCase("This Is Spinal Tap"));

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

//[aeiou]
