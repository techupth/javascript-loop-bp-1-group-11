// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
let totalScore = 0;
let averageScore = 0;
let numbers = Object.values(studentsScore);
let studentNames = Object.keys(studentsScore)
let numberofStudents = numbers.length
let highestScore = numbers[0];
let highestScoreName;
let lowestScore = numbers[0];
let lowestScoreName;

numbers.forEach((number) => {totalScore += number})
averageScore = totalScore/numberofStudents;

for (let i = 0; i < numberofStudents; i++ ) {
  if (numbers[i] > highestScore) {
    highestScore = numbers[i];
    highestScoreName = studentNames[i]
  }
}

for (let i = 0; i < numberofStudents; i++ ) {
  if (numbers[i] < lowestScore) {
    lowestScore = numbers[i];
    lowestScoreName = studentNames[i]
  }
}
console.log(`Average score is ${averageScore}`);
console.log(`${highestScoreName} has the highest score, which is ${highestScore} points.`);
console.log(`${lowestScoreName} has the lowest score, which is ${lowestScore} points.`);

