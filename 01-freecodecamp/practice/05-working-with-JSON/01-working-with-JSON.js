/* const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
 */

/* const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

console.log(JSON.stringify(developerObj, null, 2)); */

const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);
