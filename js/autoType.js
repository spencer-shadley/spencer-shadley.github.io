var text = []; //"content of text here";
var delay = 50;
var currentWord = 0;
var currentChar = 1;
var destination = "[set in call to type]";
var dest = null;

console.log("testing - 3");

function type() {
    if (document.getElementById) {
        dest = document.getElementById(destination);
        if (dest) {
            dest.innerHTML = text[currentWord].substr(0, currentChar);
            ++currentChar;
            if (currentChar > text[currentWord].length) {

                unType();

                currentChar = 1;
                if (++currentWord === text.length) {
                    currentWord = 0;
                }

            }
            else
                setTimeout("type()", delay);
        }
    }
}

function unType() {
    console.log("unType()");
    dest.innerHTML = text[currentWord].substr(0, currentChar - 2);

    if (currentChar === 1)
        type();//setTimeout("type()", 2500);
}

function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    currentChar = 1;
    destination = destinationParam;
    type();
}

startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages");