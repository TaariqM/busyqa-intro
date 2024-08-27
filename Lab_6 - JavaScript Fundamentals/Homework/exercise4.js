const filterLessThan20 = function () {
  const values = [1, 60, 34, 30, 20, 5];
  return values.filter((value) => value < 20);
};

console.log(filterLessThan20());
