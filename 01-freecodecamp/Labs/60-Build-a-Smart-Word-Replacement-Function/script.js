function myReplace(userString, toBeReplaced, replaceWith) {
  // Optional: Preserve capitalization of the first letter
  if (toBeReplaced[0] === toBeReplaced[0].toUpperCase()) {
    replaceWith = replaceWith[0].toUpperCase() + replaceWith.slice(1);
  } else {
    replaceWith = replaceWith[0].toLowerCase() + replaceWith.slice(1);
  }

  return userString.replace(toBeReplaced, replaceWith);
}

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
