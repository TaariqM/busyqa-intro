function promptUser() {
  const userInput = window.prompt("Enter a message to display");
  displayMessage(userInput);
}

function displayMessage(message) {
  if (message === null) {
    console.log("Message is null");
  } else if (message === "") {
    console.log("Message is empty");
  } else {
    console.log(message);
  }
}

promptUser();
