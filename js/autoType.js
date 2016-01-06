var text = new Array();
var delay = 50;
var currentWord = 0;
var currentChar = 0;
var dest = null;

function type() {
    dest.innerHTML = text[currentWord].substr(0, ++currentChar);
    if (currentChar > text[currentWord].length) setTimeout("unType()", 2000); // delay before erasing message
    else                                        setTimeout("type()", delay);
}

function unType() {
    dest.innerHTML = text[currentWord].substr(0, currentChar);
    if (--currentChar === 0) {
        dest.innerHTML = "<br>"; // otherwise page will jump due to line deletion
        if (currentWord + 1 === text.length) currentWord = 0;
        else ++currentWord;
        setTimeout("type()", 750); // delay before typing new message
    } else setTimeout("unType()", delay/2);
}

// start after page load
text = ["Software Developer", "University of Texas Student", "Entrepreneur"];
delay = 50;
dest = document.getElementById("messages");
type();