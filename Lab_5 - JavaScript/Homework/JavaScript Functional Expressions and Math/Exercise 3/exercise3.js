const allowedIntoMovie = function (age, isSupervised) {
  if (age >= 15 || isSupervised) {
    return true;
  }

  return false;
};

console.log(allowedIntoMovie(14, true));
console.log(allowedIntoMovie(14, false));
console.log(allowedIntoMovie(16, false));
