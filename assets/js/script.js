// Homepage Typewriter Effects
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Translate your message to letter')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('-- --- .-. ... .')
    .pauseFor(2500)
    .deleteAll()
    .start();
