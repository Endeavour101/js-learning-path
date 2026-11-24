/* const treeSet = new Set();

// Add items to the treeSet
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

treeSet.delete("Breadfruit");

console.log(treeSet.entries()); */

/* const treeSet = new Set();

// Add items to the treeSet
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

treeSet.delete("Breadfruit");

console.log("Keys: ", treeSet.keys());
console.log("Values: ", treeSet.values());
 */

/* const treeSet = new Set();

// Add items to the treeSet
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

treeSet.delete("Breadfruit");

treeSet.forEach((tree) => console.log(tree));
//-----
//Baobab
//Jackalberry
//Mopane Tree
//-----
 */

/* const treeSet = new Set(["Baobab", "Jackalberry", "Mopane Tree"]);

// Option A: Unpack into a regular Array
const treeArray = [...treeSet.values()];

// Option B: Chain modern Iterator Helpers directly (no array needed!)
const upperTrees = treeSet
  .values()
  .map((tree) => tree.toUpperCase())
  .take(2) // Only grabs the first 2!
  .toArray();
// Result: ["BAOBAB", "JACKALBERRY"] */

const treeSet = new Set();

// Add items to the treeSet
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

treeSet.delete("Breadfruit");

console.log(treeSet.size); // 3
