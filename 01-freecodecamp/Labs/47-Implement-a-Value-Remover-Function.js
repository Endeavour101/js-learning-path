/* function destroyer(userItems, ...removeItems) {
  if (removeItems.length === 0) return userItems;
  let result = [];
  for (let removeItem of removeItems) {
    result = userItems.filter((item) => item !== removeItem);
    userItems = result;
  }
  return result;
} */

function destroyer(userItems, ...removeItems) {
  return userItems.filter((item) => !removeItems.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan",
  ),
);
