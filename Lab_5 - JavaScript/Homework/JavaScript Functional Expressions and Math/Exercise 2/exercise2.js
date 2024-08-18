const calculatePoints = function (numWins, numDraws, numLosses) {
  if (numWins < 0) {
    throw new Error(errorMessage("wins"));
  }

  if (numDraws < 0) {
    throw new Error(errorMessage("draws"));
  }

  if (numLosses < 0) {
    throw new Error(errorMessage("losses"));
  }
  const winPoints = numWins * 3;
  return winPoints + numDraws;
};

function errorMessage(type) {
  return "Number of " + type + " cannot be less than 0";
}

console.log(calculatePoints(3, 4, 2));
console.log(calculatePoints(5, 0, 2));
console.log(calculatePoints(0, 0, 1));
console.log(calculatePoints(1, 1, -1));
console.log(calculatePoints(1, -1, 1));
console.log(calculatePoints(-1, 1, 1));
