const ditSound = new Audio("https://upload.wikimedia.org/wikipedia/commons/transcoded/9/90/Morse-E.ogg/Morse-E.ogg.mp3");
const dahSound = new Audio("https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f0/Morse-T.ogg/Morse-T.ogg.mp3");

const morseCode = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
};

function playMorseCode(message) {
  for (const letter of message) {
    const code = morseCode[letter.toLowerCase()];
    for (const signal of code) {
      if (signal === ".") {
        ditSound.currentTime = 0;
        ditSound.play();
      } else if (signal === "-") {
        dahSound.currentTime = 0;
        dahSound.play();
      }
      
      setTimeout(() => {}, 100);
    }
    setTimeout(() => {}, 300);
  }
}