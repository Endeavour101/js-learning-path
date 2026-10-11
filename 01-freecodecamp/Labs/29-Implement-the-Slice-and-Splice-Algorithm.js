/* function frankenSplice(arrToBeInserted, arrContainer, index) {
  let clonedarrContainer = structuredClone(arrContainer);
  clonedarrContainer.splice(index, 0, ...arrToBeInserted);
  return clonedarrContainer;
}
 */
function frankenSplice(arrToBeInserted, arrContainer, index) {
  let clonedarrContainer = arrContainer.slice();
  clonedarrContainer.splice(index, 0, ...arrToBeInserted);
  return clonedarrContainer;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
