// Links to HTML Elements
let morseInputTextbox = $("#morse-input-box");
let letterOutputTextbox = $("#morse-input-box");
let dotInputButton = $("#dot-input");
let dashInputButton = $("#dash-input");
let nextLetterButton = $("#next-letter-input");
let nextWordButton = $("#next-word-input");
let saveButton = $("#save-button");
let clearButton = $("#clear-button");

// JS Variables
let currentMorseInputArray = [];
let currentMorseInputString;

// Event Listeners
dotInputButton.click(function () {
    currentMorseInputArray.push(".");
    updateInputBox();
})

// JavaScript Functions
function updateInputBox () {
    currentMorseInputString = currentMorseInputArray.join("");
    morseInputTextbox.val(currentMorseInputString);
}