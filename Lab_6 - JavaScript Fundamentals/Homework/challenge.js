const calculateSum = function () {
  const array = [1, 2, 3, 4];
  let sum = 0;
  for (let num of array) {
    sum += num;
  }

  return sum;
};

const calculateProduct = function () {
  const array = [1, 2, 3, 4];
  let product = 1;
  for (let num of array) {
    product *= num;
  }

  return product;
};

console.log(calculateSum());
console.log(calculateProduct());
