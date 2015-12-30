var text = []; //"content of text here";
var delay = 50;
var currentWord = 0;
var currentChar = 1;
var destination = "[set in call to type]";

console.log("testing - 4");

function type() {
    if (document.getElementById) {
        var dest = document.getElementById(destination);
        if (dest) {
            dest.innerHTML = text[currentWord].substr(0, currentChar);
            ++currentChar;
            setTimeout("type()", 2500);
            /*if (currentChar > text[currentWord].length) {

               // unType();

                if (currentWord === text.length - 1) {
                    currentWord = 0;
                } else
                    ++currentWord;

                currentChar = 1;

            }
            else {
                setTimeout("type()", delay);
            }*/
        }
    }
}

/*function unType() {
    console.log("unType()");

    if (currentChar === 0) { console.log("done untyping"); return; }

    console.log("untyping");

    var dest = document.getElementById(destination);
    dest.innerHTML = text[currentWord].substr(0, --currentChar);
    setTimeout("unType()", delay);
}*/

function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    currentChar = 1;
    destination = destinationParam;
    type();
}

startTyping(["Software Developer", "University of Texas Student", "Entrepreneur"], 50, "messages");