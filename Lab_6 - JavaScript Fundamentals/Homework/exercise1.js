const difference = function (num) {
  return Math.abs(13 - num) > 13 ? Math.abs(13 - num) * 2 : 13 - num;
};

console.log(difference(32));
console.log(difference(11));
