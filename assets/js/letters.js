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

// Create the clear_function
function clearTxtBx() {
    lettersTxtBx.val("");
    morseTxtBx.val("");
}
// Clearing lettersTxtBx
clearBtn.click(function(){
clearTxtBx()
})