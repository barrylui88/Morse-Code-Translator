let translateBtn = $("#translate-btn")
console.log(translateBtn)

let lettersTxtBx = $("#letters-txtbx")
console.log(lettersTxtBx)

let morseTxtBx = $("#morse-txtbx")
console.log(morseTxtBx)

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
