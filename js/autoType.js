var text = []; //"content of text here";
var delay = 50;
var currentWord = 0;
var currentChar = 1;
var destination = "[set in call to type]";

console.log("testing - 10");

function type() {
    if (document.getElementById) {
        var dest = document.getElementById(destination);
        if (dest) {
            dest.innerHTML = text[currentWord].substr(0, currentChar);
            ++currentChar;
            if (currentChar > text[currentWord].length) {

                currentChar = 1;
                (++currentWord === text.length) ? (currentWord = 0) : --currentWord;

                setTimeout("type()", 2500);
            }
            else {
                setTimeout("type()", delay);
            }
        }
    }
}
function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    currentChar = 1;
    destination = destinationParam;
    type();
}

startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 40, "messages");