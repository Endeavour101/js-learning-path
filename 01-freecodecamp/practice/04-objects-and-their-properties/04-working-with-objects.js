/* const exampleObject = {
  propertyName: value,
};
 */

/* const person = {
  name: "Alice",
  age: 30,
  "city of residence": "New York",
  "1stProperty": "house",
};

console.log(person.name); // Alice
console.log(person.age);
console.log(person.city);
console.log("X=X=X=X=X=X=X=X");
console.log(person["name"]); // Alice
console.log(person["age"]);
console.log(person["city of residence"]);
console.log(person["1stProperty"]);

let propertyName = "name";
console.log(person[propertyName]);

propertyName = "age";
console.log(person[propertyName]);

console.log(person);

delete person["1stProperty"];

console.log(person);
 */

/* const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
}; */

//const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
//console.log(remainingProperties);

//this renaming (job: _job) must be done!!
/* const { job: _job, city: _city, ...remainingProperties } = person;

console.log(remainingProperties);
 */

/* console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("address"));
console.log("X=X=X=X=X=X=X");
// Object.hasOwn() is the modern, recommended way to check if an object has a property as its own (not inherited!!!).
console.log(Object.hasOwn(person, "job"));
 */

/* const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null,
};

// Object.hasOwn() correctly reports these all exist
console.log(Object.hasOwn(user, "score")); // true  (value is 0, but property exists)
console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
console.log(Object.hasOwn(user, "email")); // false (property was never added)

// Danger! Using if() directly gives wrong results for falsy values
if (user.score) {
  console.log("Has score"); // This will NOT print even though score exists!
}

// Safe! Object.hasOwn() gives correct result
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score); // Has score: 0
}

console.log("score" in user);
 */

/* const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person.contact.phone.work); // "098-765-4321"
console.log(person["contact"]["phone"]["work"]); // "098-765-4321"
let attr = "phone";
console.log(person["contact"][attr]["work"]); // "098-765-4321" */

/* const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" },
  ],
};

console.log(person.addresses[1].city); // "Workville"
console.log(person.addresses[0].type); // "Workville" */

/* let person = { a: { aa: 1 }, b: { bb: 2 } };
const { ...newPerson } = person;
console.log(person);
console.log(newPerson);
newPerson.a.aa = 33;
console.log(person);
console.log(newPerson); */

/* const person = {
  name: "Bob",
  age: 30,
  sayHello: function () {
    return "Hello, my name is " + this.name;
  },
};

console.log(person.sayHello()); // "Hello, my name is Bob"
 */

/* function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3])); */

const original = [{ name: "Bob" }, { name: "Alice" }];
const copy = [...original]; // Creating a shallow copy

// 1. Changing a top-level property (Replacing an item)
copy[0] = { name: "Charlie" };
console.log(original[0].name); // "Bob" (Original remains untouched)
console.log(original);
console.log(copy);

// 2. Mutating a nested object
copy[0].name = "Zoe";
console.log(original[0].name); // "Zoe" <-- OOPS! Both changed!
console.log(original);
console.log(copy);
