function getAverage(arrayTestScores) {
  let numScores = arrayTestScores.length;
  let sumScores = 0;
  for (let currentScores = 0; currentScores < numScores; currentScores++) {
    sumScores += arrayTestScores[currentScores];
  }

  return sumScores / numScores;
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(studentScore) {
  if (studentScore < 60) return "F";
  if (studentScore < 70) return "D";
  if (studentScore < 80) return "C";
  if (studentScore < 90) return "B";
  if (studentScore < 100) return "A";
  return "A+";
}
console.log(getGrade(99));

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

//const hasPassingGrade = (score) => score !== "F";

console.log(hasPassingGrade("F"));

function studentMsg(arrayScores, studentScore) {
  let classAverage = getAverage(arrayScores);
  let studentGrade = getGrade(studentScore);
  let status = hasPassingGrade(studentScore) ? "passed" : "failed";

  return `Class average: ${classAverage}. Your grade: ${studentGrade}. You ${status} the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
