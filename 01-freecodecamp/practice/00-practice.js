/* const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere",
    },
  },
};

console.log(user?.city?.house); */

/* const person = {
  name: "Alice",
  age: 30,
};

console.log(person.name); // "Alice"
console.log(person.job); // undefined
console.log(person.address.street);
 */

/* const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age); // 30 */

/* const user = {
  name: "Amela",
  surname: {
    familySurname: "Kosor",
    nickname: "Sombor",
  },
  age: 29,
  points: 4,
};

const {
  surname: { familySurname },
  points: _userPoints,
  country = "Unknown",
} = user;

console.log(familySurname);
console.log(_userPoints);
console.log(country);
 */

/* let name = "Alma";
let age = 33;

const user = { name, age };

let request = (name, age) => {
  return { name, age };
};

console.log(request(name, age));
 */

const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(arrIngredients) {
  let totalNumber;
  totalNumber =
    arrIngredients[0].ingredients.length +
    arrIngredients[1].ingredients.length +
    arrIngredients[2].ingredients.length;
  return totalNumber;
}
console.log(recipes);
console.log(getTotalIngredients(recipes));
