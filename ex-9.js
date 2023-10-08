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
let count = 0;

for (let student in studentsScore) {
  totalScore += studentsScore[student];
  count++;
}

let averageScore = totalScore / count;

console.log(`Average score is ${averageScore}`);


let highestScoreName = "";
let highestScore = 0;

for (let student in studentsScore) {
  if (studentsScore[student] > highestScore) {
    highestScore = studentsScore[student];
    highestScoreName = student;
  }
}

console.log(`${highestScoreName} has the highest score, which is ${highestScore} points`);

let lowestScoreName = "";
let lowestScore = Infinity;

for (let student in studentsScore) {
  if (studentsScore[student] < lowestScore) {
    lowestScore = studentsScore[student];
    lowestScoreName = student;
  }
}

console.log(`${lowestScoreName} has the lowest score, which is ${lowestScore} points`);