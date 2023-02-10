
const morseText = document.querySelector(".MorseText");
const textDiv = document.querySelector(".TextDiv");
const buttonTranslate = document.querySelector(".ButtonTranslate");
const buttonPlayTranslation = document.querySelector(".PlayTranslation");
const inputTranslateField = document.querySelector(".InputField");
const translationText = document.querySelector(".Translation");


const array = [];
const arrayDelays = [];
let timeStart;
let timeEnd;
let betweenTimeStart;
let betweenTimeEnd;


// Replays whatever was pressed on the button.
const replay = async function () {
    console.log(...array);
    console.log(...arrayDelays);
    // Displays dots/dashes of replay.
    morseText.textContent = morseCode();
    textDiv.style.opacity = "100%";

    // Plays from an array that stored dots/dashes and their respective duration.
    for (let i = 0; i < array.length; i++) {
        keySound.play();
        await timer(array[i].slice(1));
        keySound.stop();
        await timer(arrayDelays[i + 1]);
    };

};
replayKey.addEventListener("click", replay);

// Creates a dot/dash string of the stored clicks.
let morseCodeString = [];
const morseCode = function () {
    for (let i = 0; i < array.length; i++) {
        morseCodeString.push(array[i][0]);
    }
    return morseCodeString.join("")
};

// Translation button.
buttonTranslate.addEventListener("click", function () {

    translationText.textContent = "";
    const message = inputTranslateField.value.toLowerCase();

    translationText.textContent = translateIntoMorse(message);
    translationText.style.opacity = "100%";
});


// Starts audio reproduction of morse that was translated.
buttonPlayTranslation.addEventListener("click", function () {
    playTranslation();
});


//////////// Used for translating into morse. ////////////////
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', " "];
const morseArray = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', "/"];
//////////////////////////////////////////////////////////////

// Returns a string of morse code that was translated from the user input.
const translateIntoMorse = function (message) {
    const criptedMessage = [];

    for (let i = 0; i < message.length; i++) {
        let letterNumber = alphabetArray.indexOf(message[i]);
        //console.log(letterNumber);
        criptedMessage.push(morseArray[letterNumber])
    }
    // console.log(criptedMessage.join("  "));
    playMessage = criptedMessage.join("  ");
    return criptedMessage.join("  ");
};




/// Plays the audio created from text translated into morse code.
let playMessage;
const playTranslation = async function () {
    for (let i = 0; i < playMessage.length; i++) {
        if (playMessage[i] == ".") {
            keySound.play();
            await timer(65);
            keySound.stop();
            await timer(75);
        };

        if (playMessage[i] == "-") {
            keySound.play();
            await timer(200);
            keySound.stop();
            await timer(75);
        };

        if (playMessage[i] == " ") {
            await timer(150);
        }
        if (playMessage[i] == "/") {
            await timer(300);
        };

    };
};

buttonPlayTranslation.addEventListener("click", function () {
    playTranslation();
});

//Play correct sound for each letter

const alphabetList = [
    {
      id: 1,
      letter: "a",
      morse_code: ".-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Morse-A.ogg/Morse-A.ogg.mp3",
    },
    {
      id: 2,
      letter: "b",
      morse_code: "-...",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/70/Morse-B.ogg/Morse-B.ogg.mp3",
    },
    {
      id: 3,
      letter: "c",
      morse_code: "-.-.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0f/Morse-C.ogg/Morse-C.ogg.mp3",
    },
    {
      id: 4,
      letter: "d",
      morse_code: "-..",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9c/Morse-D.ogg/Morse-D.ogg.mp3",
    },
    {
      id: 5,
      letter: "e",
      morse_code: ".",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/90/Morse-E.ogg/Morse-E.ogg.mp3",
    },
    {
      id: 6,
      letter: "f",
      morse_code: "..-.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/58/Morse-F.ogg/Morse-F.ogg.mp3",
    },
    {
      id: 7,
      letter: "g",
      morse_code: "--.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/96/Morse-G.ogg/Morse-G.ogg.mp3",
    },
    {
      id: 8,
      letter: "h",
      morse_code: "....",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a1/Morse-H.ogg/Morse-H.ogg.mp3",
    },
    {
      id: 9,
      letter: "i",
      morse_code: "..",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6b/Morse-I.ogg/Morse-I.ogg.mp3",
    },
    {
      id: 10,
      letter: "j",
      morse_code: ".---",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fa/Morse-J.ogg/Morse-J.ogg.mp3",
    },
    {
      id: 11,
      letter: "k",
      morse_code: "-.-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/14/Morse-K.ogg/Morse-K.ogg.mp3",
    },
    {
      id: 12,
      letter: "l",
      morse_code: ".-..",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/00/Morse-L.ogg/Morse-L.ogg.mp3",
    },
    {
      id: 13,
      letter: "m",
      morse_code: "--",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/de/Morse-M.ogg/Morse-M.ogg.mp3",
    },
    {
      id: 14,
      letter: "n",
      morse_code: "-.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a8/Morse-N.ogg/Morse-N.ogg.mp3",
    },
    {
      id: 15,
      letter: "o",
      morse_code: "---",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/82/Morse-O.ogg/Morse-O.ogg.mp3",
    },
    {
      id: 16,
      letter: "p",
      morse_code: ".--.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/6/61/Morse-P.ogg/Morse-P.ogg.mp3",
    },
    {
      id: 17,
      letter: "q",
      morse_code: "--.-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/09/Morse-Q.ogg/Morse-Q.ogg.mp3",
    },
    {
      id: 18,
      letter: "r",
      morse_code: ".-.",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Morse-R.ogg/Morse-R.ogg.mp3",
    },
    {
      id: 19,
      letter: "s",
      morse_code: "...",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/9/99/Morse-S.ogg/Morse-S.ogg.mp3",
    },
    {
      id: 20,
      letter: "t",
      morse_code: "-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f0/Morse-T.ogg/Morse-T.ogg.mp3",
    },
    {
      id: 21,
      letter: "u",
      morse_code: "..-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e0/Morse-U.ogg/Morse-U.ogg.mp3",
    },
    {
      id: 22,
      letter: "v",
      morse_code: "...-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/48/Morse-V.ogg/Morse-V.ogg.mp3",
    },
    {
      id: 23,
      letter: "w",
      morse_code: ".--",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d2/Morse-W.ogg/Morse-W.ogg.mp3",
    },
    {
      id: 24,
      letter: "x",
      morse_code: "-..-",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cf/Morse-X.ogg/Morse-X.ogg.mp3",
    },
    {
      id: 25,
      letter: "y",
      morse_code: "-.--",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/3a/Morse-Y.ogg/Morse-Y.ogg.mp3",
    },
    {
      id: 26,
      letter: "z",
      morse_code: "--..",
      type: "letter",
      sound:
        "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/33/Morse-Z.ogg/Morse-Z.ogg.mp3",
    },
    {
      id: 27,
      letter: "1",
      morse_code: ".----",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/35%20The%20Number%201.mp3",
    },
    {
      id: 28,
      letter: "2",
      morse_code: "..---",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/34%20The%20Number%202.mp3",
    },
    {
      id: 29,
      letter: "3",
      morse_code: "...--",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/33%20The%20Number%203.mp3",
    },
    {
      id: 30,
      letter: "4",
      morse_code: "....-",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/32_The_Number%204.mp3",
    },
    {
      id: 31,
      letter: "5",
      morse_code: ".....",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/31_The_Number_5.mp3",
    },
    {
      id: 32,
      letter: "6",
      morse_code: "-....",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/40_The%20Number_6.mp3",
    },
    {
      id: 33,
      letter: "7",
      morse_code: "--...",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/audio/Numbers/39_The_Number_7.mp3",
    },
    {
      id: 34,
      letter: "8",
      morse_code: "---..",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/38_The_Number_8.mp3",
    },
    {
      id: 35,
      letter: "9",
      morse_code: "-----",
      type: "number",
      sound:
        "https://www.morsecodeclassnet.com/ch9-morse-audio-files/Numbers/36%20The%20Number%200%20(zero).mp3",
    },
  ];
  