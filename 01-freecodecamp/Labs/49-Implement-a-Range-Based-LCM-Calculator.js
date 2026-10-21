function smallestCommons(rangeNumbers) {
  const min = Math.min(...rangeNumbers);
  const max = Math.max(...rangeNumbers);
  let fullNumRange = [];
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
  const getLCM = (a, b) =>
    a === 0 || b === 0 ? 0 : Math.abs(a * b) / getGCD(a, b);
  for (let i = min; i <= max; i++) {
    fullNumRange.push(i);
  }
  return fullNumRange.reduce((currentLCM, nextNumber) =>
    getLCM(currentLCM, nextNumber),
  );
}

console.log(smallestCommons([1, 5]));
