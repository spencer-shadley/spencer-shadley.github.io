var text = []; //"content of text here";
var delay = 50;
var currentWord = 0;
var currentChar = 1;
var destination = "infoSpot";

console.log("testing - 2");

function type() {
    if (document.getElementById) {
        var dest = document.getElementById(destination);
        if (dest) {
            dest.innerHTML = text[currentWord].substr(0, currentChar);
            ++currentChar;
            if (currentChar > text[currentWord].length) {
                currentChar = 1;

                currWord + 1 === text.length ? currWord = 0 : ++currentWord;

                ++currentWord;
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

startTyping(["am I automatically typing", " this message on your screen?"], 50, "infoSpot");