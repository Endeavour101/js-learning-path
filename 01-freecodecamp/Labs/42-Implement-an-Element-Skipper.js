function dropElements(userArray, userFunction) {
  if (!userArray) return [];

  for (let i = 0; i < userArray.length; i++) {
    if (userFunction(userArray[i])) {
      return userArray.slice(i);
    }
  }
  return [];
}
dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
});

/* 
function dropElements(userArray, userFunction) {
  if (!userArray) return -1;
  let isValid = false;
  let result = [];

  for (let i = 0; i < userArray.length; i++) {
    isValid = userFunction(userArray[i]);

    if (isValid) {
      result = userArray.slice(i);
      break;
    }
  }
  return result;
}
dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
}); */
