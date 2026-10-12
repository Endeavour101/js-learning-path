const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(shuffledFragments) {
  //let clonedShuffledFragments = structuredClone(shuffledFragments);
  let result = [];
  for (
    let currentFragment = 0;
    currentFragment < shuffledFragments.length;
    currentFragment++
  ) {
    let fragment = shuffledFragments[currentFragment];
    if (fragment !== undefined) {
      //console.log(fragment);
      result.push(fragment);
    } else {
      console.log(`[COMPACTED] Undefined element removed!`);
    }
  }
  return result;
}

let compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arrayFragments) {
  let sortedFragments = [...arrayFragments]; //shallow copy created

  for (let i = 0; i < sortedFragments.length - 1; i++) {
    for (let j = 0; j < sortedFragments.length - 1; j++) {
      if (sortedFragments[j].id > sortedFragments[j + 1].id) {
        let temp = sortedFragments[j];
        sortedFragments[j] = sortedFragments[j + 1];
        sortedFragments[j + 1] = temp;
      }
    }
  }
  return sortedFragments;
}

let sortedFragments = sortFragments(compactedShuffledFragments);
console.log(sortedFragments);

function dedupeFragments(sortedFragments) {
  if (sortedFragments.length === 0) return [];

  let result = [sortedFragments[0]];

  for (let i = 1; i < sortedFragments.length; i++) {
    if (sortedFragments[i].id !== sortedFragments[i - 1].id) {
      result.push(sortedFragments[i]);
    } else {
      console.log(`[DEDUPED] Duplicated element removed!`);
    }
  }
  return result;
}

let dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sortedFragments) {
  if (sortedFragments.length < 2) {
    return [...sortedFragments];
  }

  let result = [];
  let lowestId = sortedFragments[0].id;
  let highestId = sortedFragments[sortedFragments.length - 1].id;

  let currentIndex = 0;

  for (let currentId = lowestId; currentId <= highestId; currentId++) {
    if (
      sortedFragments[currentIndex] &&
      sortedFragments[currentIndex].id === currentId
    ) {
      result.push(sortedFragments[currentIndex]);
      currentIndex++;
    } else {
      result.push({ id: currentId, text: "[...]" });
      console.log(`[FILLED] Missing fragment with ID ${currentId} filled.`);
    }
  }

  return result;
}

let filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sortedFragments) {
  let result = "";

  for (let i = 0; i < sortedFragments.length; i++) {
    result += sortedFragments[i].text;

    if (i < sortedFragments.length - 1) {
      result += "\n";
    }
  }

  return result;
}
