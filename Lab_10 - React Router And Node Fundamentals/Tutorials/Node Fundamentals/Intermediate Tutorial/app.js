const fsModule = require("./modules/fileSystem.js");
const eventEmitterModule = require("./modules/eventEmitter.js");
const cryptoModule = require("./modules/crypto.js");

// Using the File System module
fsModule.writeToFile("example.txt", "Hello, File System!");
const content = fsModule.readFromFile("example.txt");
console.log(`File content: ${content}`);

// Use the Event Emitter module
eventEmitterModule.listenForCustomEvent((message) => {
  console.log(`Received custom event: ${message}`);
});
eventEmitterModule.emitCustomEvent("Hello, Node.js!");

// Use the Crypto module
const hashedPassword = cryptoModule.hashPassword("MySecurePassword");
console.log(`Hashed password: ${hashedPassword}`);
