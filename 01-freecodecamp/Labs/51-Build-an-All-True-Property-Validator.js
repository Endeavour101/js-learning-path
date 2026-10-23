/* function truthCheck(collections, pre) {
  let result;
  for (let collection of collections) {
    [...properties] = Object.entries(collection);
    result = properties.every((groupElement) => {
      [key, property] = groupElement;
      if (key === pre) {
        if (property) {
          return true;
        }
      }
    });
    console.log(properties);
  }
  return result;
} */

function truthCheck(collections, pre) {
  return collections.every((collection) => {
    return !!collection[pre];
  });
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: true },
      { name: "Naomi", role: "", isBot: true },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
);

console.log(
  truthCheck(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users",
  ),
);
