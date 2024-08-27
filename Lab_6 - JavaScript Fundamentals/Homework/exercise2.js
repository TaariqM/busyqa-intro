function gretter(myArray) {
  const greetText = "Hello";

  myArray.map((text) => {
    console.log(`${greetText} ${text}`);
  });
}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);
