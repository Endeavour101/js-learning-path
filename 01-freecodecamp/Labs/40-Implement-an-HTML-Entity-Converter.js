/* function convertHTML(chars) {
  const conversionPattern = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    '"': "&apos;",
  };

  let result = "";
  for (let char of chars) {
    if (!Object.keys(conversionPattern).includes(char)) {
      result += char;
    } else {
      let replacement = conversionPattern[char];
      result += replacement;
    }
  }
  return result;
}

console.log(convertHTML("&abc")); */

function convertHTML(chars) {
  const conversionPattern = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  let result = "";
  for (let char of chars) {
    result += conversionPattern[char] || char;
  }
  return result;
}

console.log(convertHTML('Stuff in "quotation marks"'));
