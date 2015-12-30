var messages = []; //"[set on call to type]";
var delay = 0;
var currentWord = 1;
var currentChar = 1;
var destination = "[set on call to type]";

function type() {
    console.log('call to type');
    var dest = document.getElementById(destination);
    if (dest) {
        dest.innerHTML = messages[currentWord].substr(0, currentChar);
        ++currentChar;
        if (currentChar > messages[currentWord].length) {
            ++currentWord;
            if(currentWord > messages.length) currentWord = 1;
            setTimeout("type()", 2500);
        }
        else {
            setTimeout("type()", delay);
        }
    }
    else {
        console.log("error with destiantion of typed messages in dest " + destination);
    }
}
function startTyping(textParam, delayParam, destinationParam) {
    messages = textParam;
    delay = delayParam;
    currentChar = 1;
    destination = destinationParam;
    type();
}

startTyping(["am I automatically", "typing this message", "on your screen", "?"], 40, "typingMessages");