function myReplace(userString, toBeReplaced, replaceWith) {
  // 1. Create a dynamic regex using the variable
  const regex = new RegExp(toBeReplaced);

  // 2. Use .replace() with a callback function to handle capitalization
  return userString.replace(regex, (matchedWord) => {
    if (/^[A-Z]/.test(matchedWord)) {
      return replaceWith.charAt(0).toUpperCase() + replaceWith.slice(1);
    }
    return replaceWith.charAt(0).toLowerCase() + replaceWith.slice(1);
  });
}

console.log(myReplace("Let us go to the store", "store", "mall"));
// Output: "Let us go to the mall"

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// Output: "He is Sitting on the couch"

/* function myReplace(userString, toBeReplaced, replaceWith) {
  // Optional: Preserve capitalization of the first letter
  if (toBeReplaced[0] === toBeReplaced[0].toUpperCase()) {
    replaceWith = replaceWith[0].toUpperCase() + replaceWith.slice(1);
  } else {
    replaceWith = replaceWith[0].toLowerCase() + replaceWith.slice(1);
  }

  return userString.replace(toBeReplaced, replaceWith);
} */

console.log(myReplace("Let us go to the store", "store", "mall"));

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

console.log(myReplace("I think we should look up there", "up", "Down"));

console.log(myReplace("His name is Tom", "Tom", "john"));

console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms"),
);
/*   {
    return userString.replace(consonantRegex, "$2$1ay");
  }

  return userString + "way"; */
