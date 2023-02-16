let translateBtn = $("#translate-btn")
console.log(translateBtn)

let lettersTxtBx = $("#letters-txtbx")
console.log(lettersTxtBx)

let morseTxtBx = $("#morse-txtbx")
console.log(morseTxtBx)

let saveBtn = $("#save-btn")
console.log(saveBtn)

let clearBtn = $("#clr-btn")
console.log(clearBtn)

let letters;

let historyButtons = $("#history-buttons");
let history = [];

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
    console.log(`It's saved`);

    let input = lettersTxtBx.val();
    let output = morseTxtBx.val();
    let historyItem = [input, output];
    console.log(historyItem);
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
historyButtons.empty();
})



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