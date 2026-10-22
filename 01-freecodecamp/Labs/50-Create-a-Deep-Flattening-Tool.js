/* function steamrollArray(nestedArray) {
  let result = [];

  for (let elementOfNestedArray of nestedArray) {
    if (Array.isArray(elementOfNestedArray)) {
      let [core] = elementOfNestedArray;
      while (Array.isArray(core)) {
        [core] = core;
      }
      if (core !== undefined) result.push(core);
    } else if (elementOfNestedArray !== undefined) {
      result.push(elementOfNestedArray);
    }
  }
  console.log(result);
} */

function steamrollArray(nestedArray) {
  let result = [];

  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      result.push(...steamrollArray(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
