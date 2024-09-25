const fs = require("node:fs");

function writeToFile(filename, content) {
  fs.writeFileSync(filename, content);
}

function readFromFile(filename) {
  return fs.readFileSync(filename, "utf-8");
}

module.exports = {
  writeToFile,
  readFromFile,
};
