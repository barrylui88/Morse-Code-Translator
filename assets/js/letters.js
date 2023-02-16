let translateBtn = $("#translate-btn")

let lettersTxtBx = $("#letters-txtbx")

let morseTxtBx = $("#morse-txtbx")

let saveBtn = $("#save-btn")

let clearBtn = $("#clr-btn")

let letters;

let historyButtons = $("#history-buttons");
let history = [];
let historyButton0;
let historyButton1;
let historyButton2;

// Take value from lettersTxtBx
function readValue(){
    return lettersTxtBx.val();
}
// Translate 
translateBtn.click(function(){
    refreshTxtBx()
})

// Output into morseTxtBx
function refreshTxtBx(){
morseTxtBx.val(translationLettersToMorse(readValue()))
}

// Saving lettersTxtBx
saveBtn.click(function () {
    let input = lettersTxtBx.val();
    let output = morseTxtBx.val();
    let historyItem = [input, output];
    appendHistory(historyItem);
})


// Create the clear_function
function clearTxtBx() {
    lettersTxtBx.val("");
    morseTxtBx.val("");
}
// Clearing lettersTxtBx
clearBtn.click(function(){
clearTxtBx();
})



function appendHistory(historyItem) {

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

    for (let i = 0; i < stored.length; i++) {
        
        let button = document.createElement('button');
        button.textContent = stored[i][0] + ` > ` + stored[i][1];

        button.classList.add('btn');
        button.classList.add('custom-button');
        button.id= `button-${i}`
        historyButtons.append(button);
    }

    for (i=0; i < history.length; i++) {
        if (history.length === 1) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                lettersTxtBx.val(stored[0][0]);
            })
        } else if (history.length === 2) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                lettersTxtBx.val(stored[0][0]);
            })           
            historyButton1 = $("#button-1")
            historyButton1.click(function () {
                lettersTxtBx.val(stored[1][0]);
            })
        } else if (history.length === 3) {
            historyButton0 = $("#button-0")
            historyButton0.click(function () {
                lettersTxtBx.val(stored[0][0]);
            })
            historyButton1 = $("#button-1")
            historyButton1.click(function () {
                lettersTxtBx.val(stored[1][0]);
            })
            historyButton2 = $("#button-2")
            historyButton2.click(function () {
                lettersTxtBx.val(stored[2][0]);
            })
        }
    }
}