var text = [];
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

console.log("testing - 1");

function type() {
    console.log("type()");
    dest.innerHTML = text[currentWord].substr(0, ++currentChar);
    if (currentChar > text[currentWord].length) setTimeout("unType()", 1500);
    else                                        setTimeout("type()", delay);
}

function unType() {
    console.log("unType()");

    dest.innerHTML = text[currentWord].substr(0, --currentChar);
    if (currentChar === 0) {
        if (currentWord + 1 === text.length) currentWord = 0;
        else ++currentWord;
        setTimeout("type()", 500);
    } else {
        setTimeout("unType()", delay);
    }
}

function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    currentChar = 1;
    dest = document.getElementById(destinationParam);
    type();
}

startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages");