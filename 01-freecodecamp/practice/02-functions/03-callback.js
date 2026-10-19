/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n * 2));
numbers.forEach((n, index) => {
  console.log("result", n * 2);
  console.log("index", index);
});

///functionally the same  as above
numbers.forEach((n) => {
  n *= 2;
  console.log(n);
});

numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
}); */

/* function greeting() {
  console.log(`hello`);
}

function makeGreeting(callback) {
  console.log(`I am going to call hello...`);
  callback();
}

makeGreeting(greeting); */

/* function greeting(name, pin) {
  return `hello from callback...${name} (PIN: ${pin})`;
}

function doHMI(name, callTheCallback) {
  const PIN = "12345";
  console.log(`do something...`);
  let responcseFromCallback = callTheCallback(name, PIN);
  return responcseFromCallback;
}
let finalMessage = doHMI("john", greeting);
console.log(finalMessage); */

function renderFinalMessage(isClosed, code) {
  if (isClosed === true) {
    console.log(`Data channel is closing. Code:${code}`);
  } else {
    console.log(`Data channel is opening. Code:${code}`);
  }
}
function handleDataChannel(inputMessage) {
  let isClosed = inputMessage === "close";
  let activationCode = 12345;
  renderFinalMessage(isClosed, activationCode);
}

handleDataChannel("open");
handleDataChannel("close");
handleDataChannel("open");

/* // 1. Two separate callback functions that handle messaging differently
function logToConsole(isClosed, code) {
  if (isClosed) {
    console.log(`[CONSOLE] Channel is closing. Code: ${code}`);
  } else {
    console.log(`[CONSOLE] Channel is opening. Code: ${code}`);
  }
}

function logAlert(isClosed, code) {
  if (isClosed) {
    console.log(`⚠️ ALERT: Channel SHUTDOWN initiated with code ${code}!`);
  } else {
    console.log(`🌐 ALERT: Channel ONLINE initiated with code ${code}!`);
  }
}

// 2. The main handler engine. It accepts a CALLBACK function as its third parameter!
function handleDataChannel(inputMessage, activationCode, callbackFunction) {
  let isClosed = (inputMessage === "close");
  
  // Execute the callback function that was passed in!
  callbackFunction(isClosed, activationCode);
}

// 3. Now you can choose HOW to handle the message dynamically!
handleDataChannel("open", 12345, logToConsole); // Uses the console logger
handleDataChannel("close", 99999, logAlert);    // Uses the alert logger */
