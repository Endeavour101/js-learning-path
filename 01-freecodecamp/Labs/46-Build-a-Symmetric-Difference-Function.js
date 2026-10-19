function diffArray(words1, words2) {
  let result = [];
  for (let word1 of words1) {
    let filteredOutWords2 = words2.filter((word2) => word1 === word2);
    if (filteredOutWords2.length === 0) {
      result.push(word1);
    }
    console.log(filteredOutWords2);
  }
  for (let word2 of words2) {
    let filteredOutWords1 = words1.filter((word1) => word2 === word1);
    if (filteredOutWords1.length === 0) {
      result.push(word2);
    }
    console.log(filteredOutWords1);
  }
  console.log(`Result: ${result}`);
  return result;
}

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);

/* diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]);
diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]);
diffArray([], ["apple", "banana"]);
diffArray(["apple", "banana"], []);
diffArray([], []); */

/* 
function diffArray(words1, words2) {
  // 1. Filter words1 to find items NOT included in words2
  let uniqueInWords1 = words1.filter(word => !words2.includes(word));
  
  // 2. Filter words2 to find items NOT included in words1
  let uniqueInWords2 = words2.filter(word => !words1.includes(word));
  
  // 3. Combine both results using the spread operator (...) or .concat()
  let result = [...uniqueInWords1, ...uniqueInWords2];
  
  console.log("Result:", result);
  return result;
}

diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); 
// Output: Result: [ 'pink wool' ] */

/* function diffArray(words1, words2) {
  // 1. Keep words from array 1 that do NOT exist in array 2 (-1 means not found)
  let uniqueInWords1 = words1.filter(word => words2.indexOf(word) === -1);
  
  // 2. Keep words from array 2 that do NOT exist in array 1
  let uniqueInWords2 = words2.filter(word => words1.indexOf(word) === -1);
  
  // 3. Merge them together. Array 1 items automatically come first!
  let result = uniqueInWords1.concat(uniqueInWords2);
  
  return result;
}

console.log(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
)); 
// Output: [ 'pink wool' ] */
