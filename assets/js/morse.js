// Links to HTML Elements
let morseInputTextbox = $("#morse-input-box");
let letterOutputTextbox = $("#letter-output-box");
let dotInputButton = $("#dot-input");
let dashInputButton = $("#dash-input");
let nextLetterButton = $("#next-letter-input");
let nextWordButton = $("#next-word-input");
let saveButton = $("#save-button");
let clearButton = $("#clear-button");

// JS Variables
let currentMorseInputArray = [];
let currentMorseInputString;
let translatedLetterOutput;

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
    // SAVE BUTTON FUNCTIONALITY
    
})

clearButton.click(function () {
    currentMorseInputArray = [];
    updateInputBox();
    updateOutputBox();
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