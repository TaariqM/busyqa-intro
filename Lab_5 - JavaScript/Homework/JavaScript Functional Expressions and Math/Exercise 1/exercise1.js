const lessThanOrEqualToZero = function (num) {
  if (isNaN(num)) {
    return "Error: This is not a number";
  } else if (num <= 0) {
    return true;
  } else {
    return false;
  }
};

console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));
