const objA = {
  property1: 0,
  property2: 1,
};

const objB = {
  property1: 0,
  property2: 1,
};
const objC = {};
const composition = [objA, objB];

console.log(composition.indexOf(objA));
console.log(composition.indexOf(objB));
console.log(composition.indexOf(objC));
