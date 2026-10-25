function whatIsInAName(arrayOfObjects, sourceObject) {
  const criteria = Object.entries(sourceObject); //array of arrays of key-value pairs
  const filtered = arrayOfObjects.filter((object) => {
    return criteria.every(([key, value]) => object[key] === value);
  });
  return filtered;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  }),
);

/* const customers = [
  { name: 'Alice', status: 'active', tier: 'premium', region: 'US' },
  { name: 'Bob', status: 'inactive', tier: 'premium', region: 'EU' },
  { name: 'Charlie', status: 'active', tier: 'free', region: 'US' },
  { name: 'Diana', status: 'active', tier: 'premium', region: 'US' }
];

// This criteria object could have 1 key, 3 keys, or change dynamically
const dynamicCriteria = { status: 'active', region: 'US' }; 

// 1. Convert the dynamic criteria into an array of [key, value] pairs
const criteriaEntries = Object.entries(dynamicCriteria);

// 2. Filter the main dataset
const filteredCustomers = customers.filter(customer => {
  // .every() ensures that the customer matches ALL pairs in our criteria array
  return criteriaEntries.every(([key, value]) => customer[key] === value);
});

console.log(filteredCustomers); */
/*
Output: Only Alice and Diana match both 'active' AND 'US'
[
  { name: 'Alice', status: 'active', tier: 'premium', region: 'US' },
  { name: 'Diana', status: 'active', tier: 'premium', region: 'US' }
]
*/
