let lettersDemo = "Hello World!"
let userLettersInput;
let morseDemo = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--"
let userMorseInput;
let lettersInputSplit = [];
let morseInputSplit = [];
let translatedOutputArray = [];
let translatedOutput;

// Translation Function
function translationLettersToMorse (lettersInput) {
    lettersInputSplit = [];
    morseInputSplit = []
    translatedOutputArray = [];
    translatedOutput = "";
    lettersInputSplit = lettersInput.toLowerCase().split("");
    for (i=0; i<lettersInputSplit.length; i++) {
        if (lettersInputSplit[i] === "a") {
            translatedOutputArray.push(".-")
        } else if (lettersInputSplit[i] === "b") {
            translatedOutputArray.push("-...")
        } else if (lettersInputSplit[i] === "c") {
            translatedOutputArray.push("-.-.")
        } else if (lettersInputSplit[i] === "d") {
            translatedOutputArray.push("-..")
        } else if (lettersInputSplit[i] === "e") {
            translatedOutputArray.push(".")
        } else if (lettersInputSplit[i] === "f") {
            translatedOutputArray.push("..-.")
        } else if (lettersInputSplit[i] === "g") {
            translatedOutputArray.push("--.")
        } else if (lettersInputSplit[i] === "h") {
            translatedOutputArray.push("....")
        } else if (lettersInputSplit[i] === "i") {
            translatedOutputArray.push("..")
        } else if (lettersInputSplit[i] === "j") {
            translatedOutputArray.push(".---")
        } else if (lettersInputSplit[i] === "k") {
            translatedOutputArray.push("-.-")
        } else if (lettersInputSplit[i] === "l") {
            translatedOutputArray.push(".-..")
        } else if (lettersInputSplit[i] === "m") {
            translatedOutputArray.push("--")
        } else if (lettersInputSplit[i] === "n") {
            translatedOutputArray.push("-.")
        } else if (lettersInputSplit[i] === "o") {
            translatedOutputArray.push("---")
        } else if (lettersInputSplit[i] === "p") {
            translatedOutputArray.push(".--.")
        } else if (lettersInputSplit[i] === "q") {
            translatedOutputArray.push("--.-")
        } else if (lettersInputSplit[i] === "r") {
            translatedOutputArray.push(".-.")
        } else if (lettersInputSplit[i] === "s") {
            translatedOutputArray.push("...")
        } else if (lettersInputSplit[i] === "t") {
            translatedOutputArray.push("-")
        } else if (lettersInputSplit[i] === "u") {
            translatedOutputArray.push("..-")
        } else if (lettersInputSplit[i] === "v") {
            translatedOutputArray.push("...-")
        } else if (lettersInputSplit[i] === "w") {
            translatedOutputArray.push(".--")
        } else if (lettersInputSplit[i] === "x") {
            translatedOutputArray.push("-..-")
        } else if (lettersInputSplit[i] === "y") {
            translatedOutputArray.push("-.--")
        } else if (lettersInputSplit[i] === "z") {
            translatedOutputArray.push("--..")
        } else if (lettersInputSplit[i] === "1") {
            translatedOutputArray.push(".----")
        } else if (lettersInputSplit[i] === "2") {
            translatedOutputArray.push("..---")
        } else if (lettersInputSplit[i] === "3") {
            translatedOutputArray.push("...--")
        } else if (lettersInputSplit[i] === "4") {
            translatedOutputArray.push("....-")
        } else if (lettersInputSplit[i] === "5") {
            translatedOutputArray.push(".....")
        } else if (lettersInputSplit[i] === "6") {
            translatedOutputArray.push("-....")
        } else if (lettersInputSplit[i] === "7") {
            translatedOutputArray.push("--...")
        } else if (lettersInputSplit[i] === "8") {
            translatedOutputArray.push("---..")
        } else if (lettersInputSplit[i] === "9") {
            translatedOutputArray.push("----.")
        } else if (lettersInputSplit[i] === "0") {
            translatedOutputArray.push("-----")
        } else if (lettersInputSplit[i] === ".") {
            translatedOutputArray.push(".-.-.-")
        } else if (lettersInputSplit[i] === ",") {
            translatedOutputArray.push("--..--")
        } else if (lettersInputSplit[i] === "?") {
            translatedOutputArray.push("..--..")
        } else if (lettersInputSplit[i] === "\'") {
            translatedOutputArray.push(".----.")
        } else if (lettersInputSplit[i] === "!") {
            translatedOutputArray.push("-.-.--")
        } else if (lettersInputSplit[i] === "(") {
            translatedOutputArray.push("-.--.")
        } else if (lettersInputSplit[i] === ")") {
            translatedOutputArray.push("-.--.-")
        } else if (lettersInputSplit[i] === "&") {
            translatedOutputArray.push(".-...")
        } else if (lettersInputSplit[i] === ":") {
            translatedOutputArray.push("---...")
        } else if (lettersInputSplit[i] === ";") {
            translatedOutputArray.push("-.-.-.")
        } else if (lettersInputSplit[i] === "=") {
            translatedOutputArray.push("-...-")
        } else if (lettersInputSplit[i] === "+") {
            translatedOutputArray.push(".-.-.")
        } else if (lettersInputSplit[i] === "-") {
            translatedOutputArray.push("-....-")
        } else if (lettersInputSplit[i] === "_") {
            translatedOutputArray.push("..--.-")
        } else if (lettersInputSplit[i] === "\"") {
            translatedOutputArray.push(".-..-.")
        } else if (lettersInputSplit[i] === "$") {
            translatedOutputArray.push("...-..-")
        } else if (lettersInputSplit[i] === "@") {
            translatedOutputArray.push(".--.-.")
        } else if (lettersInputSplit[i] === " ") {
            translatedOutputArray.push("/")
        } else {
            translatedOutputArray.push("?")
        }
    }
    translatedOutput = translatedOutputArray.join(" ");
    console.log(translatedOutput);
}

translationLettersToMorse(userLettersInput);

function translationMorseToLetters (morseInput) {
    morseInputSplit = morseInput.split(" ");
    lettersInputSplit = [];
    translatedOutputArray = [];
    translatedOutput = "";
    for (i=0; i<morseInputSplit.length; i++) {
        if (morseInputSplit[i] === ".-") {
            translatedOutputArray.push("a")
        } else if (morseInputSplit[i] === "-...") {
            translatedOutputArray.push("b")
        } else if (morseInputSplit[i] === "-.-.") {
            translatedOutputArray.push("c")
        } else if (morseInputSplit[i] === "-..") {
            translatedOutputArray.push("d")
        } else if (morseInputSplit[i] === ".") {
            translatedOutputArray.push("e")
        } else if (morseInputSplit[i] === "..-.") {
            translatedOutputArray.push("f")
        } else if (morseInputSplit[i] === "--.") {
            translatedOutputArray.push("g")
        } else if (morseInputSplit[i] === "....") {
            translatedOutputArray.push("h")
        } else if (morseInputSplit[i] === "..") {
            translatedOutputArray.push("i")
        } else if (morseInputSplit[i] === ".---") {
            translatedOutputArray.push("j")
        } else if (morseInputSplit[i] === "-.-") {
            translatedOutputArray.push("k")
        } else if (morseInputSplit[i] === ".-..") {
            translatedOutputArray.push("l")
        } else if (morseInputSplit[i] === "--") {
            translatedOutputArray.push("m")
        } else if (morseInputSplit[i] === "-.") {
            translatedOutputArray.push("n")
        } else if (morseInputSplit[i] === "---") {
            translatedOutputArray.push("o")
        } else if (morseInputSplit[i] === ".--.") {
            translatedOutputArray.push("p")
        } else if (morseInputSplit[i] === "--.-") {
            translatedOutputArray.push("q")
        } else if (morseInputSplit[i] === ".-.") {
            translatedOutputArray.push("r")
        } else if (morseInputSplit[i] === "...") {
            translatedOutputArray.push("s")
        } else if (morseInputSplit[i] === "-") {
            translatedOutputArray.push("t")
        } else if (morseInputSplit[i] === "..-") {
            translatedOutputArray.push("u")
        } else if (morseInputSplit[i] === "...") {
            translatedOutputArray.push("v")
        } else if (morseInputSplit[i] === ".--") {
            translatedOutputArray.push("w")
        } else if (morseInputSplit[i] === "-..-") {
            translatedOutputArray.push("x")
        } else if (morseInputSplit[i] === "-.--") {
            translatedOutputArray.push("y")
        } else if (morseInputSplit[i] === "--..") {
            translatedOutputArray.push("z")
        } else if (morseInputSplit[i] === ".----") {
            translatedOutputArray.push("1")
        } else if (morseInputSplit[i] === "..---") {
            translatedOutputArray.push("2")
        } else if (morseInputSplit[i] === "...--") {
            translatedOutputArray.push("3")
        } else if (morseInputSplit[i] === "....-") {
            translatedOutputArray.push("4")
        } else if (morseInputSplit[i] === ".....") {
            translatedOutputArray.push("5")
        } else if (morseInputSplit[i] === "-....") {
            translatedOutputArray.push("6")
        } else if (morseInputSplit[i] === "--...") {
            translatedOutputArray.push("7")
        } else if (morseInputSplit[i] === "---..") {
            translatedOutputArray.push("8")
        } else if (morseInputSplit[i] === "----.") {
            translatedOutputArray.push("9")
        } else if (morseInputSplit[i] === "-----") {
            translatedOutputArray.push("0")
        } else if (morseInputSplit[i] === ".-.-.-") {
            translatedOutputArray.push(".")
        } else if (morseInputSplit[i] === "--..--") {
            translatedOutputArray.push(",")
        } else if (morseInputSplit[i] === "?") {
            translatedOutputArray.push("..--..")
        } else if (morseInputSplit[i] === "\'") {
            translatedOutputArray.push(".----.")
        } else if (morseInputSplit[i] === "!") {
            translatedOutputArray.push("-.-.--")
        } else if (morseInputSplit[i] === "(") {
            translatedOutputArray.push("-.--.")
        } else if (morseInputSplit[i] === ")") {
            translatedOutputArray.push("-.--.-")
        } else if (morseInputSplit[i] === "&") {
            translatedOutputArray.push(".-...")
        } else if (morseInputSplit[i] === ":") {
            translatedOutputArray.push("---...")
        } else if (morseInputSplit[i] === ";") {
            translatedOutputArray.push("-.-.-.")
        } else if (morseInputSplit[i] === "=") {
            translatedOutputArray.push("-...-")
        } else if (morseInputSplit[i] === "+") {
            translatedOutputArray.push(".-.-.")
        } else if (morseInputSplit[i] === "-") {
            translatedOutputArray.push("-....-")
        } else if (morseInputSplit[i] === "_") {
            translatedOutputArray.push("..--.-")
        } else if (morseInputSplit[i] === "\"") {
            translatedOutputArray.push(".-..-.")
        } else if (morseInputSplit[i] === "$") {
            translatedOutputArray.push("...-..-")
        } else if (morseInputSplit[i] === "@") {
            translatedOutputArray.push(".--.-.")
        } else if (morseInputSplit[i] === "/") {
            translatedOutputArray.push(" ")
        } else {
            translatedOutputArray.push("?")
        }
    }
    translatedOutput = translatedOutputArray.join("");
    console.log(translatedOutput);
}

translationMorseToLetters(userMorseInput);