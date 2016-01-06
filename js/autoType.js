var text = [];
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

function type() {
    dest.innerHTML = text[currentWord].substr(0, ++currentChar);
    if (currentChar > text[currentWord].length) setTimeout("unType()", 1500);
    else                                        setTimeout("type()", delay);
}

function unType() {
    dest.innerHTML = text[currentWord].substr(0, currentChar);
    if (--currentChar === 0) {
        dest.innerHTML = "<br>"; // otherwise page will jump due to line deletion
        if (currentWord + 1 === text.length) currentWord = 0;
        else ++currentWord;
        setTimeout("type()", 15000); // delay before erasing word
    } else setTimeout("unType()", delay/2);
}

function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    dest = document.getElementById(destinationParam);
    setTimeout("type()", 500); // delay before typing new message
}

// start 3s after page load
window.addEventListener("load", function () {
    setTimeout(startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages"),
        3000);
}, false);