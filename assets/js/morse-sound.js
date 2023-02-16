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



document.getElementById("play-btn").addEventListener("click", function() {
  let input = document.getElementById("morse-txtbx").value.toLowerCase();
  let code = "";
  for (let i = 0; i < input.length; i++) {
    if (morseCode[input[i]]) {
      code += morseCode[input[i]] + " ";
    }
  }
  playMorseCode(code);
});

function playMorseCode(code) {
  let codeArr = code.split(" ");
  let i = 0;
  let interval = setInterval(function() {
    if (i >= codeArr.length) {
      clearInterval(interval);
      return;
    }
    let currCode = codeArr[i];
    for (let j = 0; j < currCode.length; j++) {
      if (currCode[j] === ".") {
        ditSound.currentTime = 0;
        ditSound.play();
      } else if (currCode[j] === "-") {
        dahSound.currentTime = 0;
        dahSound.play();
      }
    }
    i++;
  }, 500);
}



