/* const now = new Date();
console.log(now); */
/* const dateFromString = new Date("July 4, 1776 12:00:00");
console.log(dateFromString); */
/* const dateFromArguments = new Date(1776, 6, 4, 12, 0, 0, 0);
console.log(dateFromArguments); */

/* const dateNow = Date.now();
console.log(dateNow); */

/* const now = new Date();
const date = now.getDate();
console.log(date);
const month = now.getMonth();
console.log(month); // !! The month is zero-based, so January is 0, February is 1, and so on.
const year = now.getFullYear();
console.log(year); */

const now = new Date();
console.log(now);
const dateString = now.toString();
console.log(dateString);
console.log(now.toISOString());
