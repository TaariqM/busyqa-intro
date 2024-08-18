function addNumbers(a, b) {
  const error = isNumber(a, b);
  if (error) {
    console.log(error);
  } else {
    const sum = a + b;
    console.log("Adding two numbers " + a + " and " + b);
    console.log("The sum is " + sum);
  }
}

function subtractNumbers(a, b) {
  const error = isNumber(a, b);
  if (error) {
    console.log(error);
  } else {
    const diff = a - b;
    console.log("Subtracting two numbers " + a + " and " + b);
    console.log("The difference is " + diff);
  }
}

function multiplyNumbers(a, b) {
  const error = isNumber(a, b);

  if (error) {
    console.log(error);
  } else {
    const product = a * b;
    console.log("Multiplying two numbers + " + a + " and " + b);
    console.log("The product is " + product);
  }
}

function dividingNumbers(a, b) {
  const error = isNumber(a, b);
  if (error) {
    console.log(error);
  } else {
    const divide = a * b;
    console.log("Dividing two numbers + " + a + " and " + b);
    console.log("The answer is " + divide);
  }
}

function userPrompt() {
  const operation = window.prompt(
    "Would you like to add, subtract, multiply, or divide? Please enter the operator symbol"
  );
  const firstNum = window.prompt("Please enter the first number");
  const secondNum = window.prompt("Please enter the second number");
  calculate(operation, parseInt(firstNum), parseInt(secondNum));
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return addNumbers(num1, num2);
    case "-":
      return subtractNumbers(num1, num2);
    case "*":
      return multiplyNumbers(num1, num2);
    case "/":
      return dividingNumbers(num1, num2);
    default:
      console.log("Unknown operation entered!");
  }
}

function isNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Enter numbers only!";
  }
}

userPrompt();
