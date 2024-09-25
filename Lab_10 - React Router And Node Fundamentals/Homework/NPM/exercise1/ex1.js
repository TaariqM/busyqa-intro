import { upperCase } from "upper-case";

const greeter = (text) => {
  for (let i = 0; i < 10; i++) {
    console.log(upperCase(text));
  }
};

greeter("hello world");
// console.log(upperCase("string"));
