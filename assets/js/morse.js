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
let historyButtons = $("#history-buttons")
let historyButton0;
let historyButton1;
let historyButton2;
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
    console.log(stored);
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
        button.id= `button-${i}`
        console.log("buttons created");
        historyButtons.append(button);
    }

    for (i=0; i < history.length; i++) {
        if (history.length === 1) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[0][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();
            })
        } else if (history.length === 2) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[0][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();            
            })
            historyButton1 = $("#button-1")
            historyButton1.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[1][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();            
            })
        } else if (history.length === 3) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[0][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();            
            })
            historyButton1 = $("#button-1")
            historyButton1.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[1][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();            
            })
            historyButton2 = $("#button-2")
            historyButton2.click(function () {
                morseInputTextbox.val(JSON.parse(localStorage.getItem("translateHistory"))[2][0]);
                currentMorseInputArray = morseInputTextbox.val().split("");
                currentMorseInputString = currentMorseInputArray.join("");
                updateOutputBox();            
            })
        }
    }
}