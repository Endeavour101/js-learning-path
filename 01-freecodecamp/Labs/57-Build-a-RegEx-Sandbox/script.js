const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  return (
    (caseInsensitiveFlag.checked ? "i" : "") + (globalFlag.checked ? "g" : "")
  );
}

testButton.addEventListener("click", () => {
  const patternText = regexPattern.value;
  const targetText = stringToTest.textContent; // Cleans up previous HTML wrappers
  const regex = new RegExp(patternText, getFlags());

  // 1. Fetch matches array via .match()
  const matches = targetText.match(regex);

  if (matches) {
    const highlightedText = targetText.replace(
      regex,
      '<span class="highlight">$&</span>',
    );
    stringToTest.innerHTML = highlightedText;

    testResult.textContent = matches.join(", ");
  } else {
    stringToTest.innerHTML = targetText;
    testResult.textContent = "no match";
  }
});

/* testButton.addEventListener("click", () => {
  const patternText = regexPattern.value;

  const targetText = stringToTest.textContent;

  const regex = new RegExp(patternText, getFlags());

  const highlightedText = targetText.replace(
    regex,
    '<span class="highlight">$&</span>',
  );

  stringToTest.innerHTML = highlightedText;

  const isMatched = regex.test(targetText);
  testResult.textContent = isMatched ? "Match Found!" : "No Match.";
}); */

/* testButton.addEventListener("click", () => {
  const patternText = regexPattern.value;
  const targetText = stringToTest.textContent;
  const regex = new RegExp(patternText, getFlags());

  const matches = targetText.match(regex);

  if (matches) {
    const highlightedText = targetText.replace(
      regex,
      `<span class="highlight">$&</span>`,
    );
    stringToTest.innerHTML = highlightedText;
    testResult.textContent = `Match Found! (${matches.length} matches)`;
  } else {
    stringToTest.innerHTML = targetText;
    testResult.textContent = `No Match.`;
  }
});
 */
