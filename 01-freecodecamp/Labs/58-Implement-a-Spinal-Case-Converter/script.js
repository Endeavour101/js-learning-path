function spinalCase(userString) {
  const splittedWords = userString.split(/\s+|_+|(?=[A-Z])/);
  const convertedWords = splittedWords.map((word) => word.toLowerCase());
  return convertedWords.join("-");
}

//console.log(spinalCase("ProductLanding page"));
//console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));

/* spinalCase("ProductLanding page") product-landing-page
spinalCase("This Is Spinal Tap") this-is-spinal-tap
spinalCase("thisIsSpinalTap") this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh") teletubbies-say-eh-oh
spinalCase("AllThe-small Things") all-the-small-things */

/* ProductLanding page
This Is Spinal Tap
thisIsSpinalTap
The_Andy_Griffith_Show
Teletubbies say Eh-oh
AllThe-small Things */
