const setSymbols =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generatePassword(passwordLength) {
  const setSymbolsLength = setSymbols.length;
  let result = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomPosition = Math.floor(Math.random() * setSymbolsLength);
    result += setSymbols[randomPosition];
  }
  return result;
}

let password = generatePassword(13);
console.log(`Generated password: ${password}`);
