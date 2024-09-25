const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

function listenForCustomEvent(callback) {
  myEmitter.on("customEvent", callback);
}

function emitCustomEvent(message) {
  myEmitter.emit("customEvent", message);
}

module.exports = {
  listenForCustomEvent,
  emitCustomEvent,
};
