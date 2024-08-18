const fixedPi = function (num) {
  if (!typeof num === "number") {
    throw new Error("Argument is not a number");
  }

  return Math.PI.toFixed(num);
};

console.log(fixedPi(5));
console.log(fixedPi(4));
console.log(fixedPi(15));
