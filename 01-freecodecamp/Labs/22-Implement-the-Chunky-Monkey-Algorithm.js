function chunkArrayInGroups(array, number) {
  let copyArray = array.slice();
  let chunkArray = [];
  for (let i = 0; i < copyArray.length; i += number) {
    chunkArray.push(copyArray.slice(i, i + number));
  }
  return chunkArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
