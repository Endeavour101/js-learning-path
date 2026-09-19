let replyOfWho = prompt("Who's there?");

if (replyOfWho == "" || replyOfWho == null) {
  console.log("Canceled");
} else if ( replyOfWho == "Admin") {
  let passwort = prompt("Passwort?");
  if (passwort == "TheMaster") {
    console.log("Welcome!");
  } else if (passwort == "" || passwort == null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I don't know you");
}

