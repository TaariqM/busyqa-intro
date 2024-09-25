import say from "say";

// Use default system voice and speed
say.speak("Hello!");

// Stop the text currently being spoken
say.stop();

const sorryDave = () => {
  say.speak("I'm sorry, Dave", null, 1);
};

// More complex example (with an OS X voice) and slow speed
say.speak("What's up, dog?", null, 1, sorryDave());
