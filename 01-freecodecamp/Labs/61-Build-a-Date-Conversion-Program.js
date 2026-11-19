const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

/* function formatDateMMDDYYYY(currentDate) {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
} */

function formatDateMMDDYYYY(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(currentDate) {
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}
console.log(formatDateLong(currentDate));
