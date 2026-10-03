let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for (const contact of contacts) {
    if (contact["firstName"] === name) {
      if (Object.hasOwn(contact, property)) {
        return contact[property];
      } else return `No such property`;
    }
  }
  return `No such contact`;
}

/* console.log(lookUpProfile("Akira", "lastName"));
console.log(lookUpProfile("Akkira", "lastName"));
console.log(lookUpProfile("Harry", "Potter"));
console.log(lookUpProfile("Kristian", "lastName")); */
console.log(lookUpProfile("Kristian", "llastName"));
//console.log(lookUpProfile("Bob", "number"));
