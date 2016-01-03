var debug = false;
var trace = false;

var text = [];
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

console.log("testing - 1");
document.title = "Spencer's Portfolio";
$('meta[name=description]').remove();
$('head').append('<meta name="description" content="something about me">');

function type() {
    if(debug && trace) console.log("type()");
    dest.innerHTML = text[currentWord].substr(0, ++currentChar);
    if (currentChar > text[currentWord].length) setTimeout("unType()", 1500);
    else                                        setTimeout("type()", delay);
}

function unType() {
    if (debug && trace) console.log("unType()");

    dest.innerHTML = text[currentWord].substr(0, currentChar);
    if (--currentChar === 0) {
        dest.innerHTML = "<br>"; // otherwise page will jump due to line deletion
        if (currentWord + 1 === text.length) currentWord = 0;
        else ++currentWord;
        setTimeout("type()", 750);
    } else {
        setTimeout("unType()", delay/2);
    }
}

function startTyping(textParam, delayParam, destinationParam) {
    if (debug && trace) console.log("startTyping()");

    text = textParam;
    delay = delayParam;
    dest = document.getElementById(destinationParam);
    setTimeout("type()", 500);
}

window.onload = startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages");