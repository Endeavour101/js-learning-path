const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

/* let textSanitized = "";
checkBtn.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    alert("Please input a value");
  }
  textSanitized = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //console.log(sanitized(textInput.value));
  checkPalindrome(textSanitized(textInput.value));
}); */

let textSanitized = "";
checkBtn.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    alert("Please input a value");
  }
  textSanitized = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  checkPalindrome(textSanitized);
});

function checkPalindrome(cleanedText) {
  const textSanitizedReverse = textSanitized.split("").reverse().join("");
  if (cleanedText === textSanitizedReverse) {
    resultDiv.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultDiv.textContent = `${textInput.value} is not a palindrome`;
  }
}
