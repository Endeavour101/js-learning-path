let lunches = [];
function addLunchToEnd(attrArray, attrString) {
  attrArray.push(attrString);
  console.log(`${attrString} added to the end of the lunch menu.`);
  return attrArray;
}

function addLunchToStart(attrArray, attrString) {
  attrArray.unshift(attrString);
  console.log(`${attrString} added to the start of the lunch menu.`);
  return attrArray;
}

function removeLastLunch(attrArray) {
  if (attrArray.length == 0) {
    console.log("No lunches to remove.");
  } else {
    let removedLastLunch = attrArray.pop();
    console.log(`${removedLastLunch} removed from the end of the lunch menu.`);
  }
  return attrArray;
}

function removeFirstLunch(attrArray) {
  if (attrArray.length == 0) {
    console.log("No lunches to remove.");
  } else {
    let removedFirstLunch = attrArray.shift();
    console.log(
      `${removedFirstLunch} removed from the start of the lunch menu.`,
    );
  }
  return attrArray;
}

function getRandomLunch(attrArray) {
  if (attrArray.length == 0) {
    console.log("No lunches available.");
  } else {
    let arrayLength = attrArray.length - 1;
    let randomLunchNumber = Math.floor(Math.random() * (arrayLength + 1));
    let randomLunchSelected = attrArray[randomLunchNumber];
    console.log(`Randomly selected lunch: ${randomLunchSelected}`);
  }
}

function showLunchMenu(attrArray) {
  if (attrArray.length > 0) {
    console.log(`Menu items: ${attrArray.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

console.log(addLunchToEnd(lunches, "cream"));
console.log(addLunchToEnd(lunches, "stew"));
console.log(addLunchToStart(lunches, "soup"));
showLunchMenu(lunches);
