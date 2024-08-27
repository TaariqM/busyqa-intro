const capitalizedColours = function () {
  const colours = ["red", "green", "blue"];

  return colours.map((colour) => {
    return colour[0].toUpperCase() + colour.slice(1);
  });
};

console.log(capitalizedColours());
