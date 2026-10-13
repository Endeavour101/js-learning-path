let inventory = [
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 },
];
/* let product = {
  name: "sugar",
  quantity: 3,
}; */
//inventory.push(product);
function findProductIndex(productName) {
  if (!productName) {
    return -1;
  }
  let lowercaseProduct = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowercaseProduct) {
      return i;
    }
  }
  return -1;
}

//findProductIndex("sugar");

function addProduct(newProduct) {
  if (!newProduct || newProduct.name === "") return -1;
  newProduct.name = newProduct.name.toLowerCase();

  //check if the product already exists
  let alreadyExist = false;

  for (let i = 0; i < inventory.length; i++) {
    let productInInventory = inventory[i];
    if (newProduct.name === productInInventory.name) {
      productInInventory.quantity += newProduct.quantity;
      console.log(`${productInInventory.name} quantity updated`);
      alreadyExist = true;
      break;
    }
  }
  if (!alreadyExist) {
    inventory.push(newProduct);
    console.log(`${newProduct.name} added to inventory`);
    return -1;
  }
}

//addProduct(product);

function removeProduct(name, quantity) {
  if (!name || name === "") return -1;

  //product.name = product.name.toLowerCase();
  let productExist = false;

  for (let i = 0; i < inventory.length; i++) {
    let productInInventory = inventory[i];
    if (productInInventory.name.toLowerCase() === name.toLowerCase()) {
      if (!(productInInventory.quantity - quantity)) {
        inventory.splice(i, 1);
        productExist = true;
        break;
      } else if (productInInventory.quantity > quantity) {
        productInInventory.quantity -= quantity;
        productExist = true;
        console.log(
          `Remaining ${productInInventory.name} pieces: ${productInInventory.quantity}`,
        );
        break;
      } else {
        productExist = true;
        console.log(
          `Not enough ${productInInventory.name} available, remaining pieces: ${productInInventory.quantity}`,
        );
        break;
      }
    }
  }
  if (!productExist) {
    console.log(`${name.toLowerCase()} not found`);
  }
}

console.log(removeProduct("FLOUR", 5));
