function displayMessage(message) {
  if (message === null) {
    console.log("Message is null");
  } else if (message === "") {
    console.log("Message is empty");
  } else {
    console.log(message);
  }
}

displayMessage(null);
displayMessage("");
displayMessage(false);
displayMessage("This is a test");
displayMessage("pizza!");
displayMessage("and wings!");
