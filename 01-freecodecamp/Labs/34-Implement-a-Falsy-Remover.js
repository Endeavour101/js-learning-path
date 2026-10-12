function bouncer(userArray) {
  if (userArray.length === 0) {
    return userArray;
  }
  let result = [];

  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i]) {
      result.push(userArray[i]);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
