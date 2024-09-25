const math = require("./math.js");
const myEmitter = require("./emitter.js");

const result = math.square(5);
console.log(`Square of 5 is: ${result}`);

myEmitter.emit("customEvent");
