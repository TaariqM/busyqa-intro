// Function for addition
function add(a, b) {
  const error = isNumber(a, b);
  return error ? error : a + b;
}

// Function for subtraction
function subtract(a, b) {
  const error = isNumber(a, b);
  return error ? error : a - b;
}

// Function for multiplication
function multiply(a, b) {
  const error = isNumber(a, b);
  return error ? error : a * b;
}

// Function for division
function divide(a, b) {
  if (b === 0) {
    return "Can't divide by 0!";
  }
  const error = isNumber(a, b);
  return error ? error : a / b;
}

function isNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Enter numbers only!";
  }
}

const calculator = function (num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error("Invalid operator");
  }
};

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));
console.log(calculator(4, "/", 0));
console.log(calculator(10, "-", 5));
console.log(calculator(true, "+", 5));
console.log(calculator(10, "+", "asdf"));
