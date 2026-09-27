/* let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json); */

// a number in JSON is just a number
/* console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
console.log(JSON.stringify(["a", "b", "c"]));
 */

/* let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  }),
);
 */

// stringified array
/* let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[3]); // 1 */

/* let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user.friends[1]); // 1 */

/* let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup.date.getDate()); // now works!
 */

//that works for nested objects as well:

/* let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(schedule.meetups[1].date.getDate()); // works! */

/* let user = {
  name: "John Smith",
  age: 35,
};

let userJSON = JSON.stringify(user);

console.log(userJSON);

let newUser = JSON.parse(userJSON);

console.log(newUser); */

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    console.log(`${key}: ${value}`);
    return key == "self" || key == "occupiedBy" ? undefined : value;
  }),
);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
