let questions = [
  {
    category: "Science",
    question: "What is the first name of Edison?",
    choices: ["Thomas", "Boris", "Elisa"],
    answer: "Thomas",
  },
  {
    category: "Politics",
    question: "What is the first name of the first US President?",
    choices: ["Helmut", "Margaret", "George"],
    answer: "George",
  },
  {
    category: "Music",
    question: "What is the first name of Morrison (The Doors)?",
    choices: ["Berta", "Jim", "Roland"],
    answer: "Jim",
  },
  {
    category: "Physics",
    question: "What is the first name of Volta?",
    choices: ["Alessandro", "Petra", "John"],
    answer: "Alessandro",
  },
  {
    category: "Biology",
    question: "What is the first name of Darwin?",
    choices: ["Humbolt", "Marta", "Charles"],
    answer: "Charles",
  },
];

function getRandomQuestion(questions) {
  let questionNumber = Math.floor(Math.random() * questions.length);
  return questions[questionNumber];
}

function getRandomComputerChoice(possibleChoices) {
  let choiceNumber = Math.floor(Math.random() * possibleChoices.length);
  let randomChoice = possibleChoices[choiceNumber];
  return randomChoice;
}

function getResults(questionObject, computerChoice) {
  if (questionObject.answer === computerChoice) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

let selectedQuestion = getRandomQuestion(questions);
console.log(selectedQuestion);
let computerChoice = getRandomComputerChoice(selectedQuestion.choices);
console.log(computerChoice);
console.log(getResults(selectedQuestion, computerChoice));
