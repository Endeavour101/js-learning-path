/* const person = {
  name: "Alice",
  sayHello() {
    console.log("HELLO!");
  },
  sayGoodbye() {
    console.log("GOODBYE!");
  },
  contact: {
    handy: 112233,
    address: "Washington",
  },
};

person.sayHello();
person.sayGoodbye(); */

/* 
// direct copy of an object

const user = person;

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

user.name = "Hans";

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

user.contact.handy = 99;
user.contact.address = "Los Angelos";

console.log(person);
console.log(user);
 */

/* const user = { ...person };

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

user.name = "Hans";

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

user.contact.handy = 99;
user.contact.address = "Los Angelos";

console.log(person);
console.log(user);
 */

/* const user = { ...person };

user.surname = "Cooper";
console.log(user.surname);

console.log(person);
console.log(user);

user.name = "Hans";

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

user.contact.handy = 99;
user.contact.address = "Los Angelos";

console.log(person);
console.log(user);
 */

/* const user = { ...person };

user.contact = { region: "SW" };
console.log(user.contact.handy);

console.log(person);
console.log(user);

user.name = "Hans";

console.log(person);
console.log(user);
console.log("X=X=X=X=X=X");

person.contact.region = "NE";

console.log(person);
console.log(user);
 */

/* const user = structuredClone(person);

console.log(person);
console.log(user);

console.log("X=X=X=X=X=X");

user.contact.handy = 4444;

console.log(person);
console.log(user);
 */

const person = {
  name: "Alice",
  sayHello() {
    console.log("HELLO!");
  },
  sayGoodbye() {
    console.log("GOODBYE!");
  },
  contact: {
    handy: 112233,
    address: "Washington",
  },
};

person.friend = "AA";

person.sayHello();
person.sayGoodbye();
console.log(person);
