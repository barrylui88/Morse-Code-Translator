// Links to HTML Elements
let morseInputTextbox = $("#morse-input-box");
let letterOutputTextbox = $("#letter-output-box");
let dotInputButton = $("#dot-input");
let dashInputButton = $("#dash-input");
let backspaceButton = $("#backspace");
let nextLetterButton = $("#next-letter-input");
let nextWordButton = $("#next-word-input");
let saveButton = $("#save-button");
let clearButton = $("#clear-button");
let historyButtons = $("#history-buttons");

// JS Variables
let currentMorseInputArray = [];
let currentMorseInputString;
let translatedLetterOutput;
let history = [];


// Event Listeners
dotInputButton.click(function () {
    currentMorseInputArray.push(".");
    updateInputBox();
    updateOutputBox();
})

dashInputButton.click(function () {
    currentMorseInputArray.push("-");
    updateInputBox();
    updateOutputBox();
})

backspaceButton.click(function () {
    currentMorseInputArray.pop();
    updateInputBox();
    updateOutputBox();
})

nextLetterButton.click(function () {
    currentMorseInputArray.push(" ");
    updateInputBox();
    updateOutputBox();
})

nextWordButton.click(function () {
    currentMorseInputArray.push(" / ");
    updateInputBox();
    updateOutputBox();
})

saveButton.click(function () {
    console.log(`It's saved`);

    let input = currentMorseInputString;
    let output = translatedLetterOutput;
    let historyItem = [input, output];
    console.log(historyItem);
    appendHistory(historyItem);
})

clearButton.click(function () {
    currentMorseInputArray = [];
    updateInputBox();
    updateOutputBox();
    historyButtons.empty();
})

// JavaScript Functions
function updateInputBox () {
    currentMorseInputString = currentMorseInputArray.join("");
    morseInputTextbox.val(currentMorseInputString);
}

function updateOutputBox () {
    translatedLetterOutput = translationMorseToLetters(currentMorseInputString);
    letterOutputTextbox.val(translatedLetterOutput);
}

function appendHistory(historyItem) {

    console.log(history);
    if(history.length >= 3){
        history.shift();
    }
    
    history.push(historyItem);
    localStorage.setItem("translateHistory", JSON.stringify(history));
    let stored = JSON.parse(localStorage.getItem("translateHistory"));
    createButton(stored);
}

function createButton(stored) {
    historyButtons.empty();

    console.log("creating buttons");
    for (let i = 0; i < stored.length; i++) {
        
        console.log("creating buttons II");
        let button = document.createElement('button');
        button.textContent = stored[i][0] + ` > ` + stored[i][1];

        button.classList.add('btn');
        button.classList.add('custom-button');
        console.log("buttons created");
        // buttons.addEventListener('click', function (event) {
        // 	morseInputTextbox.val(stored[i][0]);
        //     letterOutputTextbox.val(stored[i][1]);
        // });
        historyButtons.append(button);
    }
}