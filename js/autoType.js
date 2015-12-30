// alert("yo yo yo");

var text = "content of text here";
var delay = 50;
var currentChar = 1;
var destination = "infoSpot";

function type() {
    if (document.getElementById) {
        var dest = document.getElementById(destination);
        if (dest) {
            dest.innerHTML = text.substr(0, currentChar);
            currentChar++
            if (currentChar > text.length) {
                currentChar = 1;
                setTimeout("type()", 5000);
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

startTyping("am I automatically typing this message on your screen?", 50, "infoSpot");

// alert("oy oy oy");