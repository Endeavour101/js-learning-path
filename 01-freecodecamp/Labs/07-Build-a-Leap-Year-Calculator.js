function isLeapYear (attrYear) {
  let flag = false;
  if ( attrYear%4 == 0 ) {
    if ( attrYear%100 == 0) {
      if (attrYear%400 == 0) {
        flag = true;
      }
    } else {
      flag = true;
    }
  }
 
  if (flag == true) {
    return `${attrYear} is a leap year.`;
  } else {
    return `${attrYear} is not a leap year.`;
  }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);