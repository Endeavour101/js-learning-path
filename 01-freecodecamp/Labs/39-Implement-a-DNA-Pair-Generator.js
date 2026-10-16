/* const patterns = [
  ["A", "T"],
  ["C", "G"],
];

function pairElement(entryChars) {
  if (!entryChars || entryChars === "") return -1;

  let result = [];
  for (let entryChar of entryChars) {
    let exitChar = "";
    for (let i = 0; i < patterns.length; i++) {
      if (entryChar === patterns[i][0]) {
        exitChar = patterns[i][1];
        break;
      } else if (entryChar === patterns[i][1]) {
        exitChar = patterns[i][0];
        break;
      }
    }
    result.push([entryChar, exitChar]);
  }
  return result;
}

console.log(pairElement("ATCG")); */

const patterns = [
  ["A", "T"],
  ["C", "G"],
];

function pairElement(entryChars) {
  if (!entryChars || entryChars === "") return -1;

  let result = [];
  for (let entryChar of entryChars) {
    let exitChar = "";
    for (let pattern of patterns) {
      if (entryChar === pattern[0]) {
        exitChar = pattern[1];
        break;
      } else if (entryChar === pattern[1]) {
        exitChar = pattern[0];
        break;
      }
    }
    result.push([entryChar, exitChar]);
  }
  return result;
}

console.log(pairElement("ATCG"));

/*  const patterns = [
  ["A", "T"],
  ["C", "G"],
];

function pairElement(entryChars) {
  if (!entryChars || entryChars === "") return -1;

  for (let pattern of patterns) {
    console.log(pattern);
    if (entryChars === pattern[0]) return pattern[1];
    if (entryChars === pattern[1]) return pattern[0];
  }
}

console.log(pairElement("ATCG")); */
