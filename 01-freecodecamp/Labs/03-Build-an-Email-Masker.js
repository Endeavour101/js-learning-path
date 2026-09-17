function maskEmail(email) {
    let atIndex = email.indexOf('@');
    let emailBegin = email.slice(0, 1);
    let emailEnd = email.slice(atIndex - 1);
    let toReplacePositions = atIndex  - 2;
    let mask = "*".repeat(toReplacePositions)
  return (`${emailBegin}${mask}${emailEnd}`);
}

let email;
email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com"
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));
//slice, repeat, indexOf, replace could be used